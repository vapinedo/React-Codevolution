import React, { createElement } from "react";

const NoJsxComponent = () => {
  return createElement(
    "div",
    { id: "Valp", className: 'dummyClass' },
    createElement("h1", null, "No JSX Component")
  );
};

export default NoJsxComponent;
