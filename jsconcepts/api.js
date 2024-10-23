// Application Programming Interface
// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
//     .then(response => response.json())
//     .then((msg) => console.log(msg[0].setup + " " + msg[0].punchline))
//     .catch((err) => console.log(err))


//  Multiple Joke API
const jokeList = document.getElementById("jokes")
fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
    .then(response => response.json())
    .then(jokes => {
        jokes.map(joke => {
            const listItem = document.createElement("li")
            listItem.textContent = `${joke.setup} - ${joke.punchline}`;
            jokeList.appendChild(listItem)
        }
        )
    })
    .catch(error => console.error(error))

// Json PlaceHolder FakeAPI

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'content-type':'application/json' },
    body: JSON.stringify({
        completed: true,
        id: 200,
        title: 'foo',
        userId: 200
    })
})
    .then(response => response.json())
    .then(json => console.log(json))


