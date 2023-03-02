console.log("Hi There.")

let result = document.getElementById("result")

function displayTwoPlusTwo() {
    let number1 = 2
    let number2 = 2
    result.innerHTML = number1 + number2;
}

function displayThreeTimesFour() {
    let number1 = 3
    let number2 = 4
    result.innerHTML = number1 * number2;
}

function displayFourtynineDividedBySeven() {
    let number1 = 49
    let number2 = 7
    result.innerHTML = number1 / number2;
}

function displayMultiply() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = input1.value * input2.value;
}

displayMultiply();

function displayAddition() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML =
        parseInt(input1.value) + parseInt(input2.value);
}

function displayMultiplication() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML =
        parseInt(input1.value) * parseInt(input2.value);

}