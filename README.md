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
- Note: `onClick={() => navigate(...)}` in `MainContent` references undefined `navigate`/`id` — a placeholder until routing arrives in a later lecture (`lec04/components/MainContent.jsx:37`)

Run:

```bash
cd lec04
npm install
npm run dev
```

### Lec 05 – Lets Get Hooked (`lec05/`)

### Date - 18-10-2026

Theory: state — the first React hook — and how data flows between components.

- Hook: `useState` from React; called only at the top level of a component, returns a pair `[value, setValue]` (`lec05/src/components/MainContent.jsx:1,44-45`)
- State vs normal variable: a plain `let` doesn't survive re-renders and changing it doesn't redraw the UI; state is a "superpowered variable" — calling the setter schedules a re-render of that component
- Initial value: `useState(list)` uses `list` only for the first render; later renders use the stored value (`lec05/src/components/MainContent.jsx:44`)
- Setters replace, they don't mutate: the filtered list comes from `.filter()` / `[...list].sort()` — a copy is sorted first so the original `list` constant is never mutated (`lec05/src/components/MainContent.jsx:17-19`)
- One state per concern: `restaurants` (what to show) and `activeFilter` (which button is highlighted), both updated together in one handler (`lec05/src/components/MainContent.jsx:47-50`)
- Deriving from a single source: every filter recomputes from the full `list` constant, never from the current state — so clicking a filter repeatedly can't compound results (`lec05/src/components/MainContent.jsx:12-24`)
- Data goes down, events go up: `MainContent` owns the state and passes `activeFilter` (data) + `onSelect` (handler) as props to the presentational `FilterGroup` (`lec05/src/components/MainContent.jsx:26-40,63`)
- Controlled UI: the button's `className` is derived from state (`activeFilter === filter.id ? "active" : ""`), so the highlight can't desync from the data (`lec05/src/components/MainContent.jsx:32`)
- Event handlers as props: `onClick={() => onSelect(filter.id)}` here; function props flow through data too — `list` items carry an `onClick` (`lec05/src/utils/constant.js:260`) that `Card` spreads onto the div (`lec05/src/components/Card.jsx:67`)
- Rendering state: `restaurants.map(res => <Card key={res.id} res={res} />)` — changing state re-runs the map and redraws the list (`lec05/src/components/MainContent.jsx:67-69`)
- One object prop: `Card` receives the whole `res` object and destructures it inside (`lec05/src/components/Card.jsx:53-64`)
- Separation of data and UI: `src/utils/constant.js` exports `navlinks`, `CDN_URL`, and restaurant data; image URLs are built as `CDN_URL + image_id` (`lec05/src/components/Card.jsx:7`)
- Project layout: code moved under `src/` — `src/components/`, `src/utils/`, `src/css/`, with `index.html` loading `./src/App.js` and the CSS files (`lec05/index.html:7-14`)

Run:

```bash
cd lec05
npm install
npm run dev
```

### Lec 06 – Exploring the World (`lec06/`)

### Date - 19-10-2026 to 21-10-2026

Theory: leaving the static world — fetching live restaurant data from the Swiggy API and rendering whatever comes back.

- `useEffect` for side effects: the fetch can't run in the component body (it would refetch on every render), so `useEffect(() => { fetchData(); }, [])` runs it once after mount (`lec06/src/components/MainContent.jsx:109-111`)
- `async/await` + promises: `fetch(url)` returns a promise; `await data?.json()` parses the body (`lec06/src/components/MainContent.jsx:61-67`)
- Live API: hits `https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490...` (`lec06/src/components/MainContent.jsx:63-65`); CORS caveat — Swiggy sends no CORS headers for localhost, so a plain browser rejects the request and the app shows the empty state; use a dev proxy or mocked JSON to see data
- `try / catch / finally`: the network failure is caught and logged, and `finally` clears `isLoading` on every path (`lec06/src/components/MainContent.jsx:102-106`)
- Optional chaining + `??` to survive a nested response: `json?.data?.cards?.map(...)?.find(...)`, `info.sla?.slaString`, `?? []` (`lec06/src/components/MainContent.jsx:69-74`)
- Normalising server data: entries unwrapped (`r?.info`), validated (`info?.id && info?.name`), then mapped into the flat shape the UI owns — digits stripped from `costForTwo` via regex, `locality ?? areaName` fallback (`lec06/src/components/MainContent.jsx:78-101`)
- A third piece of state for loading: `isLoading` starts `true` and drives a render ternary — skeletons → cards → empty state (`lec06/src/components/MainContent.jsx:137-149`)
- Skeleton cards: `SkeletonCard` mirrors `Card`'s markup and geometry exactly (same `.card` / `.image` / `.info` / `.row` classes plus `.sk` shimmer bars) so the layout doesn't jump when data lands; `SKELETON_COUNT` exported for the placeholder grid (`lec06/src/components/SkeletonCard.jsx:1-24`)
- Derived, never stored: `visibleRestaurants = searchRestaurants(searchQuery, applyFilter(activeFilter, restaurants))` is recomputed each render from the two inputs (`lec06/src/components/MainContent.jsx:117-120`)
- Controlled search input: `searchQuery` state lives in `MainContent`, the setter flows down as a prop, and `onChange={(e) => setSearchQuery(e.target.value)}` writes it back (`lec06/src/components/MainContent.jsx:59,133`, `lec06/src/components/SearchBar.jsx:3,13-19`) — without the state update the input is frozen
- Search matches `name`, `cuisines`, and `locality` case-insensitively and ANDs with the active filter; an empty query matches everything (`lec06/src/components/MainContent.jsx:26-36`)
- One handler per intent: filter buttons get `onSelect={handleFilter}` (receives an id), the input gets the setter directly — sharing one handler had put the change *event* object into `activeFilter` (`lec06/src/components/MainContent.jsx:113-115,133-134`)
- The empty state names the failed input: active query → `No restaurants match "xyz".`, otherwise the filter hint (`lec06/src/components/MainContent.jsx:144-148`)
- Cards defend against partial API data: destructure with defaults from `res ?? {}` (`name = ""`, `cuisines = []`) and render every photo chip conditionally (`rating != null ? ... : null`) (`lec06/src/components/Card.jsx:13-35,68-95`)
- Static list retired: `constant.js` no longer holds restaurant data — only `navlinks` and `CDN_URL`, which is prefixed to `cloudinaryImageId` for images (`lec06/src/utils/constant.js:3-10`, `lec06/src/components/Card.jsx:14`)
- Swiggy-style chrome: sticky white header with nav, city picker, and outlined sign-in pill (`lec06/src/components/Header.jsx:8-29`, `lec06/src/css/Header.css`); toolbar keeps search left, filter pills right
- Accessibility: `aria-hidden` skeletons, `role="button"` + `tabIndex` on cards with `:focus-visible` rings (`lec06/src/components/SkeletonCard.jsx:5`, `lec06/src/components/Card.jsx:85`)

Run:

```bash
cd lec06
npm install
npm run dev
```
