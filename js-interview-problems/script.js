// Function Recursive - A recursive function is a function that calls itself in order to solve a problem
// 1. Factorial - if 5!: 5*4*3*2*1 = 120
// 2. Fibonacci
// 3. Binary Search
// 4. Merge Sort
// 5. Quick Sort
// 6. Tower of Hanoi
// 7. Binary Search Tree
// 8. AVL Tree
// 9. Heap Sort
// 10. Bubble Sort
// 11. Selection Sort
// 12. Insertion Sort
// 13. Merge Sort
// 14. Quick Sort
// 15. Heap Sort


// 1. Factorial
console.log("1.Factorial")
const factorial = (n) => {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1)
}
console.log(factorial(2))
/*
input = 5
output = 120

if(5 === 1) return false
return 5 *  factorial(5 -1 = 4)

if(4 ===  1) return false
return 4 * factorial(4 -1 = 3)

if(3 === 1) return false
return 3 * factorial(3 - 1 = 2)

if(2 === 1) return false
return 2 * factorial(2 - 1 = 1)

if(1 === 1) return true
The function will end


*/
//  fn = fn-1 + fn-2 , where n ≥ 2. Here, f0 = 0 and f1 = 1. 
// 2.Fibonacci series
// const fibonacci = (n) => {
//     return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(1))


// 3.Sum of Array value
console.log("2. Sum Of Array Values")
const arr = [4, 5, 3, 12, 56, 87, 10, 1, 8, 9];


const sumOfArrayValue = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum

}
console.log(sumOfArrayValue(arr))


// 3. Find the Volume
console.log("3.Find The Volume")
const volume = (l, b, h) => l * b * h
console.log(volume(2, 3, 5))

// 4. Area of Circle
console.log("4. Area Of Circle")
const areaOfCircle = r => 3.14 * r * r
console.log(areaOfCircle(5))
