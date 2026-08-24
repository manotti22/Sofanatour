document.addEventListener("DOMContentLoaded", function () {

  // Aktuelles Jahr automatisch anzeigen
  const footer = document.querySelector("footer");

  if (footer) {
    footer.innerHTML = footer.innerHTML.replace(
      "© 2026",
      "© " + new Date().getFullYear()
    );
  }

});
