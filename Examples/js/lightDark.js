let mode = "light";

let storedMode = localStorage.getItem("mode");
if (storedMode != null) {
    mode = storedMode;
}

const body = document.getElementById("body");
const header = document.getElementById("header");
const button = document.getElementById("modeToggle");

body.style.margin = "0px";
header.style.padding = "24px";

function displayMode() {
    //conditional example
    if (mode == "light") {
        header.style.backgroundColor = "black";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else if (mode == "dark") {
        header.style.backgroundColor = "white";
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else if (mode == "sepia") {
        header.style.backgroundColor = "white";
        body.style.backgroundColor = "#704214";
        body.style.color = "white";
    }
}

function displayModeV2() {
    switch (mode) {
        case "light":
            header.style.backgroundColor = "black";
            body.style.backgroundColor = "white";
            body.style.color = "black";
            break; //break prevents the code from "breaking through" the next case statement
        case "dark":
            header.style.backgroundColor = "white";
            body.style.backgroundColor = "black";
            body.style.color = "white";
            break;
        case "sepia":
            header.style.backgroundColor = "white";
            body.style.backgroundColor = "#704214";
            body.style.color = "white";
            break;
        }
}

displayMode();

displayModeV2();

function toggleMode() {
    if (mode == "light") {
        mode = "dark"; //don't use == on the statement properties (they'll be read as boolean or 'true or false')
    } else if (mode == "dark") {
        mode = "sepia";
    } else if (mode == "sepia") {
        mode = "light";
    }
    localStorage.setItem("mode", mode);
    //displayMode();
    displayModeV2();
}

button.onclick = toggleMode;