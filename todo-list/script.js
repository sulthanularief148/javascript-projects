let btn = document.getElementById('addBtn');
let addList = document.getElementById('taskList');
let itemInput = document.getElementById('item');
let items = [];


window.onload = () => {
    items = JSON.parse(localStorage.getItem('todos')) || [];
    items.forEach(todo => addtodo(todo));
};


btn.addEventListener('click', () => {
    addItem();
});


itemInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});


function addItem() {
    const todo = itemInput.value.trim();
    if (todo) {
        items.push(todo);
        localStorage.setItem('todos', JSON.stringify(items));
        addtodo(todo);
        itemInput.value = '';
    }
}


function addtodo(todo) {
    let para = document.createElement('li');
    para.innerText = todo;
    para.classList.add("p-2", "bg-gray-100", "rounded-lg", "shadow-sm", "cursor-pointer");
    addList.appendChild(para);

    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        remove(todo);
    });


    para.addEventListener('dblclick', () => {
        addList.removeChild(para);
        remove(todo);
    });
}

function remove(todo) {
    let index = items.indexOf(todo);
    if (index > -1) {
        items.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(items));
}







// function addItem() {
//     const item = itemInput.value.trim();

//     if (item) {
//         items.push(item.toLowerCase())
//         const newList = document.createElement("li")
//         newList.textContent = item
//         newList.classList.add("p-2", "bg-gray-100", "rounded-lg", "shadow-sm", "cursor-pointer");
//         addList.appendChild(newList)
//         itemInput.value = '';
//         localStorage.setItem("items", JSON.stringify(items))
//         newList.addEventListener("dblclick", () => {
//             newList.classList.add("line-through")

//         })
//         newList.addEventListener("click", () => {
//             if (newList.classList.contains("line-through")) {
//                 const index = items.indexOf(item)
//                 console.log(index)
//                 if (index > -1) {
//                     items.splice(index, 1)
//                 }
//                 newList.remove();
//             }
//         })
//     }

// }
// btn.addEventListener("click", () => {
//     addItem();
// })

