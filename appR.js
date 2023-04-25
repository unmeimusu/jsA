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
// Functional Component with Props (read-only and cannot be modified) to initial an argumant
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

// State : props in a class that is to change the value of an object's key
class Reactit extends React.Component {
    state = {
        message: "I'm a message from state."
    }

    render() {
        return <div>
        <h1>Hello, {this.state.message}</h1>
        </div>
    }
}

const rl = <Reactit/>
ReactDOM.render(
    rl,
    document.getElementById("root6")
)

// setState: re-render the whole DOM after state is changed.
class Counter extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        return <div>
            <p>{this.state.counter}</p>
            <button onClick={this.increment}>Increase</button>
        </div>
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById("root7")
)

// Hooks : alternative of setState (which only with class components) but inside functional components.
function Reactf() {
    const [name, setName] = useState("Bro")

    return <div>
        <h1>Hello, {name}.</h1></div>
}

ReactDOM.render(
    <Reactf/>,
    document.getElementById("root8")
)