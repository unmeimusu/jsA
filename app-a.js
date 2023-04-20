import { reactive, html } from "./a/core@1.0.0-alpha.9"

const data = reactive({
    price: 25,
    quantity: 10
  })

html`
  <ul>
    <li>Hello ${data.price} (🪨 static expression)</li>
    <li>Hello ${() => data.quantity} (⚡ dynamic expression)</li>
  </ul>
`