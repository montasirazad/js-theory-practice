// const numArray = [1, 3, 5, 1, 4, 7, 9, 3, 5, 6, 4, 9, 7, 8, 0, 1]

// const repeatNum = numArray.filter((value, index, arr) => { return arr.indexOf(value) === index })
// //console.log(repeatNum);
// const testArr = [1, 2, 3, 4, 5, 6]
// const result = testArr.find((value, index, arr) => {

//     return testArr.indexOf(value > 3)
// })

// const uniqueNumber = [...new Set(numArray)]

// console.log(uniqueNumber);

const names = [
  { name: "A", city: "dhaka" },
  { name: "B", city: "dhaka" },
  { name: "C", city: "feni" },
  { name: "D", city: "sylet" },
  { name: "E", city: "chittagong" },
  { name: "F", city: "comilla" },
];

const filteredData = names.filter((name) => name.city === "feni");
console.log(filteredData);
