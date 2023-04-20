import { reactive, html } from './a/core@1.0.0-alpha.9.js';

const data = reactive({
  price: 25,
  quantity: 10
})

html`
  <h1>Arrow JS</h1>
`

// Reactive Data
// Will be changed for each updated value
// $on : observe mutations to their properties

// Example 1: Observe single property
data.$on('price',(value)=>{
  console.log(`Price changed to ${data.price}`)
})

data.price = 35

console.log(data.price);

// Example 2: Observe multiple properties
const data1 = reactive({
  price: 25,
  quantity: 10,
  logTotal: true
})

function total () {
  if (data1.logTotal) {
    console.log(`Total: ${data1.price * data1.quantity}`)
  }
}
// observe properties and then execute function
data1.$on('price',total)
data1.$on('quantity', total)
data1.$on('logTotal', total)
total()
data1.price = 35 // changed value will run the function
// Turn off observation
data1.$off('quantity', total)
data1.quantity = 20 // changed value will not run the function