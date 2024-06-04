"use strict"

window.onload = () => {
    let myDiv = document.querySelector("#results");
    let myButton = document.querySelector("#theButton");
    let myInput = document.querySelector("#todoId")

    myButton.addEventListener("click", () => daFunction(myInput, myDiv));
}

async function daFunction(inputField, outputField) {
    let url = "https://jsonplaceholder.typicode.com/todos/" + inputField.value;
    let response = await fetch(url, {});
    let data = await response.json();

    outputField.innerHTML = `
    userId: ${data.userId}
    id: ${data.id}
    title: ${data.title}
    completed: ${data.completed}
    `;
} 