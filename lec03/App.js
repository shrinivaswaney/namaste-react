import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "url:./image.png";

// // jsx is not html in js it is different i.e. html - like syntax (React Element)
// const jsxHeading = (
//   <div className="div" tabIndex={1}>
//     <h1 className="heading">React Elem Heading using JSX</h1>
//   </div>
// );

// const functionHeading = function () {
//   return (
//     <div tabIndex={2}>
//       <h1 className="heading">React Elem Heading using functional JSX</h1>
//     </div>
//   );
// };

// // JSX (React Functional Component)
// // Component Composition
// const Container = function () {
//   return (
//     <div className="div">
//       {
//         // we can write js code in jsx
//         100 + 200
//       }
//       {jsxHeading}
//       {functionHeading()}
//       React Elem Container using JSX Functional Component
//       <Heading />
//     </div>
//   );
// };

// // JSX (React Functional Component)
// const Heading = () => {
//   return (
//     <h1 className="heading">
//       React Elem Heading using JSX Functional Component
//     </h1>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Container />);

// Assignment

const nestedDiv = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { key: "1" }, "H1"),
  React.createElement("h2", { key: "2" }, "H2"),
  React.createElement("h3", { key: "3" }, "H3"),
]);

const jsxNestedDiv = (
  <div className="title">
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
  </div>
);

const TitleComponent = function () {
  return <div>Hi</div>;
};

const FunctionalJsxNestedDiv = () => (
  <div className="title">
    <h1>H1</h1>
    <h2>H2</h2>
    {jsxNestedDiv}
    {TitleComponent()}
    <h3>H3</h3>
  </div>
);

const HeaderComponent = () => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching in search bar for: ", search);
  };
  return (
    <div className="container">
      <img src={logoImage} alt="logo" className="logo" />
      <form className="search-bar" onSubmit={handleSearch}>
        <span className="search-icon">🔍</span>
        <input
          type="search"
          className="input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <img src={logoImage} alt="User profile" className="user" />
    </div>
  );
};

root.render(<HeaderComponent />);
