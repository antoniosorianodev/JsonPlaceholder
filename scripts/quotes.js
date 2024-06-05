"use strict"

window.onload = () => {
    let myDiv = document.querySelector("#messageDiv");
    let myButton = document.querySelector("#myButton");

    myButton.addEventListener("click", () => initQuote(myDiv));
}

async function initQuote(myDiv) {
    try {
        let response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes", {});
        if (!response.ok) {
            myDiv.innerHTML = "Error";
            throw new Error("No quote for you");
        }
        let data = await response.json();

        myDiv.innerHTML = `
        <blockquote>${data[0].quote}</blockquote>
        <cite>-${data[0].author}</cite>
        `;
    } catch (error) {
        console.log(error);
    }
} 