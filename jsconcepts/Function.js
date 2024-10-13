// Different Types of Function
// The Major difference between Function declaration and function Expression is Hositing.
console.log(a()) // It returns the Output Because of Hoisting
// console.log(b()) Uncaught ReferenceError: Cannot access 'b' before initialization

// Function Statement and Function Declaration

function a() {
    console.log("The Normal Function creation is called function statement and function declaration")
}

// Function Expression
let b = function () {
    console.log("A function expression can be stored in a variable")
}

// Anonymous Function
// function () {

// }

// Named Function Expression
let c = function myFunction() {
    console.log(myFunction)
}
console.log(c())

// First Class Function
// The ability of functions to be used as values and passed as an arguments to the another functions and returned from the function this ability is known as First class function

const add = function () {
    return function addition(a, b) {
        return a + b
    }
}
const addition = add()
console.log(add(1, 2), "")
console.log(addition(1, 2), "First Class Function")

// or
// Functions are First class Citizens or  First Class Function both are same

const d = function firstClassAsAnArgument(param, name) {
    param() + console.log(`${name}`)

}
d(function () {
    console.log("Hello");
}, "Arief");

// Callback Functions
