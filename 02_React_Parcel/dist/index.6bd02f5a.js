impor;
const heading = React.createElement("h1", {
    id: "myHeading"
}, "This is Heading 1");
const heading2 = React.createElement("h2", {
    id: "myHeading2"
}, "This is Heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root")); // this tells the browser where we want to run the react code
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
