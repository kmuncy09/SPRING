let logInButton = document.querySelector(".logIn");
let createAccountButton = document.querySelector(".createAccount");
let logIn = document.querySelector(".logIn");
let createAccount = document.querySelector(".createAnAccount");
let backLoginButton = document.querySelector(".backToLogin");
let otherButton = document.querySelectorAll(".other");
let otherQuestion = document.querySelector(".otherQuestion");
let button = document.querySelectorAll("button");
let createProfile = document.querySelector(".createProfile")
let activities = document.querySelector(".activities");
let profile = document.querySelector(".profile");
let jobInput = document.querySelector(".job");
let problemInput = document.querySelector(".problem");
let focusInput = document.querySelector(".focus");
let usernameInput = document.querySelector(".username");

createAccountButton.addEventListener("click", function(){
    logIn.style.display="none";
    createAccount.style.display="block";
});
backLoginButton.addEventListener("click", function(){
    logIn.style.display="block";
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
logInButton.addEventListener("click", function (){
    logIn.style.display="none";
});
createProfile.addEventListener("click", function(){
    let job = jobInput.value;
    let problem = problemInput.value;
    let focus = focusInput.value;
    let username = usernameInput.value;
    activities.style.display="block";
    profile.style.display="block";
});

let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
const track = document.querySelector(".carousel-track");
let slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;
let totalSlides = slides.length;

function updateCarousel() {
    if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`};
}
if (nextButton) {
    nextButton.addEventListener('click', function(){
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
})};
if (previousButton) {
    previousButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateCarousel();
})};