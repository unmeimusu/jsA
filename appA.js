import { reactive, html } from './a/core@1.0.0-alpha.9.js';

const data = reactive({
  price: 25,
  quantity: 10
})

data.$on('price',(value)=>{
  console.log(`Price changed to ${value}`)
})

data.price = 35

console.log(data.price);