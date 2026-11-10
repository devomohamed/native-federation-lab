# AI Project Guide

Read this file and [RULES.md](./RULES.md) before every change.

## What this is
Angular 22 micro-frontend lab using `@angular-architects/native-federation`.

| App   | Port | Role |
|-------|------|------|
| shell | 4200 | Host. Layout (sidebar, header, footer, main content) + routing |
| mfe1  | 4201 | Remote, exposes `./Component` (`App`) from `projects/mfe1/src/app/app.ts` |
| mfe2  | 4202 | Remote, exposes `./Component` (`App`) from `projects/mfe2/src/app/app.ts` |

## Structure
- `projects/shell/src/app/app.{ts,html,scss}` – layout. Responsive: sidebar becomes an off-canvas drawer under 860px (toggle in header).
- `projects/shell/src/app/app.routes.ts` – routes: `/` Home, `/mfe1`, `/mfe2` (lazy via `loadRemoteModule`), `**` NotFound.
- `projects/shell/public/federation.manifest.json` – remote name -> `remoteEntry.json` URL.
- `projects/*/federation.config.mjs` – federation config (`exposes`, shared deps).
- `projects/shell/src/styles.scss` – global styles (shell only; remotes style via component SCSS).

## Run
`npm run start:all` (starts mfe1, mfe2, then shell), then open http://localhost:4200. Remotes must be running before the shell page loads; otherwise the browser logs `ERR_CONNECTION_REFUSED` for `remoteEntry.json` and the route shows an "unavailable" page ([remote-error.ts](./projects/shell/src/app/remote-error.ts)).

## Add a new remote
1. `ng generate application mfeN` + `ng add @angular-architects/native-federation --project mfeN --type remote --port 420N`.
2. Expose `./Component` in its `federation.config.mjs`.
3. Add it to `federation.manifest.json`, a route in `app.routes.ts`, and a `navItems` entry in `app.ts`.

## Enhancement ideas / backlog
- Dark mode toggle in header (CSS variables).
- Shared state/auth between shell and remotes (shared service via federation).
- Breadcrumbs, user menu, collapsible sidebar on desktop.
- Remote load-error fallback and loading indicator in the shell.
- E2E tests for routing.

## Change log
- Shell layout (sidebar/header/footer), routes for mfe1/mfe2, Home + NotFound, styled remotes, updated unit tests.
