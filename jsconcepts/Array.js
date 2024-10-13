// Array - is a special variable that can hold more than one value

// Array Literal Method
const students = ["Arief", "Tamizh", "Anees"]
console.log(students, "Students list");


const states = []
states[0] = "Tamilnadu";
states[1] = "Kerala";
states[2] = "Andhra";
states[3] = "Karnataka"
console.log(states, "States");


const district = new Array('Coimbatore', 'Kanchipuram', 'cuddalore', 'Madurai');
console.log(district, "Districts");

// Accessing the Arrays
console.log(district[0])
console.log(states[1]);
console.log(students[2]);

// Converting the Array to String:
const programmingLanguage = ["Javascript", "C", "C++", "Java", "Pyhton"]
console.log(programmingLanguage.toString())

// Array Property
console.log(programmingLanguage.length)

// Find LastIndex
console.log(programmingLanguage[programmingLanguage.length - 1])

// Loop through the array

for (let i = 0; i < programmingLanguage.length; i++) {
    let a = programmingLanguage[i];
    console.log(a);
}

district.push("trichy")
console.log(district)
district.forEach((district) => {
    let b = district
    console.log(b)
});


// In JavaScript, arrays use numbered indexes.

// In JavaScript, objects use named indexes.

// Arrays are a special kind of objects, with numbered indexes.

// How do we find this is an array
// Generally typeof return array as  object so we should check  with Array.isArray() method to check whether it is an array or not.




// Array
console.log(district, "District")
console.log(district.length)

const sport = []
// Football", "Volleyball",  "Cricket", "Basketball", "Tennis"
sport[0] = "Football"
sport[1] = "Volleyball"
sport[2] = "Cricket"
sport[3] = "Basketball"
sport[4] = "Tennis"
console.log(Array.isArray(sport))

// pop()
sport.pop()
console.log(sport)

// push()
sport.push("Chess");
console.log(sport)

// shift()
sport.shift()
console.log(sport)

// unshift()
sport.unshift("Carrom")
console.log(sport)


// split - string to array

// tOString
district.toString()
// 'Coimbatore,Kanchipuram,cuddalore,Madurai,trichy'

// join() - Array to string
district.join("-")
// 'Coimbatore-Kanchipuram-cuddalore-Madurai-trichy'


// Concatenating the array
const person = ["Arief", 25, "Chennai"];
const [name, age, city] = person;
console.log(name, age, city);
console.log(person[0], person[1], person[2])

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];
console.log(arr1 + arr2)
console.log(arr1.concat(arr2))
// Spread or Rest Operator
console.log([...arr1, ...arr2])
console.log(arr1)