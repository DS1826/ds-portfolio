var brandBtn = document.getElementById("brand-btn");
var aboutMeBtn = document.getElementById("about-me-btn");
var portBtn = document.getElementById("portfolio-btn");
var contactBtn = document.getElementById("contact-btn");
var myWorkBtn = document.getElementById("my-work");
var heroDiv = document.getElementById("hero-img");
var aboutMeDiv = document.getElementById("about-me");
var portDiv = document.getElementById("portfolio")
var contactDiv = document.getElementById("contact")

// NavBar click events to dynamically navigate through content

brandBtn.addEventListener("click", function (){

    console.log("Brand Clicked")
    heroDiv.classList.remove("hidden");
    aboutMeDiv.classList.add("hidden");
    portDiv.classList.add("hidden");
    contactDiv.classList.add("hidden");


});

aboutMeBtn.addEventListener("click", function (){

    console.log("About Me Clicked")
    heroDiv.classList.add("hidden");
    aboutMeDiv.classList.remove("hidden");
    portDiv.classList.add("hidden");
    contactDiv.classList.add("hidden");


});

portBtn.addEventListener("click", function (){

    console.log("Portfolio Clicked");
    heroDiv.classList.add("hidden");
    aboutMeDiv.classList.add("hidden");
    portDiv.classList.remove("hidden");


});

contactBtn.addEventListener("click", function (){

    console.log("Contact Clicked");
    heroDiv.classList.add("hidden");
    aboutMeDiv.classList.add("hidden");
    portDiv.classList.add("hidden");
    contactDiv.classList.remove("hidden");


});

myWorkBtn.addEventListener("click", function (){

    console.log("My Work Clicked");
    heroDiv.classList.add("hidden");
    aboutMeDiv.classList.add("hidden");
    portDiv.classList.remove("hidden");
    contactDiv.classList.add("hidden");


});