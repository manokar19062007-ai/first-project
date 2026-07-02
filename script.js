// ======================================
// KTM BIKE STORE - SCRIPT.JS (PART 1)
// ======================================

// Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }, 1200);
});

// Mobile Menu
const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

if (menu) {
    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menu.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });
}

// Close menu after clicking link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menu.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// Bike Search
const search = document.getElementById("search");

if (search) {

search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".bike-card").forEach(card=>{

let bike = card.querySelector("h3").textContent.toLowerCase();

card.style.display = bike.includes(value) ? "block" : "none";

});

});

}

// Sticky Navbar
const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="#000";
navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

}else{

navbar.style.background="rgba(0,0,0,.9)";
navbar.style.boxShadow="none";

}

});

// Scroll Progress Bar
const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

let totalHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});

// Back To Top
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Contact Form
const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank You! Your Message Has Been Sent.");

form.reset();

});

}

// Scroll Reveal Animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".bike-card,.feature,.title,.about-text").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// Active Navbar Link
const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-200;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
// ======================================
// KTM BIKE STORE - SCRIPT.JS (PART 2)
// ======================================

// Typing Effect
const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const text = "READY TO RACE";
    let index = 0;

    heroTitle.innerHTML = "";

    function typing() {

        if (index < text.length) {

            heroTitle.innerHTML += text.charAt(index);
            index++;

            setTimeout(typing, 120);

        }

    }

    typing();

}

// ======================================
// Counter Animation
// ======================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ======================================
// FAQ Accordion
// ======================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if(question){

        question.addEventListener("click", () => {

            item.classList.toggle("open");

        });

    }

});

// ======================================
// Dark Mode
// ======================================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

// ======================================
// Button Hover Effect
// ======================================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ======================================
// Floating Animation
// ======================================

const cards = document.querySelectorAll(".bike-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ======================================
// Welcome Message
// ======================================

setTimeout(() => {

    console.log("🏍 Welcome to KTM Bike Store");

}, 1000);

// ======================================
// Current Year
// ======================================

const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}