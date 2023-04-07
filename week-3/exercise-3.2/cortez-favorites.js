// storing 4 buttons in a variable to add event listeners
const sport = document.getElementById("sport");
const book = document.getElementById("book");
const author = document.getElementById("author");
const lang = document.getElementById("lang");

// adding event listeners to each button
sport.addEventListener("click", () => {
    alert("Alabama Crimson Tide");
});

book.addEventListener("click", () => {
    alert("The Hobbit");
});

author.addEventListener("click", () => {
    alert("JK Rowling");
});

lang.addEventListener("click", () => {
    alert("JavaScript");
});