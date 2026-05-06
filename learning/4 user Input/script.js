//How to accept user input in JavaScript

//1. Easy Way = Window prompt method
//2. Professional Way = HTML textbox

// let usename;
// username = window.prompt("What is your name?"); 
// console.log("Hello " + username + "! Welcome to JavaScript Programming!");

let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username)
}


