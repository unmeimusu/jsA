import {useState} from "./r/react.development.js"

const [message, setMessage] = useState("Test")

function MyApp() {
    return 
    <div>
        <h1>Hello, World</h1>
        <h2>{message}</h2>
    </div>
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<MyApp/>)

