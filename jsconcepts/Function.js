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
// console.log(c(), "named Function")

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

// Callback Functions - A callback is a function passed as an argument to another function
const arrays = [1, 2, 3, 4]

function sub(demo) {
    return demo
}
sub(arrays)

const namedFunction = function (demo) {
    console.log(demo())
}
const name = function () {
    console.log("Function called callback")
}

console.log(namedFunction(name))




// Example Program for Functions
// 1.
function toCelcius(farenheit) {
    return (farenheit - 32) * 5 / 9;
}
let celcius = toCelcius(70)
console.log(celcius);


// 2
const cmToInches = (centimeters) => {
    return Math.floor(centimeters * 0.3937)
}
