let lighboxContainer =
    document.getElementById("lightboxContainer");

let lightboxBackground =
    document.getElementById("lightboxBackground");

let lightbox = document.getElementById("lightbox");

let lightboxCloser =
    document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// let coffeeImage = document.getElementById("coffeeImage");
// coffeeImage.onclick = openLightbox; 

// let Gorillaz = document.getElementById("Gorillaz");
// Gorillaz.onclick = openLightbox; 

// let ChildishGambino = document.getElementById("ChildishGambino");
// ChildishGambino.onclick = openLightbox; 

// let GreenDay = document.getElementById("GreenDay");
// GreenDay.onclick = openLightbox; 

// let PanicAtTheDisco = document.getElementById("PanicAtTheDisco");
// PanicAtTheDisco.onclick = openLightbox; 

function closeLightbox() {
    lighboxContainer.classList.remove("display")
    lightbox.src= "";
}

// lightboxCloser.onclick = closeLightbox;         //to comment out code: command + /
// lightboxBackground.onclick = closeLightbox;     //and again to undo

let galleryImages =document.getElementsByClassName("galleryImage");
for (let i =0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}

let closers = document.getElementsByClassName("closer");
for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closers.onclick = closeLightbox;
}