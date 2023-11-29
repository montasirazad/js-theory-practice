// Function expression

const x = function sleep() {
    //console.log(arguments);
}

//sleep()

//console.log(x(1, 123, 500, 115, 44, 88));


// function hoisting

//self invoking function

// (function () {
//     console.log('self invoking function has called');
// })();
// This function is also called -> IIFE(Immediately Invoked Function Expression) 

// Function is called, the return value will end up in x
let y = myFunction(4, 3);

function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
}

function test(a) {

    a = a++
    console.log('a', a);
    //console.log(++a == a++);
    a = ++a
    console.log('later a',a);

}

test(3)
