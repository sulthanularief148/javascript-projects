/*
Bangalore 
 Population: 12 million
 Language: Kannada 
Chennai
 Population: 10 million
 Language: Tamil 
Kerela
 Population: 35 million
 Language: Malayalam 
Delhi
 Population: 20 million
 Language: Hindi 
*/

const input = document.getElementById("city");
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
    const result = `The city is ${city}, the population of ${city} is ${population} million people, and the primary language is ${language}.`;
    resultDiv.innerHTML = result;
    wrapper.appendChild(resultDiv);
}






