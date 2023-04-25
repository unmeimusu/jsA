// DOM render
ReactDOM.render(
    <h1>Hello, React!</h1>,
    document.getElementById("r")
)

let counter = 0

// DOM render inside function
function show() {
    counter++
    const el = <p>{counter}</p>
    ReactDOM.render(
        el,document.getElementById("r")
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
        document.getElementById("r1")
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
    document.getElementById('r2')
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
    document.getElementById("r3")
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
    document.getElementById("r4")
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
    document.getElementById("r5")
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
    document.getElementById("r6")
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
    document.getElementById("r7")
)

// Hooks
// alternative of setState (which only with class components) but inside functional components.
const {useState} = React // calling useState from global React to work with babel.min.js

function Reactf() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter+1);
    }

    return <div>
        <h1>Hello, {counter}.</h1>
        <button onClick={increment}>++</button>
        </div>
}

ReactDOM.render(
    <Reactf/>,
    document.getElementById("r8")
)

// Lifecycle Methods : class-based method 
class Countlc extends React.Component {
    state = {
        counter: 0
    }
    increment = () => {
        console.log("increment() lifecycle")
        this.setState({counter: this.state.counter+1})
    }
    componentDidMount() {
        // will run once except for triggered event from event handler
        console.log("componentDidMount() lifecycle")
        this.setState({counter: 42})
    }
    componentWillUnmount() {
        // invoked before a component is unmounted and destroyed
        console.log("componentWillUnmount() lifecycle")
    }
    render() {
        return <div>
            <p>{this.state.counter}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}

ReactDOM.render(
    <Countlc/>,
    document.getElementById("r9")
)

// Event Handler
function Converter() {
    const [km,setKm] = useState(0)

    function handleChange(e) {
        setKm(e.target.value)
    }
    function convert(Km) {
        return (Km/1.609).toFixed(2)
    }
    return <div>
        <input type="text" value={km} onChange={handleChange}/>
        <p>{km} km is {convert(km)} miles</p>
    </div>
}

ReactDOM.render(
    <Converter/>,
    document.getElementById("r10")
)

// List with index : print listed items to the DOM
const al = ["A","B","C"]

function Myl(props) {
    const arr = props.data
    const listItems = arr.map((val,idx)=>
        <li key={idx}>{val} on index: {idx}</li>
    )
    return <ul>{listItems}</ul>
}

ReactDOM.render(
    <Myl data={al}/>,
    document.getElementById("r11")
)

// Event Methods and Properties: data flow from parent to child components
// Component 1
function Addform() {
    const [item,setItem] = useState()

    function handleChange(e) {
        setItem(e.target.value) // set item from the form value
    }
    function handleSubmit(e) {
        // to prevent the default event on cancelable events
        e.preventDefault()
    }
    return (
    <div>
        <h1>Add Item</h1>
        <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder="Input new item" onChange={handleChange} value={item}/>
            <button type="Submit">Submit</button>
        </form>
    </div>
    )
}
// Component 2
function Itemlist(props) {
    const a = props.data
    const i = a.map((val,idx) => 
        <li key={idx}>{val}</li>
    )
    return <ul>{i}</ul>
}

const items = ["J","T","A","B"]

const e = (
    <div>
        <Addform data={"Default Text"}/>
        <Itemlist data={items}/>
    </div>
)

ReactDOM.render(
    e,
    document.getElementById("r12")
)