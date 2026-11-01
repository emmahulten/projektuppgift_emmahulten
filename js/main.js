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
const drinksEl = document.querySelector("#drinks");

// --- 2. Variabler ---


// Array med object till merch-sidan
const toteItems = [
    {
        name: "Frankie's No.1",
        image: "images/merch/tote/1.webp",
        alt: "Krämfärgad tygkasse med tryck av Frankie's No.1 signaturdrink"
    },
    {
        name: "Spillin' Tea",
        image: "images/merch/tote/2.webp",
        alt: "Krämfärgad tygkasse med grönt print, två skålande vinglas och texten `Spillin Tea at Frankie's`"
    },
    {
        name: "As you are",
        image: "images/merch/tote/3.webp",
        alt: "Krämfärgad tygkasse med tryck av martiniglas och texten `Come as you are Stay a little longer`"
    },
    {
        name: "Tini Tote",
        image: "images/merch/tote/4.webp",
        alt: "Krämfärgad tygkasse med tryck martiniglas och blått tekcnat vatten som bakgrund"
    },
    {
        name: "Tea Time, Anytime",
        image: "images/merch/tote/5.webp",
        alt: "Krämfärgad tygkasse med grönt tryck av tekanna,tekopp och margaritaglas "
    },
    {
        name: "Sh-eeerry",
        image: "images/merch/tote/6.webp",
        alt: "Krämfärgad tygkasse med vinrött tryck av Frankie's logga och körsbär"
    },
    {
        name: "Triple Trouble",
        image: "images/merch/tote/7.webp",
        alt: "Krämfärgad tygkasse med tre drinkar"
    },
    {
        name: "The Club Classic - Red",
        image: "images/merch/tote/8.webp",
        alt: "Krämfärgad tygkasse med vintrött tryck av Frankie's logga och martiniglas"
    },
    {
        name: "The Club Classic - Green",
        image: "images/merch/tote/9.webp",
        alt: "Krämfärgad tygkasse med grönt tryck av Frankie's logga och martiniglas"
    }
];


const posterItems = [
    {
        name: "Triple Trouble ",
        image: "images/merch/posters/1.png",
        alt: "Krämfärgad poster med tre färglada drinkar"
    },
    {
        name: "As you are",
        image: "images/merch/posters/2.png",
        alt: "Krämfärgad poster med grönt tryck av martiniglas och texten `Come as you are Stay a little longer`"
    },
    {
        name: "Sh-eeerry",
        image: "images/merch/posters/3.png",
        alt: "Krämfärgad poster med vinrött tryck av Frankie's logga och körsbär"
    },
    {
        name: "The Club Classic - Green",
        image: "images/merch/posters/4.png",
        alt: "Krämfärgad poster med grönt tryck av Frankie's logga och martiniglas"
    },
    {
        name: "The Club Classic - Red",
        image: "images/merch/posters/5.png",
        alt: "Krämfärgad poster med vinrött tryck av Frankie's logga och martiniglas"
    },
    {
        name: "Midnight Dip",
        image: "images/merch/posters/6.png",
        alt: "Mörkblå poster med wiskeyglas och storisbit. Tecknad människa som dyker från isbiten ner i drinken"
    },
    {
        name: "Frankie's No.1",
        image: "images/merch/posters/7.png",
        alt: "Krämfärgad poster med Frankie's No.1 drink. Vinglas men liladryck, svartvinbär och apelsinskiva på kanten"
    },
    {
        name: "All Good",
        image: "images/merch/posters/8.png",
        alt: "Krämfärgad poster med grönt tryck av martiniglas och texten `SIPS, SNACKS, GOOD COMPANY`"
    },
    {
        name: "Dancin' Queen",
        image: "images/merch/posters/9.png",
        alt: "Krämfärgad poster med dicsokula och grön text `Sippin', Dancin', Laughing & Living life`"
    },
    {
        name: "Together",
        image: "images/merch/posters/10.png",
        alt: "Vinröd poster med krämfärgat tryck, två händer som skålar martiniglas och Frankie's logga"
    },
];

const stuffItems = [
    {
        name: "Cup - Sh-eeerry",
        image: "images/merch/stuff/1.png",
        alt: "Krämfärgad emaljkopp med svart kant, vinrött tryck av Frankie's logga och körsbär"
    },
    {
        name: "Cup - The Club Classic",
        image: "images/merch/stuff/2.png",
        alt: "Två krämfärgade emaljkoppar med svart kant. Tryck av Frankie's logga och martiniglas, en vinröd och en grön"
    },
    {
        name: "Cup - Spillin' Tea",
        image: "images/merch/stuff/3.png",
        alt: "Två krämfärgade emaljkoppar med svart kant. Tryck av skålande vinglas och texten `Spillin tea at Frankie's`, en vinröd och en grön"
    },
    {
        name: "Cup - As you are",
        image: "images/merch/stuff/4.png",
        alt: "Krämfärgad emaljkopp med svart kant, grönt tryck av martiniglas och texten `Come as you are Stay a little longer`"
    },
    {
        name: "Bok - Recept med signaturdrinkar & favoriter",
        image: "images/merch/stuff/5.png",
        alt: "Vinröd receptbok"
    }
];

// Array m signaturdrinkar
const drinkItems = [
    {
        name: "Frankie's No.1",
        ingredients: "Vodka, svartvinbär, björnbär, citron och fläder. Toppas med soda.",
        image: "images/drinks/1.webp"
    },
    {
        name: "Squeeze Me",
        ingredients: "Tequila blanco, limoncello, citron och agavesirap. Serveras med sockrad kant.",
        image: "images/drinks/2.webp"
    },
    {
        name: "Pinky Promise",
        ingredients: "Gin, rosa grapefrukt, fläder och prosecco.",
        image: "images/drinks/3.webp"
    },
    {
        name: "The Usual",
        ingredients: "Ljus rom, lime, mynta, fläder och sodavatten.",
        image: "images/drinks/4.webp"
    },
    {
        name: "Old Flames",
        ingredients: "Bourbon, lönnsirap, Angostura bitters och apelsinzest.",
        image: "images/drinks/5.webp"
    },
    {
        name: "Bloody Lovely",
        ingredients: "Vodka, färskpressad blodapelsin, blodapelsinsirap, lime och sodavatten.",
        image: "images/drinks/6.webp"
    },
    {
        name: "Sweet Talk",
        ingredients: "Gin, hallon, vanilj, citron och violsirap.",
        image: "images/drinks/7.webp"
    },
];


// --- 3. Eventlyssnare ---
// Mobilmeny
menuBtn.addEventListener("click", function () {

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
        imgEl.alt = carouselItems[currentIndex].alt || "";
        nameEl.textContent = carouselItems[currentIndex].name;

        if (descriptionEl) {
            descriptionEl.textContent = carouselItems[currentIndex].ingredients || "";
        }
    }

    // Går till nästa bild vid klick
    nextBtn.addEventListener("click", function () {
        currentIndex++;

        // Börjar om från första bilden om sista index passerats
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }

        updateCarousel();
    });

    // Går till föregående bild vid klick
    prevBtn.addEventListener("click", function () {
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

// Stäm av om karusell finns på sidan, tartar karusellen för respektive karusellelement
if (toteEl) {
    setupCarousel(toteEl, toteItems);
}

if (postersEl) {
    setupCarousel(postersEl, posterItems);
}

if (stuffEl) {
    setupCarousel(stuffEl, stuffItems);
}

if (drinksEl) {
    setupCarousel(drinksEl, drinkItems);
}