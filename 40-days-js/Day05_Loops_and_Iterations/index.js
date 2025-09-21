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

// setInterval(() => {
//   console.log(new Date());
// }, 1000);

// let count = 0;

// while (count < 5) {
//   console.log("Count is: " + count);
//   count++; // Increment count to eventually make the condition false
// }

// console.log("Loop finished. Final count: " + count);

function randomKey() {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345789";
  let password = "";
  for (let i = 0; i < alphabet.length; i++) {
    let random = Math.random() * alphabet.length;
    const roundedNum = Math.floor(random);
    //console.log(roundedNum);
    if (i < 19) {
      password += alphabet[roundedNum];
    }
  }
  console.log(password);
}

// setInterval(() => {
//   randomKey();
// }, 1000);
