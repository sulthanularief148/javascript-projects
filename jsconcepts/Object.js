// Object: Key and value pairt  a:b Literal Method - NamedIndex
const student = {
    rollNo: 39,
    name: "Arief",
    age: 25,
    contact: 824856678
}
console.log(student, "Students")
const car = {}
car.name = "BMW"
car.color = "Blue"
car.model = "I7"
console.log(car)



// Object - Property and Methods
let person = {
    name: "Arief",
    age: 25,
    qualification: "Bachelor of Engineering",
    hobbies: ["Coding", "Reading", "Play chess"],
    address: {
        street: "Johny john khan road",
        city: "Chennai, Royapettah",
        state: "TamilNadu"
    },
    addToCart: function () {
        console.log("Cart Added")
    }
}
// Numbered Index
// Named Index
// Function Invoking or Function call
person.addToCart();

// How to get the Object Value? with use of dot Notation
console.log(person.name)
console.log(person.address.city)
console.log(person.hobbies[0])

console.log(person)
// Array.isArray() - it returns true or false

// Car - Color, Model,  Year, Price, Engine, Transmission, Doors, Fuel, Mileage, Condition, Location, Price