const tl = gsap.timeline({
    defaults: { duration: 1, ease: "Power3.easeOut" },
});


tl.fromTo(".cta1", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<15%");
tl.fromTo(".logo-img", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");
tl.fromTo(".special", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");
tl.fromTo(".hero-btn", { opacity: 0 }, { opacity: 1, duration: 0.1 },);



const logo = document.querySelector(".ctaa1");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + "</span>";
});



gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(".letter", { y: "-80" }, { y: 0, delay: 0.3, stagger: 0.05, ease: "back.out(1)" });



const logo2 = document.querySelector(".ctaa2");
const letters2 = logo2.textContent.split("");

logo2.textContent = "";

letters2.forEach((letter2) => {
    logo2.innerHTML += '<span class="letter2">' + letter2 + "</span>";
});

gsap.set(".letter2", { display: "inline-block" });
gsap.fromTo(".letter2", { y: "-80" }, { y: 0, delay: 0.3, stagger: 0.05, ease: "back.out(3)" });



const logo3 = document.querySelector(".ctaa3");
const letters3 = logo3.textContent.split("");

logo3.textContent = "";

letters3.forEach((letter3) => {
    logo3.innerHTML += '<span class="letter3">' + letter3 + "</span>";
});

gsap.set(".letter3", { display: "inline-block" });
gsap.fromTo(".letter3", { y: "-80" }, { y: 0, delay: 0.3, stagger: 0.05, ease: "back.out(3)" });


const logo4 = document.querySelector(".ctaa4");
const letters4 = logo4.textContent.split("");

logo4.textContent = "";

letters4.forEach((letter4) => {
    logo4.innerHTML += '<span class="letter4">' + letter4 + "</span>";
});

gsap.set(".letter4", { display: "inline-block" });
gsap.fromTo(".letter4", { y: "-80" }, { y: 0, delay: 0.3, stagger: 0.05, ease: "back.out(3)" });


const logo5 = document.querySelector(".ctaa5");
const letters5 = logo5.textContent.split("");

logo5.textContent = "";

letters5.forEach((letter5) => {
    logo5.innerHTML += '<span class="letter5">' + letter5 + "</span>";
});

gsap.set(".letter5", { display: "inline-block" });
gsap.fromTo(".letter5", { y: "-80" }, { y: 0, delay: 0.3, stagger: 0.05, ease: "back.out(3)" });


const sub = gsap.timeline({
    scrollTrigger: {
        trigger :".c1",
        duration: 0.3, 
        // markers: { startColor: "pink", endColor: "pink" },
        ease: "Power3.easeOut",
        scrub: true,
        start: "-470%",
        end: "-125%",
    },
});



sub.fromTo(".c1", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");
sub.fromTo(".c2", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<15%");
sub.fromTo(".c3", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<15%");


const sub1 = gsap.timeline({
    scrollTrigger: {
        trigger :".r1",
        duration: 5, 
        // markers: { startColor: "pink", endColor: "pink" },
        ease: "Power3.easeOut",
        scrub: true,
        start: "-800%",
        end: "-20%",
    },
});



sub1.fromTo(".r1", { x:"-100%", opacity: 0 }, {x:0,opacity: 1 },);


const sub2 = gsap.timeline({
    scrollTrigger: {
        trigger :".r2",
        duration: 10, 
        // markers: { startColor: "pink", endColor: "pink" },
        ease: "Power3.easeOut",
        scrub: true,
        start: "-800%",
        end: "-20%",
    },
});


sub2.fromTo(".r2", { x:"-100%",  opacity: 0 }, {x:0,  opacity: 1 },);




const n1 = gsap.timeline({
    scrollTrigger: {
        trigger :".n1",
        duration: 0.3, 
        // markers: { startColor: "pink", endColor: "pink" },
        ease: "Power3.easeOut",
        scrub: true,
        start: "-470%",
        end: "-10%",
    },
});
const n2 = gsap.timeline({
    scrollTrigger: {
        trigger :".n4",
        duration: 0.3, 
        // markers: { startColor: "pink", endColor: "pink" },
        ease: "Power3.easeOut",
        scrub: true,
        start: "-470%",
        end: "-10%",
    },
});
const n3 = gsap.timeline({
    scrollTrigger: {
        trigger :".n7",
        duration: 0.3, 
        // markers: { startColor: "pink", endColor: "pink" },
        ease: "Power3.easeOut",
        scrub: true,
        start: "-470%",
        end: "-10%",
    },
});



n1.fromTo(".n1", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");
n1.fromTo(".n2", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<15%");
n1.fromTo(".n3", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");

n2.fromTo(".n4", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");
n2.fromTo(".n5", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<15%");
n2.fromTo(".n6", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");
n3.fromTo(".n7", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");
n3.fromTo(".n8", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<15%");
n3.fromTo(".n9", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<15%");

