import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { class: "heading" },
//   "This is h1 tag heading"
// );

const jsxHeading = <h1 className="heading">This is from JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
 