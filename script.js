let logInButton = document.querySelector(".logIn");
let createAccountButton = document.querySelector(".createAccount");
let logInBox = document.querySelector(".logInBox");
let createAccount = document.querySelector(".createAnAccount");
let backLoginButton = document.querySelector(".backToLogin");
let otherButton = document.querySelectorAll(".other");
let otherQuestion = document.querySelector(".otherQuestion");
let button = document.querySelectorAll("button");

createAccountButton.addEventListener("click", function(){
    logInBox.style.display="none";
    createAccount.style.display="block";
});
backLoginButton.addEventListener("click", function(){
    logInBox.style.display="block";
    createAccount.style.display="none";
});
otherButton.forEach(el =>
el.addEventListener("click", function(){
    otherQuestion.style.display="block";
}));
button.forEach(b =>
b.addEventListener("click", function(){
    b.style.backgroundColor = "green";
    b.style.color = "white";
}));