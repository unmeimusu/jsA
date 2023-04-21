import { reactive, watch, html } from './a/core@1.0.0-alpha.9.js';

const data = reactive({
  price: 25,
  quantity: 10
})

// Reactive data with $on/$off
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
    console.log(`Total (in reactive): ${data1.price * data1.quantity}`)
  }
}

// observe properties and then execute function
data1.$on('price',total)
data1.$on('quantity', total)
data1.$on('logTotal', total)
total()
data1.price = 35 // changed value will run the function

// Example 3: Turn off observation
data1.$off('quantity', total);
data1.quantity = 20; // changed value will not run the function

// Watch on function
const data25 = reactive({
  price: 25,
  quantity: 10,
  logTotal: true
})
// Observe on price property
data25.$on("price",total2)
// Same result
function total2 () {
  if (data25.logTotal) {
    console.log(`Total (in watch): ${data25.price * data25.quantity}`)
  } else {
    console.log("watch false")
  }
}
watch(total2)

data25.price = 5
// Example: Coding style with && and then return as parameter value
watch(
  () => data25.logTotal && data25.quantit, // value passed to parameter
  (total) => total !== false && console.log(`Total (Concise Code): ${total}`)
)

// HTML with reactive expressions to the DOM
const data23 = reactive({
  clicks: 0
});
const t = html`
  <button @click="${()=>data23.clicks++}">
    Fired ${()=>data23.clicks} arrows
  </button>
`
// display
function display(id) {
  return document.getElementById(id)
}
// shorter
const d = (id) => document.getElementById(id)
// print html to id="app"
t(d("app"))

const data66 = reactive({
  location: ["World","Mars","Pluto"]
})

const list2 = html`
  <label>Data location : </label>
  <select>
    ${()=>data.location.map(
      loc => html`
      <option value="${loc}">${data.location}</option>
      `
    )}
  </select>
  <ul>
    <li>Hello ${data66.location} (🪨 static expression)</li>
    <li>Hello ${() => data66.location} (⚡ dynamic expression)</li>
  </ul>
`

list2(d("app"))

const t2 = html`
  <button @click="${()=>data23.clicks++}">
    Fired ${()=>data23.clicks} arrows
  </button>
`

t2(d("app"))