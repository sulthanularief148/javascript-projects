function cmToInches() {
    let inputField = document.getElementById("input");
    const outputField = document.getElementById("output");

    if (inputField.value.trim() === "") {
        inputField.classList.add("border", "border-solid", "border-red-500");
        outputField.classList.add("text-red-500");
        outputField.textContent = "Please Enter the Number";
        return;
    }
    const result = inputField.value * 0.393701;
    outputField.classList.add("text-white");
    outputField.textContent = result + " Inches";
    return;
}