"use strict";

// --- 1. DOM-referenser ---
// Hämta element från DOM 
// Meny 
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
// Till bild karusell 
const totesEl = document.querySelector("#totes");
const postersEl = document.querySelector("#posters");
const stuffEl = document.querySelector("#stuff");

// --- 2. Variabler ---


// Array med Totebag bilder för merch sidan 
const toteImages = [
    "images/merch/tote/1.png",
    "images/merch/tote/2.png",
    "images/merch/tote/3.png",
    "images/merch/tote/4.png",
    "images/merch/tote/5.png",
    "images/merch/tote/6.png",
    "images/merch/tote/7.png",
    "images/merch/tote/8.png"
];

// Array med Posters bilder för merch sidan 

// Araray med övriga produkter för merch sidan 


// --- 3. Eventlyssnare ---
// Mobilmeny
menuBtn.addEventListener("click", function() {

    if (menu.classList.toggle("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});






// --- 4. Funktioner ---


// Initiera en bildkarusell med tillhörande bilder och knappar
function setupCarousel(carouselEl, images) {
    // Hämtar bild och navigeringsknappar från aktuell karusell
    const imgEl = carouselEl.querySelector("img");
    const prevBtn = carouselEl.querySelector(".prev");
    const nextBtn = carouselEl.querySelector(".next");

    // Håller reda på vilken bild som visas, men start på index 0
    let currentIndex = 0; 

    // Går till nästa bild vid klick
    nextBtn.addEventListener ("click", function() {
        currentIndex++;

        // Börjar om från första bilden om sista index passerats
        if (currentIndex >= images.length) {
            currentIndex = 0; 
        }

        // Uppdatera bildens källa utifrån aktuellt index
        imgEl.src = images[currentIndex];
    });

    // Går till föregående bild vid klick
    prevBtn.addEventListener ("click", function() {
        currentIndex--;

        // Hoppar till sista bilden om index blir mindre än 0
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        imgEl.src = images[currentIndex];
    });
}

// Startar karusellen för respektive karusellelement
setupCarousel(totesEl, toteImages);

/* -- Inväntar bildmaterial -- 
 setupCarousel(postersEl, postersImages);
setupCarousel(stuffEl, stuffImages); */