import { reactive, html } from './a/core@1.0.0-alpha.9.js';

const data = reactive({
  price: 25,
  quantity: 10
})

// Reactive Data
// Will be changed for each updated value
// observe mutations to their properties
data.$on('price',(value)=>{
  console.log(`Price changed to ${data.price}`)
})

data.price = 35

console.log(data.price);
// 