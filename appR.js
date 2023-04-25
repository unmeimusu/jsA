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
        document.getElementById("root1")
)
// Class Components
class Text extends React.Component {
    render() {
        return <p>Morning today, have a nice day.</p>
    }
}
const cl = <Text/>
ReactDOM.render(
    cl,
    document.getElementById('root2')
)
// Functional Component with Props to initial an argumant
function Header(props) {
    return <p>A props for {props.name} Component</p>
}

const hl = <Header name="Header"/>
ReactDOM.render(
    hl,
    document.getElementById("root3")
)