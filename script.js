// ========================================
// START BUTTON
// ========================================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    document.getElementById("song").scrollIntoView({
        behavior: "smooth"
    });

});


// ========================================
// INTERACTIVE MESSAGE
// ========================================

const messageButton = document.getElementById("changeMessage");

const messageText = document.getElementById("messageText");

const messages = [
    "READY TO MOVE ON?",
    "LEAVE THE PAST BEHIND.",
    "YOUR NEXT CHAPTER STARTS NOW.",
    "KEEP MOVING FORWARD.",
    "NEW BEGINNING. NEW ENERGY.",
    "MISS MOVIN' ON."
];

let messageIndex = 0;

messageButton.addEventListener("click", function () {

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    messageText.style.transform = "scale(0.8)";
    messageText.style.opacity = "0";

    setTimeout(function () {

        messageText.textContent = messages[messageIndex];

        messageText.style.transform = "scale(1)";
        messageText.style.opacity = "1";

    }, 200);

});


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "75px";

        navLinks.style.right = "20px";

        navLinks.style.padding = "25px";

        navLinks.style.background = "#160020";

        navLinks.style.border = "1px solid #35194a";

    }

});


// ========================================
// NAVIGATION SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// SCROLL REVEAL
// ========================================

const cards = document.querySelectorAll(
    ".meaning-card, .member, .fact, .song-card"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});
