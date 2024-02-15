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

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(heading);