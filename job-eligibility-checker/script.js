const radio = document.getElementsByName("education");
const output = document.getElementById("output")
document.addEventListener("click", () => {
    let result;
    Array.from(radio).map(element => {
        if (element.checked) {
            switch (element.value) {
                case "Highschool":
                    result = "You are eligible for Job"
                    break;
                case "UG":
                    result = "You are also eligible for JoB"
                    break;
                case "Doctorate":
                    result = "You are Not eligible for Job"
                    break;
                default:
                    result = "Please select your education level";
                    break;
            }
        }
    });

    if (result) {
        output.innerHTML = result;
    } else {
        output.innerHTML = "Please select your education level";
    }
})



