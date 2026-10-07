import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: 1 }, [
    React.createElement("div", { id: "sub1", key: 11 }, "Hi sub"),
  ]),
  React.createElement("div", { id: "child2", key: 2 }, [
    React.createElement("div", { id: "sub2", key: 12 }, "H"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
