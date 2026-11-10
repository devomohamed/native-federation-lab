# Native Federation Lab

A micro-frontend demo built with **Angular 22** and **[Native Federation](https://native-federation.com)**. A **shell** (host) provides the main layout and routing, and loads two independently built remotes, **mfe1** and **mfe2**, at runtime.

## Architecture

| App   | Port | Role |
|-------|------|------|
| shell | 4200 | Host: sidebar, header, footer, main content, routing |
| mfe1  | 4201 | Remote, exposes `./Component` |
| mfe2  | 4202 | Remote, exposes `./Component` |

```
Browser ─► shell (:4200) ──federation.manifest.json──► mfe1 /remoteEntry.json (:4201)
                                                    └► mfe2 /remoteEntry.json (:4202)
```

## Features
- Responsive layout: sidebar becomes a slide-out drawer under 860px.
- Routes: `/` (Home), `/mfe1`, `/mfe2` (lazy-loaded remotes), `**` (404).
- Friendly "remote unavailable" page if a remote is not running.
- Shared Angular singletons between shell and remotes.

## Getting started

```bash
npm install
npm run start:all
```

Then open http://localhost:4200. `start:all` runs mfe1, mfe2 and the shell together. To run one app: `npx ng serve <shell|mfe1|mfe2>` (start the remotes first).

## Build and test

```bash
npx ng build <shell|mfe1|mfe2>
npx ng test <shell|mfe1|mfe2> --watch=false
```

## Project structure

```
projects/
  shell/   layout (src/app/app.*), routes (app.routes.ts), public/federation.manifest.json
  mfe1/    remote, federation.config.mjs exposes ./Component
  mfe2/    remote, federation.config.mjs exposes ./Component
scripts/start-all.mjs   starts all apps
```

## Adding a new remote
1. Generate the app and add Native Federation as a remote on the next port (e.g. 4203).
2. Expose `./Component` in its `federation.config.mjs`.
3. Add it to `projects/shell/public/federation.manifest.json`, a route in `app.routes.ts`, and a nav item in `app.ts`.

## Contributor docs
- [AI.md](./AI.md) – detailed project guide and enhancement backlog.
- [RULES.md](./RULES.md) – rules to follow on every change.
