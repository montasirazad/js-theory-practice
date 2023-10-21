const text = 'Bangladesh'
let possibleCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let output = '';
for (let i = 1; i <= 4; i++) {
    let randomCharacter = possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length))
    output += randomCharacter
}
console.log(possibleCharacter[0]);

const test = (a, b) => {
    return c = [a, b]
}
test(5)
console.log(test(3, 5));