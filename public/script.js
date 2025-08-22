document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        document.getElementById("menu-toggle").addEventListener("click", () => {
          document.getElementById("nav-links").classList.toggle("active");
    });

}
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks for reaching out! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const toggleBtn = document.getElementById("dark-mode-toggle");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // DARK MODE TOGGLE
    const enableDark = () => {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.innerText = "☀️";
    };

    const disableDark = () => {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        toggleBtn.innerText = "🌙";
    };

    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark")) {
            disableDark();
        } else {
            enableDark();
        }
    });

    // On load
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        enableDark();
    } else {
        disableDark();
    }
});

// SEARCH FILTER FUNCTIONALITY
const searchInput = document.getElementById("searchbar");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
            const title = card.dataset.title.toLowerCase();
            const content = card.innerText.toLowerCase();

            if (title.includes(query) || content.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

