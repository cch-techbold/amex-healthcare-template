# Frontend — React + Vite

React 19 + TypeScript + Vite, styled with Tailwind CSS and the AMEX Healthcare brand tokens
(colors, fonts) defined in `src/index.css`.

## Setup

```bash
cd frontend
npm install
```

## Run

```bash
npm run dev
```

Open http://localhost:5173. API calls to `/api/*` are automatically proxied to the FastAPI
backend running on http://localhost:8000 (see `vite.config.ts`).

## Project structure

```
frontend/
├── src/
│   ├── App.tsx        # starter page — replace with your track's UI
│   ├── index.css      # Tailwind + AMEX Healthcare brand tokens (colors, fonts)
│   └── assets/        # AMEX logo, images, etc.
├── public/            # static files served as-is (favicon, logo)
└── vite.config.ts
```

## Brand tokens

Defined via Tailwind's `@theme` in `src/index.css`, so you can use them directly as
utility classes, e.g. `bg-oxblood`, `text-charcoal`, `border-cool-steel`, `font-heading`.

| Token | Hex | Usage |
| --- | --- | --- |
| `oxblood` | `#941612` | Headlines, highlights, emphasis |
| `charcoal` | `#575656` | Body text, structure, dividers |
| `air-force-blue` | `#5e8197` | Secondary categories, charts |
| `cool-steel` | `#9db2bf` | Supporting visuals, borders |
| `dusty-olive` | `#7e9478` | Supporting visuals, charts |
| `brand-white` | `#fefdfd` | Backgrounds |

Fonts: `font-heading` (Merriweather, for headings) and `font-body` (Montserrat, for body text).

## Build

```bash
npm run build
```
