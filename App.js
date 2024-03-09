// const heading = document.createElement("h1"); heading.innerHTML = "Hellow
// world" const root = document.getElementById('root')
// root.appendChild(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "I am here"),
    React.createElement("h1", {
        id: "heading"
    }, "I am here")
]),React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "I am here 2"),
    React.createElement("h1", {
        id: "heading"
    }, "I am here 2")
])])

// const heading = React.createElement("h1", { id: "heading" }, "Hello world
// Himanshu");
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);