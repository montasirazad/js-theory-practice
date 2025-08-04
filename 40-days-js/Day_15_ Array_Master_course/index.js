const myArr = new Array(1, 3);

console.log(myArr);

const newArr = ["aa", "bb", "cc", "dd", "ee", "ff"];
console.log('newArr length',newArr.length);
for (i = 0; i <= newArr.length-1; i++) {
    console.log(newArr[i]);
}


newArr.push('gg')
console.log(newArr);

newArr.pop()

console.log(newArr);

newArr.shift()
console.log(newArr);


newArr.unshift('aa')
console.log(newArr);