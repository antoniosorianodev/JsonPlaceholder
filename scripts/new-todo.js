"use strict"

window.onload = () => {
    let todoForm = document.querySelector("#todoForm");

    todoForm.addEventListener("submit", createATodo);
}

const createATodo = async (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    let formDataAsObject = Object.fromEntries(formData);

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(formDataAsObject)
        });

        let newTodo = await response.json();

        if (response.ok) {
            alert(`Success! Posted with id: ${newTodo.id}`);
        }
    } catch (error) {
        console.log("something went wrong", error);
    }
}