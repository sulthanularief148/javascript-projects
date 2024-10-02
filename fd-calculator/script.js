const fdCalculator = () => {
    let tenure = document.getElementById("tenure");
    let result = document.getElementById("result");
    let tenureValue = Number(document.getElementById("tenure").value);
    if (tenure.value.trim() === "") {
        result.textContent = "Please Enter the Value"
        tenure.classList.add("border", "border-red-500", "border-solid")
        result.classList.add("text-red-500")
        return
    }
    if (isNaN(tenureValue)) {
        result.classList.add("text-red-500")
        result.textContent = "please Enter the Valid Number"
        tenure.classList.add("border", "border-red-500", "border-solid");
        return
    }

    let rate;
    if (tenureValue < 3)
        rate = 5.8
    else if (tenureValue >= 3 && tenureValue <= 6)
        rate = 5.5
    else if (tenureValue >= 6 && tenureValue <= 9)
        rate = 6.5
    else
        rate = 7.5
    result.classList.add("text-white")
    result.innerHTML = `Your Interest rate is ${rate}`
    return

}