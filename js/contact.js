"use strict";

// --- 1. DOM-referenser ---
// Hämta element från DOM 
const formEl = document.querySelector("#contactForm");

const nameEl = document.querySelector("#name");
const emailEl= document.querySelector("#email");
const phoneEl= document.querySelector("#phone");
const subjectEl = document.querySelector("#subject");
const messageEl = document.querySelector("#message");

const nameErrorEl = document.querySelector("#nameError");
const emailErrorEl = document.querySelector("#emailError");
const phoneErrorEl = document.querySelector("#phoneError");
const subjectErrorEl = document.querySelector("#subjectError");
const messageErrorEl = document.querySelector("#messageError");

const formInputs = formEl.querySelectorAll("input, select, textarea");
const errorMessages = formEl.querySelectorAll(".error-message");

const confirmationEl = document.querySelector("#confirmation");



// --- 2. Variabler ---


// --- 3. Eventlyssnare ---
// Änring av ämne i kontaktformulär
/* subjectEl.addEventListener("change", changeSubject); */

formEl.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateFrom()) {
        // Skriv ut bekräftelse meddelande 
        confirmationEl.innerHTML = `
            <h2>Tack för ditt meddelande!</h2>
            <p>Vi återkommer så snart vi kan.
                <br> 
                Vill du komma i kontakt med oss direkt? 
                <br>
                Ring oss på <a href="tel:+46701740612">070-174 06 12</a>.
            </p>`;
        confirmationEl.classList.add("confirmation-success");

        // Rensa input fält 
        formEl.reset();
    }

});






// --- 4. Funktioner ---


// Validera formulär
function validateFrom() {
    let isValid = true;

    // Rensa tidigare felmarkringar
    formInputs.forEach(input => {
        input.classList.remove("input-error");
    });

    // Rensa tidigare felmeddelanden
    errorMessages.forEach(error => {
        error.textContent = "";
    });


    // Validera inmatning och skriv ut ev felmeddelanden 
    if (nameEl.value.trim() === "") {
        nameEl.classList.add("input-error")
        nameErrorEl.textContent = "Du måste ange ditt namn."

        isValid = false;
    }

    if (emailEl.value.trim() === "") {
        emailEl.classList.add("input-error")
        emailErrorEl.textContent = "Du måste ange din e-postadress."

        isValid = false;
    } else if (!emailEl.value.includes("@") || !emailEl.value.includes(".")) {
        emailEl.classList.add("input-error")
        emailErrorEl.textContent = "Ange en giltig e-postadress."

        isValid = false;
    }

    if (phoneEl.value.trim() === "") {
        phoneEl.classList.add("input-error")
        phoneErrorEl.textContent = "Du behöver ange ditt telefonnummer."

        isValid = false;
    }

    if (subjectEl.value === "") {
        subjectEl.classList.add("input-error")
        subjectErrorEl.textContent = "Du behöver välja ett ämne."

        isValid = false;
    }

    if (messageEl.value.trim() === "") {
        // Om rutan enbart innehåller mellanslag, nollställ
        messageEl.value = "";
        
        messageEl.classList.add("input-error")
        messageErrorEl.textContent = "Du behöver skriva ett meddelande."
    

        isValid = false;
    }


    return isValid;
}

/* function changeSubject() {
    const selectedSubject = subjectEl.value; 

    if (selectedSubject === "table") {
        // Visa fält för bordsbokning
    } else if {
        // Visa fält för rumsbokning
    } else {
        // Visa fält för allmän fråga 
    }
} */
