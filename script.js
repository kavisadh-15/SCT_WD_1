// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// Close menu when clicking a navigation link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


// =========================
// DESTINATION DETAILS
// =========================

function showDestination(destination) {

    if (destination === "Paris") {

        alert(
            "Paris 🇫🇷\n\n" +
            "Explore the Eiffel Tower, Louvre Museum " +
            "and beautiful Paris streets."
        );

    }

    else if (destination === "Maldives") {

        alert(
            "Maldives 🏝️\n\n" +
            "Enjoy beautiful beaches, clear water " +
            "and amazing island resorts."
        );

    }

    else if (destination === "India") {

        alert(
            "India 🇮🇳\n\n" +
            "Discover India's culture, heritage, food " +
            "and beautiful tourist destinations."
        );

    }

}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }


    alert(
        "Thank you, " + name +
        "! Your message has been submitted successfully."
    );


    contactForm.reset();

});