function myFunction(a, b, c) {
    console.log(arguments.length);
}

(() => {
    console.log(123);
})()

myFunction(2,3,4)
