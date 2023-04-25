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
function Section() {
    return <section>A section.</section>
}
const el = <Hello/>
const sl = <Section/>
ReactDOM.render(
        <div>{el}{sl}</div>,
        document.getElementById("root")
)