# Maia's Mountain

Maia Womack's portfolio, presented as a ski trail map: every project is a trail, rated from green circle to double black diamond. Live at https://maiawomack.github.io/maias-mountain/

## Stack

TanStack Start (React, TypeScript), Tailwind CSS, Radix UI, built with Vite. Scaffolded with [Lovable](https://lovable.dev).

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm test         # vitest
npm run lint
```

## Editing content

All resume content (projects/trails, roles, skills, map path coordinates) lives in [src/lib/resume.ts](src/lib/resume.ts). Trail paths use the 1920x1200 coordinate space of `src/assets/mountain-map.jpg`. Tag each bullet with a lens (`eng` / `product`) so the Engineering/Product toggle keeps working.

## Deployment

Pushes to `main` deploy to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The Pages build (`GITHUB_PAGES=true`) emits a static SPA with the repo name as base path; the default build targets Lovable's hosting.
