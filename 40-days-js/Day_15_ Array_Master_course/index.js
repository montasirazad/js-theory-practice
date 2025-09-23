/** Sample Array */
const myArr = new Array(1, 3, 2);
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = ["aa", "bb", "cc", "dd", "ee", "ff"];
const fruits = ["Banana", "Orange", "Apple", "Mango", "lemon"];

//console.log('newArr length',newArr.length);
// for (i = 0; i <= newArr.length-1; i++) {
//     console.log(newArr[i]);
// }

// console.log(newArr.join('<-->'));

// newArr.push('gg')
// console.log(newArr);

// newArr.pop()

// console.log(newArr);

// newArr.shift()
// console.log(newArr);

// newArr.unshift('aa')
// console.log(newArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango",'lemon'];
// fruits.find((value, index, obj) =>
//   console.log(`Value:${value} \n index:${index} \n obj:${obj}`)
// );

// const result = fruits.includes("carrot");

// //console.log(result);

// const sliced =fruits.toSpliced(1,3,'grape')
// console.log(sliced);
// console.log(fruits);

 //newArr.push("1");
 //console.log("push=", newArr);
 //newArr.pop();
 //console.log("pop=", newArr);
 //newArr.shift();
 //console.log("shift=", newArr);


 numArr.sort((a,b)=>b-a)
 console.log(numArr);

 const stars= new Array(5).fill('⭐')
 console.log(stars);