// Area of circle - 3.14 * r * r
// Circumference of Circle - 2 *  3.14 * r
// Diameter of circle - 2 * r

const radius = [1, 5, 6, 7, 4]
const areaOfCircle = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]) // Area of circle - 3.14 * r * r

    }
    return output

}
console.log(areaOfCircle(radius))


const circum = (radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]) // Circumference of Circle -
    }
    return output
}
console.log(circum(radius))

const diameter = radius => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]) // Diameter of circle - 2 * r
    }
    return output
}

console.log(diameter(radius))


// using Higher order function
const area = (r) => {
    return Math.PI * r * r
}
const circumference = (r) => {
    return 2 * Math.PI * r

}
const diameters = (r) => {
    return 2 * r
}

const calculate = (logic, radius) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}
console.log(calculate(area, radius))
console.log(calculate(circumference, radius))
console.log(radius.calculate(diameters))
