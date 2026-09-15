# NOE’S — React Redesign Concept

A clean React/Vite rebuild of a modern frontend redesign concept for **NOE'S**, a Czech field marketing, creative and production agency.

The project keeps the approved visual direction and public content while replacing the previous fragment/patch based prototype with a maintainable component architecture.

## Stack

- React
- Vite
- Modern CSS
- Native browser APIs (IntersectionObserver, matchMedia, dialog)
- Vercel-ready static deployment

## Structure

- `src/components` — isolated UI sections and interactions
- `src/data.js` — portfolio, services, brands and team content
- `src/hooks.js` — shared motion and scroll hooks
- `src/styles.css` — one consolidated responsive stylesheet

## Interaction highlights

- Responsive mobile navigation
- Reading progress indicator
- Reduced-motion aware hero parallax
- Scroll-driven case-study switching on larger screens
- Keyboard-friendly case selector and controls
- Native modal dialog for project details
- Accessible service accordion
- IntersectionObserver reveal animations
- Animated statistics
- Responsive team and contact sections

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Note

This is an independent redesign concept based on publicly available content and campaign assets from [noes.cz](https://www.noes.cz/). It is not the official production website of NOE'S.
