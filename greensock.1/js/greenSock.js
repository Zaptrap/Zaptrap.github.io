let heading = document.getElementById("heading");

gsap.from(".chucked" , {
    duration: 5,
    rotation: 720, 
    x: -500,
    y: -1000,
    ease: "elastic",
    stagger: 0.5,
});

gsap.from(".headline" , {
    opacity: 0,
    duration: 2.5,
    y: 300,
    stagger: 0.3,
});

gsap.from("p" , {
    duration: 3,
    opacity: 0,
    x: 500,
    stagger: 0.5,
})