import { reactive, html } from "./a/core.mjs"

const data = reactive({
    price: 25,
    quantity: 10
  })
  
document.write(data.price);