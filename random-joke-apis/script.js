const btn = document.getElementById("btn");
const wrapper = document.getElementById("wrapper");
const joke = document.createElement("p");
wrapper.appendChild(joke);
joke.classList.add("text-white", "text-xl")


const getJokeApi = () => {
    try {
        fetch("https://v2.jokeapi.dev/joke/Any")
            .then(response => {
                if (response.ok) {
                    console.log("Success");
                    return response.json(); // Parse the JSON if the response is successful
                } else {
                    console.log("Error fetching joke");
                    return null; // Handle error cases where response is not ok
                }
            })
            .then(data => {
                if (data) {
                    const jokeText = data.joke || `${data.setup} - ${data.delivery}`;
                    console.log(jokeText);
                    joke.textContent = `${jokeText} 🤣🤣🤣`;
                }
            })
            .catch(error => console.error("Error:", error));
    } catch (error) {
        console.error("Error:", error);
    }
};

btn.addEventListener("click", () => {
    joke.textContent = '';
    getJokeApi();
});
