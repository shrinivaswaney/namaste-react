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

### Date - 06-10-2026

Advantages of Parcel

- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimisation
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking
- Remove unused codes

Run:

```bash
cd lec02
npm run dev
```
