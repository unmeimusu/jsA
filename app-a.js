import { reactive, html } from 'https://esm.sh/@arrow-js/core';

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