# Eurostack Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3 | UI framework |
| react-dom | ^18.3 | DOM renderer |
| react-router-dom | ^6.28 | Multi-page routing (Landing, Docs, Pricing, Services, About, Careers, Contact) |
| gsap | ^3.12 | Core animation engine, ScrollTrigger, timelines |
| lenis | ^1.1 | Smooth scroll with inertia |
| splitting | ^1.0 | Character-level text splitting for kinetic typography |
| tailwindcss | ^3.4 | Utility CSS |
| @tailwindcss/typography | ^0.5 | Prose styling for docs content |
| geist | ^1.3 | Geist Sans + Mono font package |
| lucide-react | ^0.460 | Icon library |
| vite | ^6.0 | Build tool |
| typescript | ^5.6 | Type safety |

GSAP plugins used: **ScrollTrigger** (free, bundled with gsap).

---

## Component Inventory

### Layout (shared across all pages)

| Component | Source | Notes |
|-----------|--------|-------|
| Navigation | Custom | Fixed top bar. Logo left, links right. Transparent over hero, solid on scroll. |
| Footer | Custom | Massive navy footer with large serif nav links, CET live clock. |
| PageLayout | Custom | Wraps Navigation + `<Outlet>` + Footer. Initializes Lenis globally. |

### Sections — Landing Page

| Component | Source | Notes |
|-----------|--------|-------|
| CommandCenterHero | Custom | Full-screen. SovereignDataStreams background + centered typography + CTA. |
| ModelsGallery | Custom | Horizontal scroll section. Uses GSAP ScrollTrigger pin + containerAnimation. CinematicDepthZoom per card. Progress bar at top. |
| VelocityStatement | Custom | Fullscreen interstitial. KineticTypographyMatrix effect. |
| InfrastructureGrid | Custom | 3-column grid with hover states. Static content. |
| GlobalExecution | Custom | Video background with gradient overlay. Static content. |

### Sections — Documentation Page

| Component | Source | Notes |
|-----------|--------|-------|
| DocsHero | Custom | Subtle DataStreams background + title + search bar. |
| DocsLayout | Custom | 2-column: sticky sidebar nav (25%) + scrollable content (75%). |

### Sections — Other Pages (Pricing, Services, About, Careers, Contact)

These pages use shared structural components and standard Tailwind styling. No heavy animations.

| Component | Source | Notes |
|-----------|--------|-------|
| PricingPage | Custom | Pricing tiers, feature comparison. Static layout. |
| ServicesPage | Custom | 3 service cards with descriptions. Static layout. |
| AboutPage | Custom | Mission statement, values, certifications. Static layout. |
| CareersPage | Custom | Job listings (Sales, FDE roles in Zurich). Static layout. |
| ContactPage | Custom | Contact form with fields. Static layout. |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| SovereignDataStreams | Custom | CommandCenterHero, DocsHero. Canvas-based effect with 2-layer rendering. |
| CinematicDepthZoom | Custom | ModelsGallery (per-item timeline). |
| KineticTypographyMatrix | Custom | VelocityStatement. |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Sovereign Data Streams | Raw Canvas 2D | Two-canvas system: background canvas with persistent fade trails, foreground canvas with sharp current frame. Shared math utility for ribbon points. rAF loop with time-based sine waves. | **High** |
| Cinematic Depth Zoom | GSAP + ScrollTrigger | Per-item GSAP timeline triggered within horizontal scroll container. Image wrapper recedes on z-axis while content card rises from bottom. Master horizontal tween drives containerAnimation. | **High** |
| Kinetic Velocity Typography | splitting + rAF | Splitting.js breaks text into chars. rAF loop computes scroll delta, maps to scaleY via lerp-smoothed cache. Distance-based switch between parallax-only and stretch transforms. | **High** |
| Horizontal Scroll Gallery | GSAP ScrollTrigger | Pin section, translate track horizontally via scrubbed tween. Progress bar linked to scroll progress. | **Medium** |
| Lenis Smooth Scroll | lenis | Global initialization with lerp 0.15. Integrated with ScrollTrigger via scrollerProxy. | **Low** |
| Button/link hovers | CSS transitions | 0.3s cubic-bezier color/border/background transitions. Pure Tailwind/CSS. | **Low** |
| Grid cell hover | CSS transitions | 10% Alert Red background fill on hover. Pure CSS. | **Low** |

---

## State & Logic

### Lenis ↔ ScrollTrigger Integration

Lenis must be the single source of truth for scroll position. Initialize Lenis at the PageLayout level. On every Lenis `scroll` event, call `ScrollTrigger.update()`. Use `ScrollTrigger.scrollerProxy()` if needed for pinned sections. This is critical — the Kinetic Typography depends on `window.scrollY` (or Lenis-derived scroll value), and the horizontal gallery depends on ScrollTrigger's scrubbed timeline.

### Data Streams Visibility Optimization

The SovereignDataStreams component should pause its rAF loop when the canvas is not in the viewport. Use an IntersectionObserver to toggle the animation loop. This prevents unnecessary computation on non-hero pages and when the user has scrolled past the hero.

### Horizontal Gallery Structure

The ModelsGallery section must be structurally separated:
- Outer wrapper: `overflow-hidden`, pinned by ScrollTrigger.
- Inner track: `display: flex`, translated horizontally via GSAP tween.
- Each card: `flex-shrink-0`, fixed width.
- The CinematicDepthZoom timelines are children of the horizontal track items, with `containerAnimation` pointing to the master horizontal tween.

---

## Other Key Decisions

### Multi-Page Routing

React Router with a `BrowserRouter` in `main.tsx`. Route structure:
- `/` → Landing
- `/docs` → Documentation
- `/pricing` → Pricing
- `/services` → Services
- `/about` → About
- `/careers` → Careers
- `/contact` → Contact

### Fonts

Load Playfair Display (Google Fonts) for display serif. Use Geist Sans and Geist Mono from the `geist` npm package. Configure in `tailwind.config.js`.

### Canvas Sizing

Both canvases in SovereignDataStreams must match `window.innerWidth` and `window.innerHeight`. Update on resize via a ResizeObserver on the container element (not window resize alone, to handle container-level changes).
