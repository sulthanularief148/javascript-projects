/*\

Syntax:

const myPromise = new Promise((resolve, reject) => {
    resolve()
    reject();
    
    })



    Success or Reject

    if(success) {
     returns value 
    
    }  else {
    return error object  
    }

    Promise Object Supports Two Properties : State and Result
    State: Pending, fulfilled, rejected
    Result: Pending: Undefined. fulfilled: A result value, mRejected: Error Object


    How to Hnadle the Promises:

    myPromise.then( success, failure)
*/



// const result = (result) => {
//     document.getElementById("result").innerHTML = result
// }


// let myPromise = new Promise((resolve, reject) => {
//     let x = 1;

//     if (x == 0) {
//         resolve("Ok")
//     } else {
//         reject("error")
//     }
// })

// myPromise.then(
//     (value) => {
//         result(value)
//     },
//     (error) => {
//         result(error)
//     }
// )



// Tatkal booking example
// const tatkalBooking = () => {
//     return new Promise((resolve, reject) => {
//         let tatkal = 1;

//         if (tatkal == true) {
//             console.log(tatkal)
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }

// tatkalBooking().then(
//     () => {
//         console.log("Tatkal Booked Successfully")
//     }
// ).catch(
//     () => {
//         console.log("Tatkal booking failed")
//     }
// )

// Promise Methods:
/*
1.Promise.all() - If  all promises are resolved, it returns an array of values
2.Promise.allSettled() - If  all promises are resolved or rejected, it returns an array of values
3.Promise.any() - If  any of the promises are resolved, it returns the value of the first resolved promise
4.Promise.race() - If   any of the promises are resolved or rejected, it returns the value of the first resolved or rejected


*/

// Error Handling or Error handling
// try, catch and Finally
// try {
//     let num = prompt("Enter the Numebr")
//     if (isNaN(num))
//         throw new Error("Enter the valid Number");
//     console.log(num ** 2)

// } catch (error) {
//     console.error(error);

// }



// Async and Await
// API Call random joke
// https://official-joke-api.appspot.com/random_joke - API URL

const randomJoke = async () => {
    try {
        const fetchJoke = await fetch("https://official-joke-api.appspot.com/random_joke")
        console.log(await fetchJoke.json())


    } catch (error) {
        console.error(error)
    }

}
console.log(randomJoke())