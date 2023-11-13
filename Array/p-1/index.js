const numArray = [1, 3, 5, 1, 4, 7, 9, 3, 5, 6, 4, 9, 7, 8, 0, 1]

const repeatNum = numArray.filter((value, index, arr) => { return arr.indexOf(value) === index })
//console.log(repeatNum);
const testArr = [1, 2, 3, 4, 5, 6]
const result = testArr.find((value, index, arr) => {

    return testArr.indexOf(value > 3)
})


const uniqueNumber = [...new Set(numArray)]

console.log(uniqueNumber);