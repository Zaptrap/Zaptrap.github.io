//arrays created using [] brackets
let emptyArray = []; //more can be added

let numberArray = [27, 2, 7, 2292, 45]; //length of 5

let stringArray =
    ["apple", "orange", "grape", "pear"]; //length of 4

let mixedArray = ["cat", 5, 77, "pizza", [2, 3]];

let foodArray = [
    "apple", 
    "bacon", 
    "chicken", 
    "spinach", 
];

console.log (foodArray);

let firstFoodArray = foodArray[0];
console.log(firstFoodArray);

let thirdFoodArray = foodArray[2];
console.log(thirdFoodArray);

//we can add items to existing arrays.
//and one way is by using the push method.

//before
console.log(foodArray);

//after
foodArray.push("sourcream");
console.log(foodArray);

const pageList = document.getElementById("pageList");
const itemInput = document.getElementById("itemInput");
const itemSubmit = document.getElementById("itemSubmit");

function displayList() {
    pageList.innerHTML = foodArray
    .toString() 
    .replaceAll(",", "<br>");
}

displayList();

itemSubmit.addEventListener("click", function(e) {
    let newItem = itemInput.value;
    foodArray.push(newItem);
    displayList();
})