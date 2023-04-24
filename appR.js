import {useState} from "./r/react.development.js"

function MyApp() {
    const [message, setMessage] = useState("Ding")

    return (
    <><div>Hello</div><p>${ding}</p></>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<MyApp/>)

