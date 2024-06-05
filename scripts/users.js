"use strict"

window.onload = () => {
    initTable();
}


async function initTable() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users", {});
        if (!response.ok) {
            outputField.innerHTML = "Error";
            throw new Error("Api machine broke");
        }
        let data = await response.json();

        let tableBody = document.querySelector("#tableBody");

        data.forEach((user) => {
            let newRow = tableBody.insertRow();

            let cellId = newRow.insertCell();
            cellId.innerHTML = user.id;

            let cellName = newRow.insertCell();
            cellName.innerHTML = user.name;

            let cellUsername = newRow.insertCell();
            cellUsername.innerHTML = user.username;

            let cellEmail = newRow.insertCell();
            cellEmail.innerHTML = user.email;

            // that's a funny name
            let cellPhone = newRow.insertCell();
            cellPhone.innerHTML = user.phone;

            let cellWebsite = newRow.insertCell();
            cellWebsite.innerHTML = user.website;
        })
    } catch (error) {
        console.log(error);
    }
} 