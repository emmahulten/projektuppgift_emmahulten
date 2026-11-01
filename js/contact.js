"use strict";

// --- 1. DOM-referenser ---

// Formulär och bekräftelse
const formEl = document.querySelector("#contactForm");
const confirmationEl = document.querySelector("#confirmation");

// Formulärfält
const nameEl = document.querySelector("#name");
const emailEl= document.querySelector("#email");
const phoneEl= document.querySelector("#phone");
const subjectEl = document.querySelector("#subject");
const messageEl = document.querySelector("#message");

// Bokningsfält
const dateEl = document.querySelector("#date");
const guestsEl = document.querySelector("#guests");
const timeEl = document.querySelector("#time");


// Dynamiska sektioner
const bookingEl = document.querySelector("#bookingFields");
const timeOptionEl = document.querySelector("#timeField");


// Informationstexter 
const timeInfoEl = document.querySelector("#timeInfo");
const eventInfoEl = document.querySelector("#eventInfo");

// Felmeddelanden
const nameErrorEl = document.querySelector("#nameError");
const emailErrorEl = document.querySelector("#emailError");
const phoneErrorEl = document.querySelector("#phoneError");
const subjectErrorEl = document.querySelector("#subjectError");
const messageErrorEl = document.querySelector("#messageError");
const dateErrorEl = document.querySelector("#dateError");
const guestsErrorEl = document.querySelector("#guestsError");
const timeErrorEl = document.querySelector("#timeError");

// Samlingar för att rensa fel 
const formInputs = formEl.querySelectorAll("input, select, textarea");
const errorMessages = formEl.querySelectorAll(".error-message");


// --- 2. Eventlyssnare ---

subjectEl.addEventListener("change", changeSubject);
formEl.addEventListener("submit", onSubmit);


// --- 3. Funktioner ---

function onSubmit(event) {
    event.preventDefault();

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const phone = phoneEl.value.trim();
    const subject = subjectEl.value;
    const message = messageEl.value.trim();

    if (validateForm(name, email, phone, subject, message)) {
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

        confirmationEl.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Rensa formulär och återställ dynamiska fält
        formEl.reset();
        changeSubject();

    }
}





// Validera formulär
function validateForm(name, email, phone, subject, message) {
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
    if (name === "") {
        nameEl.classList.add("input-error")
        nameErrorEl.textContent = "Du måste ange ditt namn."

        isValid = false;
    }

    if (email === "") {
        emailEl.classList.add("input-error")
        emailErrorEl.textContent = "Du måste ange din e-postadress."

        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailEl.classList.add("input-error")
        emailErrorEl.textContent = "Ange en giltig e-postadress."

        isValid = false;
    }

    if (phone === "") {
        phoneEl.classList.add("input-error")
        phoneErrorEl.textContent = "Du behöver ange ditt telefonnummer."

        isValid = false;
    }

    if (subject === "") {
        subjectEl.classList.add("input-error")
        subjectErrorEl.textContent = "Du behöver välja ett ämne."

        isValid = false;
    }

    if (message === "") {
        // Om rutan enbart innehåller mellanslag, nollställ
        messageEl.value = "";

        messageEl.classList.add("input-error")
        messageErrorEl.textContent = "Du behöver skriva ett meddelande."
    

        isValid = false;
    }
    // Validera bokningsfält OM användaren valt en bokning 
    if (subject === "table" || subject === "room") {
        if (!validateBooking()) {
            isValid = false;
        }
    }


    return isValid;
}



// Validera dynamiska fält
function validateBooking() {
    let isValid = true;

    //Gemensamma bokningsfält
    if (dateEl.value == "") {
        dateEl.classList.add("input-error")
        dateErrorEl.textContent = "Du behöver ange ett datum."

        isValid = false;
    }

    if (guestsEl.value == "") {
        guestsEl.classList.add("input-error")
        guestsErrorEl.textContent = "Du behöver ange antal personer bokningen avser."

        isValid = false;
    }

    // Endast bordsbokning
    if (subjectEl.value === "table") {
        if (timeEl.value === ""){
            timeEl.classList.add("input-error")
            timeErrorEl.textContent = "Vänligen ange önskad tid"
            isValid = false;
        }
    }

    return isValid;
    
}


//  Hantera val av ämne 
function changeSubject() {
    const selectedSubject = subjectEl.value; 

    // Dölj alla dynamiska fält först
    bookingEl.classList.add("hidden");
    timeOptionEl.classList.add("hidden");
    timeInfoEl.classList.add("hidden");
    eventInfoEl.classList.add("hidden");

    if (selectedSubject === "table") {
        bookingEl.classList.remove("hidden")
        timeOptionEl.classList.remove("hidden")
        timeInfoEl.classList.remove("hidden")
    } else if (selectedSubject === "room") {
        bookingEl.classList.remove("hidden")
        eventInfoEl.classList.remove("hidden")
    }
}