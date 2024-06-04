"use strict"

window.onload = () => {
    let myDiv = document.querySelector("#results");
    let myButton = document.querySelector("#theButton");
    let myInput = document.querySelector("#todoId")

    myButton.addEventListener("click", () => daFunction(myInput, myDiv));
}

async function daFunction(inputField, outputField) {
    try {
        let url = "https://jsonplaceholder.typicode.com/todos/" + inputField.value;
        let response = await fetch(url, {});
        if (!response.ok) {
            outputField.innerHTML = "Error";
            throw new Error("Type better");
        }
        let data = await response.json();

        outputField.innerHTML = `
        <div><b>userId:</b> ${data.userId}</div>
        <div><b>id:</b> ${data.id}</div>
        <div><b>title:</b> ${data.title}</div>
        <div><b>completed:</b> ${data.completed}</div>
        `;
    } catch (error) {
        console.log(error);
    }
} 