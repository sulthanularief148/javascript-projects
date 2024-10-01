// Math function

// round(x: number): number
//The value to be rounded to the nearest integer.
//Returns a supplied numeric expression rounded to the nearest integer
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
console.log(Math.floor(square), "square");

// Abs
const positiveValue = Math.abs(-9)
console.log(positiveValue, "positiveValue");

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


// String - Group of Characters

const str1 = "Hi I am Sulthanul Arief    ";
const str2 = "I am a Software developer"
const join = str1 + str2;
console.log(join);
const concat = str1.concat(str2);
console.log(concat);
// Cut or slice the string
// First parameter target the start index and second parameter target the end Index(Both slice and substring)
const slice = str2.slice(7, 15)
console.log(slice);

// first parameter start index, second parameter length
const substr = str2.substr(5, 10)
console.log(substr);

// Lowercase
const lowercase = str2.toLowerCase()
console.log(lowercase);

// Replace the string 
const replace = lowercase.replace("software", "Full Stack");
// replaceAll
console.log(replace);

// toUpperCase() - Uppercase
// toLowerCase() - Lower case
// Length - length of the string
// trim() - remove the spaces
// trimStart()
// trimEnd()
// charAt() - Position
// charCodeAt() - unicode value
// indexOf() -
// lastIndexof() 
// search()
// includes() - true or false
// startsWith("S") - true or false
const trimStart = str1.trimStart()
console.log(trimStart, "trim Start");
const trimEnd = str1.trimEnd()
console.log(trimEnd, "trim End")


const startsWith = str1.startsWith("");
console.log(startsWith, "startswith");

const search = str1.search("Hi")
console.log(search, "search");

let name = "Sulthanul Arief";
function randomLetter(name) {
  const randomNameLetter = Math.floor(Math.random() * name.length)
  return name[randomNameLetter]
}
console.log(randomLetter(name));


// Template Literals - Introduced ES6
let myName = "Sulthanul Arief"
let work = "Software developer"
let city = "Chennai"
console.log("I am " + myName + " I am working as a " + " " + work + " " + " and lives in " + city)
// with template literals - use backticks
console.log(`I am ${myName} I am working as  a ${work} and lives in ${city}`)
// Apostrophy example

// Exercise
/*
  You have 5 items in your cart your bill amount is $95
  Use variable item count and Total to print the number
  */

const itemCount = 5
const bill = 95
console.log(`your ${itemCount} item bill is $${bill}`)



const userName = prompt("Enter your age");
if (userName >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}


let x = 20;
let y = 20;
let z = 25;
console.log(x == y);
console.log(x == z);




let condition = false;
if (condition == true)
  console.log("Condition is true");
else
  console.log("Condition is false ")



function toCelcius(farenheit) {
  return (farenheit - 32) * 5 / 9;
}
let celcius = toCelcius(70)
console.log(celcius);
