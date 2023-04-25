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

function Multi() {
    return <div>
        <Header name="D"/>
        <Header name="X"/>
        <Header name="T"/>
    </div>
}

const hl = <Header name="Header"/>
const mhl = <Multi/>
ReactDOM.render(
    <div>{hl}{mhl}</div>,
    document.getElementById("root3")
)

// Class Component with props
class Button extends React.Component {
    render() {
        return <span>How are you?, {this.props.name}</span>
    }
}

const bl = <Button name="Maria"/>
ReactDOM.render(
    <div>{bl}</div>,
    document.getElementById("root4")
)

// Multiple props for multiple arguments on a component
function Item(props) {
    return <div className="item">
        <b>Name: </b><span>{props.name}</span><br />
        <b>Price: </b><span>{props.price}</span>
    </div>
}

const il = <Item name="Mask" price="$5.99"></Item>

ReactDOM.render(
    il,
    document.getElementById("root5")
)

// State : props in a class that is reactive to change the value of an object's key
class Reactit extends React.Component {
    
}