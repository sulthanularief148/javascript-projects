let btn = document.getElementById("convert");
let amount = document.getElementById("amount");
let result = document.getElementById("result")

fetch('https://api.frankfurter.app/currencies')
    .then((response) => response.json())
    .then((currency) => displayCurrecncy(currency))
    .catch(error => error)


const select = document.querySelectorAll(".currency");
console.log(select)

function displayCurrecncy(currency) {

    const curr = Object.entries(currency)
    for (let i = 0; i < curr.length; i++) {

        const option = `<option value=${curr[i][0]}>${curr[i][0]}</option>`

        select[0].innerHTML += option
        select[1].innerHTML += option

    }
}


btn.addEventListener("click", () => {
    let curr1 = select[0].value;
    let curr2 = select[1].value
    let amountValue = amount.value

    if (curr1 === curr2)
        alert("Choose Different currencies")
    else
        convert(curr1, curr2, amountValue)


})

async function convert(from, to, amount) {
    await fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
        .then((resp) => resp.json())
        .then((data) => {
            const convertedAmount = (amount * data.rates[to]).toFixed(2);
            result.value = convertedAmount
        });
}

// convert("EUR", "USD", 10);