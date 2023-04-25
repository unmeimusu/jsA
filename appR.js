// DOM render
ReactDOM.render(
    <h1>Hello, React!</h1>,
    document.getElementById("root")
)

let counter = 0

// DOM render inside function
function show() {
    counter++
    const el = <p>{counter}</p>
    ReactDOM.render(
        el,document.getElementById("root")
    )
}
setInterval(show,1000)

// Components
// Functional Component - It's return DOM
function Hello() {
    return <div>Hello World.</div>
}
const el = <Hello/>
setTimeout(
    ReactDOM.render(
        el,
        document.getElementById("root")
),3000)

