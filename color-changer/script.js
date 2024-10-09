const footer = document.getElementById("footer");
const btn = document.querySelector("button");
const main = document.getElementById("main");
const header = document.getElementById("header-color-code")
const flipper =  document.getElementById("flipper");


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const randomDigits = () => {
    const randomDigit = Math.floor((Math.random()) * 16)
    return hex[randomDigit]
}
const hexCodeGenerate = () => {
    let hexCode = "#"
    for (let i = 1; i < 7; i++) {
        hexCode += randomDigits()
    }
    return hexCode
}

btn.addEventListener("click", () => {
    const newColor = hexCodeGenerate();
    console.log("Generated Color:", newColor);
    main.style.backgroundColor = newColor;
    btn.innerHTML = newColor
    header.innerHTML = newColor
    flipper.style.color = newColor
    footer.style.color = newColor

})












const year = new Date().getFullYear()
footer.innerHTML = `Copyright ${year} Reserved By Arief`
