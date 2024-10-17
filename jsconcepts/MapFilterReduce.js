// ForEach, Map , Filter , Reduce

// ForEach -
// It is used to execute a function on each element of an array.
// Eg.
const arr = ["Arief", "Anees", "Tamizh"]
const newArr = arr.forEach(name => console.log(name.toUpperCase()))
// console.log(arr)
const changeOriginalArr = arr.forEach((value, index, arr) => {
    return arr[index] = value.toUpperCase()
})
// Crate Option inside the Select element using ForEach
const departments = ["CSE", "ECE", "EEE", "PETRO", "MECH"];
const selectElement = document.getElementById("department");
const depOptions = departments.forEach(dept => {
    const opt = document.createElement("option");
    opt.textContent = dept
    opt.value = dept
    selectElement.appendChild(opt)
})
selectElement.addEventListener("change", () => {
    const selectedValue = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedValue);

})

// Map
// It is used to create a new array with the results of applying a provided function on every element
const changeOriginalArrMap = arr.map((value) => {
    console.log("Map Function")
    return value.toUpperCase()

})
console.log(changeOriginalArrMap)

// Create Student Array Of object and use map function and take some of the values and print the string using template literals
const input = document.getElementById("studentName")
const students = [
    {
        name: "Arief",
        age: 25,
        rollNo: 39,
        degree: "Bachelor"
    },
    {
        name: "Anees",
        age: 22,
        rollNo: 38,
        degree: "Bachelor"
    },
    {
        name: "Akash",
        age: 26,
        rollNo: 25,
        degree: "Master"
    },
    {
        name: "Ramesh",
        age: 21,
        rollNo: 39,
        degree: "Bachelor"
    },
]

const studentName = students.map(student => student.name)


// Filter
// It is used to create a new array with all elements that pass the test implemented by the provided

// Reduce
// It is used to apply a function against an accumulator and each element in the array.
const reduceNumebrs = [1, 2, 3, 4, 5];
const reducevalues = reduceNumebrs.reduce((total, element) => {
    return (total + element)
}, 100)
console.log(reducevalues)
const obj = { a: 1, b: 2, c: 3 }
obj['d'] = 4
console.log(obj['c'])
const arr2d = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'f', 'g'],
    ['f', 'b', 'c'],
]
console.log(arr2d.flat())
const count = arr2d.flat().reduce((accumlator, currentVal) => {
    if (accumlator[currentVal]) {
        accumlator[currentVal] = accumlator[currentVal] + 1
    } else {
        accumlator[currentVal] = 1
    }
    return accumlator
}, {})
console.log(count)