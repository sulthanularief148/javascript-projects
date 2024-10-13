// Math function

// round(x: number): number
// The value to be rounded to the nearest integer.
// Returns a supplied numeric expression rounded to the nearest integer
const round = Math.round(5.4)
console.log(round, "round");


// Next Number
const ceil = Math.ceil(5.9)
console.log(ceil, "ceil");
const ceilHigh = Math.ceil(5.8)
console.log(ceilHigh, "ceilHigh");

// Ignore the decimal
const floor = Math.floor(5.9)
console.log(floor, "floor");

// Square the value
const square = Math.sqrt(5)
// console.log(Math.floor(square), "square");

// Abs
const positiveValue = Math.abs(-9)
// console.log(positiveValue, "positiveValue");

// Power
const SquareRoot = Math.pow(8, 5)
console.log(SquareRoot, "power square");

// Minimum Value
const min = Math.min(1, 4, 6, 7, 8)
console.log(min, "minimum value");

// Random 
const random = Math.floor(Math.random() * 6) + 1// 0 - 1
console.log(random, "Random number");


// Properties
const piValue = Math.PI;
console.log(piValue, "PI Value");

const eValue = Math.E;
console.log(eValue, "eValue");