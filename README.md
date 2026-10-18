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

- npm: package manager; `package.json` tracks deps and scripts, `node_modules` holds installed code (`lec02/package.json:1-30`).
- Bundler: combines modules, assets, and deps into browser-loadable bundles; entry is `index.html` with `<script type="module" src="./App.js">` (`lec02/index.html:10`).
- Dev build: unoptimized build for local development with source maps and debug info.
- Local server: Parcel serves the app (default `http://localhost:1234`) so ESM imports like `import React from "react"` (`lec02/App.js:1-2`) resolve instead of failing on `file://`.
- HMR (Hot Module Replacement): swaps updated modules without a full reload, preserving state.
- File watching algorithm (C++): detects file changes efficiently to trigger rebuilds.
- Caching: stores build graph in `.parcel-cache` for faster rebuilds.
- Minification: removes whitespace, comments, shortens names for smaller production files.
- Bundling: merges many files into fewer bundles to reduce requests.
- Compression: gzips/brotlis output for faster transfer.
- Consistent hashing: content-based filenames in `dist/` so browsers cache bundles until content changes.
- Code splitting: breaks app into chunks loaded on demand instead of one large file.
- Differential bundling: builds separate modern/legacy bundles based on `browserslist` (`lec02/package.json:31-34`) to support older browsers.
- Diagnostics and error handling: readable build errors with code frames and overlay in browser.
- HTTPS: can serve locally over HTTPS to mirror production behavior.
- Tree shaking: removes unused exports/code from final bundle.

Run:

```bash
cd lec02
npm install
npm run dev    # parcel index.html -> http://localhost:1234
npm run build  # parcel build index.html -> dist/
```

### Lec 03 – Laying the Foundation (`lec03/`)

### Date - 09-10-2026

Theory: JSX, transpilation, and functional components.

- JSX is not HTML: HTML-like syntax that describes a React element (`lec03/App.js:4-8`)
- Transpilation chain: `JSX => React.createElement() => React element (JS object) => HTML element` — Parcel runs Babel to do the JSX transform and to convert modern JS for older browsers
- JSX attributes differ from HTML: `className` instead of `class`, camelCase props like `tabIndex`, JS values in `{}` (`lec03/App.js:5`)
- React element: a plain object/immutable snapshot created by JSX or `React.createElement`; rendered once via `root.render(element)`
- Functional component: a plain JS function starting with a capital letter that returns JSX (`lec03/App.js:36-42`)
- `{}` interpolation: any JS expression can run inside JSX (`lec03/App.js:23-26`)
- Composition (3 ways, all shown in `lec03/App.js:20-33`):
  - `{jsxHeading}` — embed an element variable
  - `{functionHeading()}` — call a function returning JSX
  - `<Heading />` — render a component (preferred; enables hooks/state later)
- `root.render(<Container />)` (`lec03/App.js:46`) mounts the component tree into `<div id="root">` (`lec03/index.html:10`)

Run:

```bash
cd lec03
npm install
npm run dev
```

### Lec 04 – Fooder: Component Composition (`lec04/`)

### Date - 09-10-2026 to 18-10-2026

Theory: structuring a real app by splitting the UI into a tree of reusable components.

- Component tree: plan the app skeleton first — Header (Logo, NavLinks, Cart) / Body (Search, Restaurant Cards) / Footer (`lec04/App.js:6-15`); the code mirrors this plan with `<AppLayout><MainContent /></AppLayout>` (`lec04/App.js:17-23`)
- Component composition with `children`: `AppLayout` renders `<Header />`, `<main>{children}</main>`, `<Footer />` so the parent provides the shell and the caller provides the body (`lec04/components/Layout.jsx:4-11`) — this is how layout components work
- Splitting into modules: each UI piece is its own file/component — `Header`, `MainContent`, `Card`, `Footer` under `lec04/components/`, composed together in `AppLayout`
- Props: passing data into components — `MainContent` passes `name`, `image`, `rating`, `cuisines`, `costForTwo`, `locality`, `distanceKm`, `banner`, `onClick` to `Card` (`lec04/components/MainContent.jsx:24-38`)
- Destructuring props: `const Card = ({ name, image, ... }) => ...` pulls props out inline instead of `props.name` (`lec04/components/Card.jsx:52-62`); helper functions also receive individual props (`lec04/components/Card.jsx:19`)
- Props are just data: arrays (`cuisines`, `banner`) and functions (`onClick`) can be passed; JSX accepts both `image="..."` and `image={"..."}` (`lec04/components/MainContent.jsx:26` vs `:41-43`)
- Rendering lists: `navlinks.map(...)` with a `key` on each `<li>` (`lec04/components/Header.jsx:10-29`), and `banner.slice(...)` for offer tags (`lec04/components/Card.jsx:37-46`)
- Rendering JSX from helpers: `Card` calls `imageContainer(...)` and `detailsContainer(...)` — any function returning JSX can be embedded like a component (`lec04/components/Card.jsx:65-66`)
- Capitalised components vs lowercase host tags: `<item.icon size={20} />` renders because the reference is a capitalised member expression (`lec04/components/Header.jsx:24`)
- Parcel asset imports: `url:` imports turn images into resolved URLs (`lec04/default.js:1-3`), so `import { logo } from "../default"` can be used as `src={logo}` (`lec04/components/Header.jsx:8,52`)
- Styling: plain CSS files per section linked from `index.html` (`lec04/index.html:7-10`); JSX uses `className` and `style={{...}}` objects where needed (`lec04/components/MainContent.jsx:11`)
- External packages as components: icons from `@phosphor-icons/react` are rendered like any other component (`lec04/components/MainContent.jsx:8-12`)
- Note: `onClick={() => navigate(\`/restaurant/${id}\`)}`in`MainContent`references undefined`navigate`/`id` — a placeholder until routing arrives in a later lecture (`lec04/components/MainContent.jsx:37`)

Run:

````bash
cd lec04
npm install
npm run dev
```18-10-2026
````

### Lec 05 – Lets Get Hooked (`lec05/`)

### Date - 18-10-2026
