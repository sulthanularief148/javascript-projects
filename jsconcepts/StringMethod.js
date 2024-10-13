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
replaceAll
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
// const trimStart = str1.trimStart()
// console.log(trimStart, "trim Start");
// const trimEnd = str1.trimEnd()
// console.log(trimEnd, "trim End")


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