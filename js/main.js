"use strict";

// --- 1. DOM-referenser ---
// Hämta element från DOM 
const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// --- 2. Variabler ---

// Mobilmeny
menuBtn.addEventListener("click", function() {

    if (menu.classList.toggle("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// --- 3. Eventlyssnare ---


// --- 4. Funktioner ---


