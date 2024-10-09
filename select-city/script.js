const input = document.getElementById("city");
const optionValue = input.options;
input.style.backgroundColor = "rgba(0,0,0,0.1)";
input.style.backDropFilter = "blur(20px)"
const button = document.querySelector("button");
const wrapper = document.getElementById("wrapper");
let resultDiv = document.createElement("div");
button.addEventListener("click", displayStates);
function displayStates() {
    const city = input.options[input.selectedIndex].value;
    let population;
    let language;
    switch (city) {
        case "Bangalore":
            console.log("Bangalore is the capital of Karnataka.");
            population = 12;
            language = "Kannada";
            break;
        case "Chennai":
            console.log("Chennai is the capital of Tamil Nadu.");
            population = 10;
            language = "Tamil";
            break;
        case "Kerela":
            console.log("Kerala is a state in India.");
            population = 35;
            language = "Malayalam";
            break;
        case "Delhi":
            console.log("Delhi is the capital of India.");
            population = 29;
            language = "Hindi";
            break;
        default:
            console.log("City not found");
            population = "unknown";
            language = "unknown";
    }
    const result = `The city is ${city}, the population of <strong>${city} </strong>is <strong>${population}</strong> million people, and the primary language is <strong>${language}</strong>.`;

    resultDiv.innerHTML = result;
    resultDiv.classList.add("text-white")
    wrapper.appendChild(resultDiv);
    const strongContents = resultDiv.querySelectorAll("strong");
    strongContents.forEach((strong) => {
        console.log(strong.textContent);
        strong.classList.add("text-blue-400");
    });
}






