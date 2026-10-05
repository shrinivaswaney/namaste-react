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
# from repo root, serve lec01 (e.g. with VS Code Live Server or):
npx serve lec01
# open index.html in browser
```

### Lec 02 – (`lec02/`)
