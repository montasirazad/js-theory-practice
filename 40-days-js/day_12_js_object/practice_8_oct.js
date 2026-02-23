const myObject = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const entries = Object.values(myObject);

console.log(entries);

import { products } from "./fake-data.js";

const foundItm = Object.groupBy(products, (product) => product.category)

//console.log(foundItm.Electronics);
