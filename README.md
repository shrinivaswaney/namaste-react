# namaste-react

React learning repo following the Namaste React course. Each `lecXX/` folder is a self-contained lecture example.

## Lectures

### Lec 01 – React Inception (`lec01/`)

### Date - 05-10-2026

Basic React setup using CDN, no build tools.

Covered:

- Rendering with vanilla JS vs React (`lec01/index.html:13-19` vs `lec01/App.js:1-10`)
- Loading React 18 UMD builds via CDN (`lec01/index.html:20-27`)
- `React.createElement(tag, props, children)` for nested elements (`lec01/App.js:1-10`)
- `ReactDOM.createRoot(document.getElementById("root"))` + `root.render(parent)` (`lec01/App.js:18-19`)
- React overwrites content inside `#root` on render (compare `lec01/index.html:10-12` fallback `<h1>Akshay is here</h1>`)

Run:

```bash
npx serve lec01
```

### Lec 02 – Igniting the App (`lec02/`)

### Date - 06-10-2026 to 08-10-2026

Theory: why a bundler (Parcel) is needed for a production React app.

- npm: package manager; `package.json` tracks deps and scripts, `node_modules` holds installed code (`lec02/package.json:1-30`)
- Bundler: combines modules, assets, and deps into browser-loadable bundles; entry is `index.html` with `<script type="module" src="./App.js">` (`lec02/index.html:10`)
- Dev build: unoptimized build for local development with source maps and debug info
- Local server: Parcel serves the app (default `http://localhost:1234`) so ESM imports like `import React from "react"` (`lec02/App.js:1-2`) resolve instead of failing on `file://`
- HMR (Hot Module Replacement): swaps updated modules without a full reload, preserving state
- File watching algorithm (C++): detects file changes efficiently to trigger rebuilds
- Caching: stores build graph in `.parcel-cache` for faster rebuilds
- Minification: removes whitespace, comments, shortens names for smaller production files
- Bundling: merges many files into fewer bundles to reduce requests
- Compression: gzips/brotlis output for faster transfer
- Consistent hashing: content-based filenames in `dist/` so browsers cache bundles until content changes
- Code splitting: breaks app into chunks loaded on demand instead of one large file
- Differential bundling: builds separate modern/legacy bundles based on `browserslist` (`lec02/package.json:31-34`) to support older browsers
- Diagnostics and error handling: readable build errors with code frames and overlay in browser
- HTTPS: can serve locally over HTTPS to mirror production behavior
- Tree shaking: removes unused exports/code from final bundle

Run:

```bash
cd lec02
npm install
npm run dev    # parcel index.html -> http://localhost:1234
npm run build  # parcel build index.html -> dist/
```

### Lec 02 – Igniting the App (`lec03/`)

### Date - 08-10-2026
