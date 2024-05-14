import React from "react";
import ReactDOM from "react-dom/client";

// using React.createElement
const heading = React.createElement(
  "h1",
  { class: "heading" },
  "This is h1 tag heading"
);

// creating a React element
const jsxHeading = <h1 className="heading">This is from JSX</h1>;

// creating a React component
const HeadingComponent = () => (
  <div>
    {heading}
    {jsxHeading}
    <h1 className="heading">This is a functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
 