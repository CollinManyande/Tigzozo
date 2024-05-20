const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')


box1.onclick = function(){
    card1.classList.toggle('cardActive')
}

box2.onclick = function(){
    card2.classList.toggle('cardActive')
}

box3.onclick = function(){
    card3.classList.toggle('cardActive')
}

// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Event listener for the vector.png image click
// Place this code at the appropriate place in your JavaScript file or script tag

// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function () {
    // Select the vector image within the #hero element with the .dark class
    var vectorImage = document.querySelector("#hero .dark img");
    if (vectorImage) {
        // Attach the event listener to the vector image
        vectorImage.addEventListener("click", toggleDarkMode);
    }
});