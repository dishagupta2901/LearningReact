import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", 
    {
        id: "parent"
    }, 
    [React.createElement("h1", {
        id: "head1"
    }, "Hello React!!"),
    React.createElement("h2", {
        id: "head1"
    }, "Hello React2!!")]
); // js object


//JSX 

const JSXHeading = <h1>Hello JSX!!</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));

console.log(root);
root.render(heading);
root1.render(JSXHeading);