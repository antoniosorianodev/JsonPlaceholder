"use strict"

let value;

window.onload = () => {
    let fetchForm = document.querySelector("#fetchForm");
    let updateForm = document.querySelector("#updateForm");

    fetchForm.addEventListener("submit", specifyPost);
    updateForm.addEventListener("submit", updatePost);
}

let specifyPost = async (event) => {
    try {
        event.preventDefault();

        event.target.id.setAttribute("disabled", "");

        value = event.target.id.value;

        let userIdElement = document.querySelector("#userId");
        let titleElement = document.querySelector("#title");
        let completedElement = document.querySelector("#completed");

        userIdElement.removeAttribute("disabled");
        titleElement.removeAttribute("disabled");
        completedElement.removeAttribute("disabled");

        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${value}`, {});
        let data = await response.json();

        userIdElement.value = data.userId;
        titleElement.value = data.title;
        completedElement.value = data.completed;
    } catch (error) {
        console.log("this sucks", error);
    }
}

let updatePost = async (event) => {
    event.preventDefault();

    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${value}`, {
            method: "PUT",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                userId: event.target.userId.value,
                title: event.target.title.value,
                completed: event.target.completed.value
            })
        }
        );

        let updatedTodo = await response.json();

        console.log(updatedTodo);

        if (response.ok) {
            alert("Success!");
        }
    } catch (error) {
        console.log("something went wrong", error);
    }
}