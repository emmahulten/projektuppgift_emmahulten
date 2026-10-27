"use strict";

// --- 1. DOM-referenser ---
// Hämta element från DOM 
// Meny 
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
// Till bild karusell 
const toteEl = document.querySelector("#totes");
const postersEl = document.querySelector("#posters");
const stuffEl = document.querySelector("#stuff");

// --- 2. Variabler ---


// Array med object som innehåller bilder och information om produkt 
const toteItems = [
    {
        name: "Cheers", 
        image: "images/merch/tote/1.png"
    },
    {
        name: "Spillin' Tea",
        image: "images/merch/tote/2.png"
    },
    {
        name: "Sunny Side Up",
        image: "images/merch/tote/3.png"
    }, 
    {
        name: "Tini Tote",
        image: "images/merch/tote/4.png"
    },
    {
        name: "Tea Time, Anytime",
        image: "images/merch/tote/5.png"
    },
    {
        name: "The Usual",
        image: "images/merch/tote/6.png"
    },
    {
        name: "The Club Classic",
        image: "images/merch/tote/7.png"
    },
    {
        name: "Triple Trouble",
        image: "images/merch/tote/8.png"
    },
];

/* const posterItems = [
    {
        name: "",
        image:
    },
]; */

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
function setupCarousel(carouselEl, carouselItems) {
    // Hämtar bild och navigeringsknappar från aktuell karusell
    const imgEl = carouselEl.querySelector("img");
    const nameEl = carouselEl.querySelector(".carousel-name");
    const descriptionEl = carouselEl.querySelector(".carousel-description");
    const prevBtn = carouselEl.querySelector(".prev");
    const nextBtn = carouselEl.querySelector(".next");
    

    // Håller reda på vilken bild som visas, men start på index 0
    let currentIndex = 0;

    // Uppdatera bilden och tillhärande information 
    function updateCarousel() {
        imgEl.src = carouselItems[currentIndex].image;
        nameEl.textContent = carouselItems[currentIndex].name; 

        if (descriptionEl) {
            descriptionEl.textContent = carouselItems[currentIndex].ingredients || "";
        }
    }

    // Går till nästa bild vid klick
    nextBtn.addEventListener ("click", function() {
        currentIndex++;

        // Börjar om från första bilden om sista index passerats
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0; 
        }

        updateCarousel();
    });

    // Går till föregående bild vid klick
    prevBtn.addEventListener ("click", function() {
        currentIndex--;

        // Hoppar till sista bilden om index blir mindre än 0
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        }
        updateCarousel();
    });

    // Visar informationen för första bilden direkt
    updateCarousel();
}

// Startar karusellen för respektive karusellelement
setupCarousel(toteEl, toteItems);

/* -- Inväntar bildmaterial -- 
 setupCarousel(postersEl, postersImages);
setupCarousel(stuffEl, stuffImages); */