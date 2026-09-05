// ==========================================
// CLASS 10 NCERT MATHS WEBSITE
// script.js
// ==========================================


// ------------------------------------------
// 1. SEARCH CHAPTERS, FORMULAS & EXAMPLES
// ------------------------------------------

const searchBox = document.getElementById("search");
const cards = document.querySelectorAll(".card");

if (searchBox) {
    searchBox.addEventListener("input", function () {

        const searchText = searchBox.value.toLowerCase().trim();

        cards.forEach(function (card) {

            const cardText = card.innerText.toLowerCase();
            const keywords = card.dataset.search
                ? card.dataset.search.toLowerCase()
                : "";

            if (
                searchText === "" ||
                cardText.includes(searchText) ||
                keywords.includes(searchText)
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });
    });
}


// ------------------------------------------
// 2. SHOW ALL CHAPTERS
// ------------------------------------------

function clearSearch() {

    if (!searchBox) return;

    searchBox.value = "";

    cards.forEach(function (card) {
        card.classList.remove("hidden");
    });

    searchBox.focus();
}


// ------------------------------------------
// 3. SEARCH USING ENTER KEY
// ------------------------------------------

if (searchBox) {

    searchBox.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            const visibleCard = Array.from(cards).find(function (card) {
                return !card.classList.contains("hidden");
            });

            if (visibleCard) {

                visibleCard.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        }

    });

}


// ------------------------------------------
// 4. NAVIGATION SECTION HIGHLIGHT
// ------------------------------------------

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navin a");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navLinks.forEach(function (link) {

                    const target = link.getAttribute("href");

                    if (target === "#" + entry.target.id) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }

                });

            }

        });

    }, {
        threshold: 0.25
    });


    sections.forEach(function (section) {
        observer.observe(section);
    });

}


// ------------------------------------------
// 5. BACK TO TOP BUTTON
// ------------------------------------------

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.title = "Back to top";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#4f46e5";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ------------------------------------------
// 6. PAGE LOADED MESSAGE
// ------------------------------------------

console.log("Class 10 NCERT Maths website loaded successfully!");
