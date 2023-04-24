function MyApp() {
    return (
    <><div>Hello</div><p>${ding}</p></>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<MyApp/>)

