// SOFANA TOUR - Website Funktionen

document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scrolling für Menüpunkte
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Mobile Menü
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });
    }

    // Menü nach Klick schließen
    document.querySelectorAll(".navigation a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (navigation) {
                navigation.classList.remove("active");
            }
        });
    });

    // Aktuelles Jahr automatisch einsetzen
    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // WhatsApp Buttons
    document.querySelectorAll(".whatsapp-button").forEach(function (button) {
        button.addEventListener("click", function () {
            const message = encodeURIComponent(
                "Hallo Sofana Tour, ich interessiere mich für eine Marokko-Reise. Bitte senden Sie mir weitere Informationen."
            );

            window.open(
                "https://wa.me/212622540528?text=" + message,
                "_blank"
            );
        });
    });

    // Animation beim Scrollen
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });

});
