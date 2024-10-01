function celciusToFarenheit() {
    const celciusInput = document.getElementById("celcius");
    const outPutField = document.getElementById("output")
    if (celciusInput.value.trim() === "") {
        outPutField.classList.add("text-red-500")
        outPutField.textContent = "Enter the value";
        return;
    }
    const celcius = parseFloat(celciusInput.value)
    if (isNaN(celcius)) {
        celciusInput.classList.add("border", "border-red-500", "border-solid");
        outPutField.classList.add("text-red-500")
        outPutField.textContent = "please Enter the Valid Number"
        return
    }
    const farenheit = celcius * (9 / 5) + 32;
    outPutField.classList.add("text-white")
    outPutField.textContent = farenheit + " °F"

}