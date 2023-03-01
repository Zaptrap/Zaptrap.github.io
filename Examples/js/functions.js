//variable review
let greeting = "Hello There"
console.log (greeting)

//simple function
function greet() {
    console.log (greeting);
}

greet();

//function with an input parameter
function greetUser(username) {
    let userGreeting = greeting + ", " + username;
    console.log (userGreeting)
}

greetUser ("Jacob");
greetUser ("Lewis");
greetUser ("Dominic");

//function with an input parameter
//that modifies the page
function greetUserOnPage (username) {
    let greetingDisplay = document.getElementById ("greetingDisplay");
    greetingDisplay.innerHTML = greeting + ", " + username;
    //use += to add upon fuctions instead of overriding them
   // let greetingDisplay = document.getElementById ("greetingDisplay");
   // greetingDisplay.innerHTML += greeting + ", " + username;
}

greetUserOnPage("Kim")
greetUserOnPage("Dave")

//function that outputs (or returns) a value
function getUserGreeting (username) {
    return greeting + ", " + username + "." + " How are you today?";
}

getUserGreeting ("Harold")
console.log (
    getUserGreeting("Harold")
)

//function that uses another function
//that modifies the page
function greetUserOnPageV2 (username) {
   let greetingDisplay = document.getElementById ("greetingDisplay")
   greetingDisplay.innerHTML = getUserGreeting (username)
}

greetUserOnPageV2 ("Nathan")