import ReactDOM from "react-dom/client";

// jsx is not html in js it is different i.e. html - like syntax (React Element)
const jsxHeading = (
  <div className="div" tabIndex={1}>
    <h1 className="heading">React Elem Heading using JSX</h1>
  </div>
);

const functionHeading = function () {
  return (
    <div tabIndex={2}>
      <h1 className="heading">React Elem Heading using functional JSX</h1>
    </div>
  );
};

// JSX (React Functional Component)
// Component Composition
const Container = function () {
  return (
    <div className="div">
      {
        // we can write js code in jsx
        100 + 200
      }
      {jsxHeading}
      {functionHeading()}
      React Elem Container using JSX Functional Component
      <Heading />
    </div>
  );
};

// JSX (React Functional Component)
const Heading = () => {
  return (
    <h1 className="heading">
      React Elem Heading using JSX Functional Component
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);
