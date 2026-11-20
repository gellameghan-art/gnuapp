import { useEffect, useMemo, useState } from "react";

const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || "https://gnuapp.onrender.com"
).replace(/\/+$/, "");

async function api(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
  });

  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    throw new Error(data?.error || data?.message || `Request failed (${response.status})`);
  }
  return data;
}

function shortId(value = "") {
  return value.length > 12 ? `${value.slice(0, 8)}…${value.slice(-4)}` : value;
}

export default function App() {
  const [page, setPage] = useState("events");
  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [userId, setUserId] = useState(
    () => localStorage.getItem("campuspulse-user-id") || "",
  );
  const [selectedEvent, setSelectedEvent] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    localStorage.setItem("campuspulse-user-id", userId.trim());
  }, [userId]);

  async function loadEvents() {
    setLoading(true);
    setError("");
    try {
      const result = await api("/api/events");
      setEvents(Array.isArray(result) ? result : result?.events || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function loadMyRegistrations() {
    if (!userId.trim()) {
      setError("Enter your existing user UUID above to load registrations.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const result = await api(
        `/api/me/registrations?user_id=${encodeURIComponent(userId.trim())}`,
      );
      setRegistrations(Array.isArray(result) ? result : result?.registrations || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function loadAttendees(eventId = selectedEvent) {
    if (!eventId || !userId.trim()) {
      setError("Select an event and enter its organizer's existing user UUID.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const result = await api(
        `/api/events/${encodeURIComponent(eventId)}/registrations?organizer_id=${encodeURIComponent(userId.trim())}`,
      );
      setAttendees(Array.isArray(result) ? result : result?.registrations || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  async function register(eventId) {
    if (!userId.trim()) {
      setError("Enter your existing user UUID above before registering.");
      return;
    }
    setError("");
    setNotice("");
    try {
      await api("/api/registrations", {
        method: "POST",
        body: JSON.stringify({ user_id: userId.trim(), event_id: eventId }),
      });
      setNotice("Registration created.");
    } catch (err) {
      setError(err.message);
    }
  }

  const filteredEvents = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return events;
    return events.filter((event) =>
      [event.title, event.status, event.organizer_id]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(term)),
    );
  }, [events, search]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" onClick={() => setPage("events")}>
          <span className="brand-mark">C</span> CampusPulse
        </a>
        <nav className="nav-tabs" aria-label="Main navigation">
          <button className={page === "events" ? "active" : ""} onClick={() => setPage("events")}>Events Explorer</button>
          <button className={page === "registrations" ? "active" : ""} onClick={() => { setPage("registrations"); loadMyRegistrations(); }}>My Registrations</button>
          <button className={page === "organize" ? "active" : ""} onClick={() => setPage("organize")}>Organize &amp; Manage</button>
          <button className={page === "analytics" ? "active" : ""} onClick={() => setPage("analytics")}>Admin Analytics</button>
        </nav>
        <label className="user-field">
          <span>User UUID</span>
          <input
            aria-label="User UUID"
            placeholder="Paste an existing UUID"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </label>
      </header>

      <main className="page">
        <section className="welcome-strip">
          <div>
            <span className="eyebrow">CAMPUS EVENTS</span>
            <h1>
              {page === "events" && "Find your next campus experience"}
              {page === "registrations" && "My registrations"}
              {page === "organize" && "Organizer command center"}
              {page === "analytics" && "Campus overview"}
            </h1>
            <p>Browse events and manage registrations connected to your events database.</p>
          </div>
          <div className="api-status"><span /> API <strong>{API_BASE}</strong></div>
        </section>

        {error && <div className="alert error" role="alert">{error}</div>}
        {notice && <div className="alert success" role="status">{notice}</div>}

        {page === "events" && (
          <>
            <section className="hero">
              <div>
                <span className="eyebrow light">EVENTS EXPLORER</span>
                <h2>Make room for something memorable.</h2>
                <p>Discover events from the campus events database.</p>
                <button className="button button-light" onClick={loadEvents}>Refresh events</button>
              </div>
              <div className="hero-graphic" aria-hidden="true">✦</div>
            </section>

            <div className="toolbar">
              <input
                className="search"
                placeholder="Search events, status, or organizer UUID…"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <span className="result-count">{filteredEvents.length} events</span>
            </div>

            {loading ? <p className="empty">Loading events…</p> : (
              <section className="event-grid">
                {filteredEvents.map((event) => (
                  <article className="event-card" key={event.id}>
                    <div className="event-art">
                      <span className={`status-badge ${String(event.status || "").toLowerCase()}`}>
                        {event.status || "Event"}
                      </span>
                      <span className="event-symbol">✦</span>
                      <code>ID: {shortId(event.id)}</code>
                    </div>
                    <div className="event-content">
                      <p className="organizer">Organized by {shortId(event.organizer_id || "Unknown")}</p>
                      <h3>{event.title || "Untitled event"}</h3>
                      <p className="event-description">
                        Event details available from the campus events database.
                      </p>
                      <div className="event-meta">
                        <span>Capacity</span>
                        <strong>{event.capacity ?? "Not specified"}</strong>
                      </div>
                      <button
                        className="button button-primary full-width"
                        disabled={!event.id}
                        onClick={() => register(event.id)}
                      >
                        Register
                      </button>
                    </div>
                  </article>
                ))}
              </section>
            )}
            {!loading && filteredEvents.length === 0 && (
              <p className="empty">No events found. Try refreshing or changing your search.</p>
            )}
          </>
        )}

        {page === "registrations" && (
          <section className="panel">
            <div className="panel-heading">
              <div><span className="eyebrow">STUDENT VIEW</span><h2>My active registrations</h2></div>
              <button className="button button-primary" onClick={loadMyRegistrations}>Refresh</button>
            </div>
            <p className="muted">Uses the user UUID entered in the header. This is not verified identity.</p>
            {registrations.length ? (
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Registration</th><th>Event</th><th>Event ID</th><th>Created</th></tr></thead>
                  <tbody>{registrations.map((item, index) => (
                    <tr key={item.id || index}>
                      <td><code>{shortId(item.id || "")}</code></td>
                      <td>{item.events?.title || item.event?.title || "Registration"}</td>
                      <td><code>{shortId(item.event_id || "")}</code></td>
                      <td>{item.created_at ? new Date(item.created_at).toLocaleString() : "—"}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            ) : <p className="empty">No registrations loaded yet.</p>}
          </section>
        )}

        {page === "organize" && (
          <section className="panel">
            <div className="panel-heading">
              <div><span className="eyebrow">ORGANIZER VIEW</span><h2>Attendee roster</h2></div>
              <button className="button button-primary" onClick={() => loadAttendees()}>Load roster</button>
            </div>
            <p className="muted">Choose an event. The API expects the organizer UUID as a query parameter.</p>
            <select className="select" value={selectedEvent} onChange={(event) => setSelectedEvent(event.target.value)}>
              <option value="">Select an event</option>
              {events.map((event) => <option key={event.id} value={event.id}>{event.title} — {shortId(event.id)}</option>)}
            </select>
            {attendees.length ? (
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Registration</th><th>User</th><th>Email</th><th>Registered</th></tr></thead>
                  <tbody>{attendees.map((item, index) => (
                    <tr key={item.id || index}>
                      <td><code>{shortId(item.id || "")}</code></td>
                      <td><code>{shortId(item.user_id || "")}</code></td>
                      <td>{item.users?.email || item.user?.email || "—"}</td>
                      <td>{item.created_at ? new Date(item.created_at).toLocaleString() : "—"}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            ) : <p className="empty">Select an event and load its roster.</p>}
          </section>
        )}

        {page === "analytics" && (
          <section className="panel analytics-panel">
            <span className="eyebrow">API LIMITATION</span>
            <h2>Analytics endpoints are not available</h2>
            <p className="muted">The supplied API supports event browsing, event details, registration creation, personal registrations, and organizer attendee lists. It does not expose analytics data.</p>
            <button className="button button-primary" onClick={() => setPage("events")}>Browse events</button>
          </section>
        )}
      </main>

      <footer className="footer">
        <span><strong>CampusPulse</strong> · Campus Events Platform</span>
        <span>Connected to <code>gnuapp.onrender.com</code></span>
      </footer>
    </div>
  );
}