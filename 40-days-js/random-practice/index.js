function Person(name, age, lastName) {
  (this.name = name), (this.age = age);
  this["last name"] = lastName;
}

const person_1 = new Person("john", 10, "doe");
console.log(person_1["last name"]);
console.log(Object.values(person_1));
console.log(Object.entries(person_1));
console.log(JSON.stringify(person_1));

const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

const inventory = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    quantity: 45,
    price: 15.99,
    inStock: true,
    supplier: "TechWorld",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    quantity: 20,
    price: 39.99,
    inStock: true,
    supplier: "KeyMasters",
  },
  {
    id: 3,
    name: "Office Chair",
    category: "Furniture",
    quantity: 12,
    price: 129.99,
    inStock: true,
    supplier: "ComfortSeating",
  },
  {
    id: 4,
    name: "Notebook (A4)",
    category: "Stationery",
    quantity: 100,
    price: 2.5,
    inStock: true,
    supplier: "PaperCo",
  },
  {
    id: 5,
    name: "Ballpoint Pen",
    category: "Stationery",
    quantity: 200,
    price: 0.99,
    inStock: true,
    supplier: "InkWorks",
  },
  {
    id: 6,
    name: "LED Desk Lamp",
    category: "Electronics",
    quantity: 8,
    price: 25.0,
    inStock: true,
    supplier: "BrightLight",
  },
  {
    id: 7,
    name: "USB Flash Drive 32GB",
    category: "Electronics",
    quantity: 60,
    price: 9.5,
    inStock: true,
    supplier: "DataStore",
  },
  {
    id: 8,
    name: "Coffee Mug",
    category: "Kitchen",
    quantity: 30,
    price: 4.99,
    inStock: true,
    supplier: "MugMart",
  },
  {
    id: 9,
    name: "Filing Cabinet",
    category: "Furniture",
    quantity: 5,
    price: 210.0,
    inStock: true,
    supplier: "SteelStore",
  },
  {
    id: 10,
    name: "Sticky Notes",
    category: "Stationery",
    quantity: 150,
    price: 1.5,
    inStock: true,
    supplier: "PaperCo",
  },
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(fruits, myCallback);
console.log(result);

const inventoryResult = Object.groupBy(inventory, ({ category }) => {
  if (category.toLocaleLowerCase() === "Electronics".toLocaleLowerCase()) {
    return "Electronics";
  } else {
    return "not-electronics";
  }
});

console.log(inventoryResult);
