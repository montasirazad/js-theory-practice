// let str =''
// for (let i = 0; i < 5; i++) {
//    for (let j = i; j < 5; j++) {
//     str = str + ' *'

//     console.log(str);
//    }
// }

function createPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    let output = "";
    // Add leading spaces
    for (let j = 0; j < rows - i - 1; j++) {
      output += " ";
    }
    // Add stars
    for (let k = 0; k <= i * 2; k++) {
      output += "*";
    }
    console.log(output);
  }
}
// Example: creates a pyramid with 5 rows
//createPyramid(4);

