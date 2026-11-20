---
name: CampusPulse Event Portal
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#7b3300'
  on-tertiary: '#ffffff'
  tertiary-container: '#a04500'
  on-tertiary-container: '#ffd2bd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '800'
    lineHeight: 3rem
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '800'
    lineHeight: 2.5rem
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.875rem
    fontWeight: '700'
    lineHeight: 2.25rem
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 2rem
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '700'
    lineHeight: 1.75rem
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.25rem
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system delivers an energetic, modern, and structured experience tailored for collegiate life, student organizations, and campus administration. It bridges student engagement with institutional reliability through a high-contrast corporate-meets-creative aesthetic. 

The visual style couples crisp geometric structures with high-chroma electric accents. Clean card containers, subtle slate divider lines, and balanced typography provide an effortless canvas for dense interactive elements—such as event discovery grids, API-driven registration workflows, role selectors, and permission controls. The mood is ambitious, agile, and technically refined, instilling confidence in student organizers while remaining inviting and social for attendees.

## Colors
The color architecture relies on a crisp high-contrast light theme built upon pristine whites and slate neutrals, punctuated by an electric indigo and vibrant orange pairing.

- **Primary (`#4F46E5` / `#6366F1`)**: Anchors primary navigation, active role states, key CTAs, and structural focus rings. Tonal tints (`#EEF2FF`) form subtle card headers, table stripes, and inactive pill tags.
- **Tertiary Accent (`#F97316`)**: An electric orange dedicated to high-energy actions, live event states, registered badges, endpoints, and highlighted notifications. A soft wash (`#FFF7ED`) serves as container backdrops for warning badges and highlighted endpoints.
- **Neutrals**:
  - `Canvas / Background`: `#F8FAFC` provides soft eye comfort while allowing white cards (`#FFFFFF`) to stand forward.
  - `Borders & Rules`: `#E2E8F0` defines crisp boundary containers, table cells, and field outlines.
  - `Typography`: `#0F172A` delivers authoritative contrast for titles, while `#475569` and `#64748B` provide hierarchy for descriptions, metadata, and timestamps.
- **Semantic Badges**:
  - `GET`: Deep indigo text (`#4338CA`) on soft lavender (`#EEF2FF`).
  - `POST`: Emerald text (`#047857`) on soft mint (`#ECFDF5`).
  - `DELETE / PUT`: Rose text (`#BE123C`) on petal red (`#FFF1F2`) / Amber text (`#B45309`) on yellow (`#FEF3C7`).

## Typography
The system balances human approachability with developer clarity through a disciplined dual-font pairing:

- **Plus Jakarta Sans** acts as the primary display face. Its rounded geometric terminals and punchy letterforms capture collegiate vibrancy across headers, modal titles, and section greetings.
- **Inter** commands body text, metadata grids, table structures, and form inputs. Its standardized x-height and clear numeral shapes provide exceptional legibility across dense listings and permission badges.
- **JetBrains Mono** is incorporated selectively for API paths, IDs, timestamps, and schema definitions (such as `/api/events`, UUID strings, and HTTP methods).

## Layout & Spacing
The layout adheres to a 12-column responsive fluid grid designed to display multi-role views, navigation sidebars, and event card arrays consistently.

- **Desktop (>= 1024px)**: 12 columns with a maximum content canvas of 1280px, flanked by `2rem` outer margins and `1.5rem` gutters. Top bar accommodates identity selectors, role switches, and global search.
- **Tablet (768px - 1023px)**: 8 columns with `1.5rem` outer margins. Event grids collapse to 2 columns; table schemas convert to card layouts with nested badges.
- **Mobile (< 768px)**: 4 columns with `1rem` margins and gutters. Controls convert to full-width stacked sheets or modal dialogs.
- **Density & Padding**: Vertical rhythms maintain strict intervals: components utilize `space-sm` (8px) for badge internals, `space-md` (16px) for standard card and input padding, and `space-xl` (40px) between major functional modules.

## Elevation & Depth
Depth in the system is established through a crisp, clean layer-stack strategy combining ultra-soft ambient indigo shadowing with subtle slate perimeter strokes.

- **Base Layer (Ground)**: Slate-50 background (`#F8FAFC`) with no shadow.
- **Surface Layer (Cards, Tables, Panels)**: Pure white background (`#FFFFFF`) with a 1px solid border in `#E2E8F0` and an ambient shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)`.
- **Raised Interactive (Hover Cards, Filter Bars)**: Slightly lifted layer using `0 10px 15px -3px rgba(79, 70, 229, 0.07), 0 4px 6px -4px rgba(79, 70, 229, 0.05)` accompanied by a border transition to `#CBD5E1`.
- **Floating Overlays (Role Switcher Menus, User Selectors, Modals)**: Highest elevation featuring `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`, a prominent border stroke `#E2E8F0`, and backdrop blur (`backdrop-blur-md`) when spanning across viewport viewports.

## Shapes
A unified radius scale of Level 2 (standard `0.5rem` / 8px) balances clean contemporary ergonomics with structured interface cohesion.

- **Cards, Tables, and Data Containers**: Apply `rounded-lg` (16px) to exterior perimeters, framing data grids cleanly.
- **Buttons, Form Inputs, and Selectors**: Utilize standard `rounded` (8px) for crisp handoffs and optimal touch targets.
- **Badges, Tags, and HTTP Method Pills**: Utilize full pill styling (`rounded-full`) to delineate metadata states clearly from interactive square buttons.

## Components

### Buttons
- **Primary**: Solid `#4F46E5` fill with white text, font `label-md`, 8px radius, with subtle hover illumination (`#4338CA`) and focus ring `0 0 0 3px rgba(99, 102, 241, 0.3)`.
- **Accent (Register / Action)**: Solid `#F97316` fill with white text for prominent event actions, shifting to `#EA580C` on hover.
- **Secondary / Ghost**: White background, 1px border `#E2E8F0`, text `#0F172A`, transitioning to `#F8FAFC` on hover.

### Navbar Switchers (Role & User ID Switchers)
- Interactive compact pills anchored in the top header.
- Formed with a 1px `#E2E8F0` border, white fill, icon avatar, role indicator badge, and a trailing chevron.
- **Dropdown Panel**: Floats at Elevation 3 with a 12px radius, containing radio-style role items (`Student`, `Organizer`, `Admin`) adorned with distinct role badge colors and contextual capability descriptions.

### Badges & Method Tags
- **HTTP Method Badges**: Pill-shaped badges using `JetBrains Mono` bold labels (`GET` in violet-indigo `#EEF2FF` / `#4338CA`, `POST` in mint-emerald `#ECFDF5` / `#047857`, `DELETE` in soft red).
- **Event Category Chips**: Subtle pastel background tones matched to high-contrast text (`Technology`, `Arts`, `Greek Life`, `Career`).
- **Endpoint Snippets**: Inline code blocks with `#FFF7ED` fill and `#C2410C` mono text.

### Event Cards
- Built on pure white with an exterior 16px radius, divided into header media, body information, tag clusters, and footer CTAs.
- Features hover micro-lifts with a border transition to `#C7D2FE`.

### Data Tables & Schema Visualizers
- White tabular cards with `#F1F5F9` headers and bold `#475569` uppercase mini-headers (`label-sm`).
- Subtle horizontal dividers (`#E2E8F0`) with hover row lighting (`#F8FAFC`).
- Primary keys and relation links use monospaced indigo pill tags with key icons.

### Inputs & Forms
- 8px radius with 1px `#CBD5E1` boundary, `#FFFFFF` interior, and `0.875rem` text.
- Focus state activates an indigo border (`#6366F1`) and a 3px matching glow (`rgba(99, 102, 241, 0.2)`).