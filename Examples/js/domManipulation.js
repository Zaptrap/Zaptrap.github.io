// the DOM (document object model)
//this is the representation of your webpage
//(including HTML and CSS) in JavaScript

//This will get us a JS reference to the
//HTML element with the specified ID
//remember, JS is case-sensitive
//don't forget "" for strings, otherwise they'll be
//read as variables
let body = document.getElementById("myBodyElement")

body.style.backgroundColor = "lightblue";

body.innerHTML = "<h1> Hello World! </h1>";

//we can also append HTML to 'innerHTML'
body.innerHTML = 
    body.innerHTML +
    "<p id='myParagraph'> This wascwritten with dynamic JS! </p>"

//the += operator is equivalent to the code above
body.innerHTML += "<p>here's another paragraph</p>";

//we can also get JS references to HTML elements
//that we added dynamically
let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "orange";
myParagraph.style.fontWeight = "bold";

//we can combine what we learned today to build
// a very simple 'light/dark' mode for our page
let isDarkMode = true;
if (isDarkMode) {
    body.style.backgroundColor = "#333333";
    body.style.color = "white";
} else {
    body.style.backgroundColor = "white";
    body.style.color = "#333333";
}