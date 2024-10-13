//loop
/*
1.Initialized or Declaration
2.Condition
3.Increment/Decrement
*/




for (i = 0; i < arr.length; i++) {
    const option = document.createElement("option");
    option.value = arr[i];
    option.textContent = arr[i]
    department.appendChild(option)
    console.log(arr[i])

}



for (let i = 0; i < 10; i++) {
    console.log(i)
}
// Iteration
// i = 0; 0 < 10 : true, i++ - 1
// i = 1; 1 < 10 : true, i++ - 2
// i = 9;  9 < 10 : true, i++ - 10
// i = 10; 10 < 10 : false, i++ - 11


// Fo Each Loop
const department = document.getElementById("department");
arr.forEach((op) => {
    const option = document.createElement("option");
    option.value = op;
    option.textContent = op
    department.appendChild(option)
})



// While Loop
let fruits = ["Apple", "Banana", "Mango", "PineApple"]
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++
}


// For Of Loop
const arr = ["ECE", "CSE", "IT", "EEE", "MECH", "CIVIL"];
for (dept of arr)
    console.log(dept)

let numbers = ["10", "20", "30", "40", "50"]
for (n of numbers)
    console.log(n)

// For In Loop

for (let key in car) {
    console.table(key, car[key])
}

// ForEach Loop
numbers.forEach(num => {
    console.log(num)
})