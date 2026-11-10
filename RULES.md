# Rules (read before every change)

1. Read [AI.md](./AI.md) first; update its structure/change log/backlog after each change.
2. Before starting, verify the baseline: `npx ng build <project>` has no errors. Fix existing errors first.
3. After every change run `npx ng build <project>` and `npx ng test <project> --watch=false` for each touched project (shell, mfe1, mfe2). Fix all errors before the next step.
4. Layout and routing live in the shell only; remotes render content only (no own router outlet/layout).
5. Each remote must keep exposing `./Component` as `App`; remote names must match `federation.manifest.json` and shell routes.
6. Use standalone components, signals, and the new control flow (`@if`/`@for`).
7. UI must stay responsive (mobile first, breakpoints 860px / 480px) and visually consistent (indigo/cyan shell palette).
8. Keep changes small and focused; add/adjust unit tests for new behavior.
