# Portfolio

A modern developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui-style components.

## Features

- Single-page portfolio layout
- Modular sections (`Hero`, `About`, `Skills`, `Experience`, `Projects`, `Contact`)
- Terminal-themed navigation and animated UI (Framer Motion)
- Routing with `react-router-dom` (`/` and fallback `NotFound`)
- Toasts, tooltips, and UI primitives
- Unit test setup with Vitest + Testing Library
- Playwright config for end-to-end testing

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 4
- Framer Motion
- TanStack Query
- Radix UI primitives
- Vitest + Testing Library
- Playwright

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm (or Bun)

### Install

Using npm:

```bash
npm install
```

Using Bun:

```bash
bun install
```

### Run the app

```bash
npm run dev
```

The app starts on Vite's local dev server (commonly `http://localhost:5173`).

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
- `npm run test` — run Vitest once
- `npm run test:watch` — run Vitest in watch mode

## Project Structure

```text
src/
  components/
    AboutSection.tsx
    ContactSection.tsx
    ExperienceSection.tsx
    Footer.tsx
    HeroSection.tsx
    ProjectsSection.tsx
    SkillsSection.tsx
    TerminalNav.tsx
    ul/                # reusable UI primitives
  hooks/
  lib/
  pages/
    Index.tsx
    NotFound.tsx
  test/
    setup.ts
```

## Testing

### Unit tests (Vitest)

```bash
npm run test
```

### End-to-end tests (Playwright)

Playwright is configured in `playwright.config.ts`.

## Deployment

- Build with `npm run build`
- Deploy the `dist/` output to your hosting provider
- `CNAME` files are included for custom-domain hosting

## License

Personal portfolio project.
