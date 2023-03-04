//gerElementByTagName will return an array
//of an element to the matching tag name

//const body = document.getElementsByTagName("body")[0]   //this const also
const elementsArray =
    document.getElementsByTagName("body");
const body = elementsArray[0];

// body.innerHTML += "<h1> Heading 1 </h1>"
// body.innerHTML += "<h1> Heading 2 </h1>"
// body.innerHTML += "<h1> Heading 3 </h1>"
// body.innerHTML += "<h1> Heading 4 </h1>"

// const h2s = document.getElementsByTagName("h2");

//for loops
//the 3 main setups parts for a loop 
//-intializing count variables (first "i")
//-the stop for a loop (second "i")
//the code to update the counting variable (last "i")

for (let i = 0; i < 10; i ++) {
    body.innerHTML += "<h3> Heading " + (i+1) + "</h3>";
    for (let j = 0; j < 5; j++) {
        body.innerHTML += "<h5> Heading " + (j+1) + "</h5>"; 
    }
}