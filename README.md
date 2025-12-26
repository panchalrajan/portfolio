# Portfolio — Multi‑Theme (Session Based)

This portfolio renders one of five distinct UI themes per browser session. The chosen theme stays consistent across all routes until the browser session ends. All content (profile, projects, privacy) is driven by YAML.

## Themes

- MinimalNotion
- BrutalistRaw
- VintageTypewriter
- MonochromeChic
- NewspaperClassic

## Routes

- `/` → theme homepage
- `/projects` → projects list
- `/privacy/:projectId` → privacy policy per project
- `*` → theme 404

## Content (YAML)

- `src/data/profile.yaml`
- `src/data/projects.yaml`
- `src/data/privacy.yaml`

## Run locally

```bash
npm install
npm run dev
```

## GitHub Pages deployment

This is a Vite project. For GitHub Pages you need the correct base path and a deploy step.

### 1) Set base path
Edit `vite.config.ts`:

```ts
export default defineConfig({
  base: "/portfolio/",
  // ...rest
});
```

### 2) Build

```bash
npm run build
```

### 3) Deploy

Option A — GitHub Actions (recommended):
- Use a workflow that builds and deploys `dist/` to `gh-pages`.

Option B — manual:
```bash
npx gh-pages -d dist
```

### 4) Enable Pages

- Repo → Settings → Pages → Source = `gh-pages` branch

Your site URL:
```
https://panchalrajan.github.io/portfolio/
```
