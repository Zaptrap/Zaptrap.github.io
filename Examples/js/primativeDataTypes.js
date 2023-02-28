//console

debugger;

//DataType: String (text)
console.log ("Hello World!")

//DataType: Numbers
//don't need "" for numbers, only for strings
console.log (4)
console.log (3000.5)

//Math Operator
//multiplication = (*), division = (/)
console.log (10 + 5)
console.log (20 - 5)
console.log (13 * 4)
console.log (25 / 5)

//String Operator
//concatenation (+) (putting 2 strings together)
console.log ("Hello" + "World" + "!")

//varibles must be declared before being used
//varible declaration is used by the key "let" 
let greeting = "Good Evening"
console.log (greeting)

//variable with number data type
let myNumber = 7
console.log (myNumber)

//we can change assingned numbers at the same time
//myNumber = 10
//console.log (myNumber)

//we can also change the type of variable
//myNumber = "one Thousand"
//console.log ("one Thousand")

//we can also use operators for assignment
let myNewNumber = 4 + 5;
console.log (myNewNumber)

//we can use varibles in assignment
let anotherNumber = myNumber + myNewNumber
console.log (anotherNumber)

//we can even use the same variable 
//in its own assignment
anotherNumber = anotherNumber + 5;
console.log (anotherNumber)

//here's a practical use on a stie
let username = "Jio"
let personalGreeting = greeting + " " + username;
console.log (personalGreeting)

//string operator
console.log ("Hello" + "World!" + 69)

//Data Type: Boolean (true/false)
console.log (true);
console.log (false);

//boolean operator
//equivalence (==) (is equal to)
console.log (100 == 100) //true
console.log (100 == 50) //false

//non equivalence (!=) (is not equal)
console.log (3 != 4)    //true
console.log (99 != 99) //false

//greater than (>)
console.log (45 > 6)
console.log (5 > 68)

//less than (<)
console.log (4 < 60)
console.log (3 < 0)

//greater than or equal to (>=)
//less than or equal to (<=)
console.log (30 >= 25) //t
console.log (25 <= 50) //t
console.log (30 >= 30) //t
console.log (3 >= 25) //f
console.log (30 <= 2) //f

//Boolean data types allow for us to
//write branching code paths
if (true) {
    console.log ("This Statement is True!")
} else {
    console.log ("This Statement is False!")
}

let a = 5;
let b = 10;
if (a > b) {
    console.log ("This Statement is True!")
} else {
    console.log ("This Statement is False!")
}