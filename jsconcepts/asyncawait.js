// Async always return a promise
const justPromise = new Promise((resolve, reject) => {
    // Simulate some async operation
    const paid = false;

    if (paid)
        resolve("Paid Successfully")
    else
        reject("Paid not successfully")
})

const asyncFunction = async () => {
    try {
        const response = await justPromise;
        console.log(response)
    } catch (error) {
        console.log(error);

    }

}
console.log(asyncFunction())