import { reactive, html } from "./a/core.mjs"

const data = reactive({
    price: 25,
    quantity: 10
  })
  
document.write(data.price)
console.log(data.price)

html`
  <ul>
    <li>Hello ${data.location} (🪨 static expression)</li>
    <li>Hello ${() => data.location} (⚡ dynamic expression)</li>
  </ul>
`