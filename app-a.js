// import { reactive, html } from './a/core@1.0.0-alpha.9';
import { reactive, html } from 'https://esm.sh/@arrow-js/core';

const data = reactive({
  price: 25,
  quantity: 10
})

console.log(data.price);