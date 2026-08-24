
function toggleRoute(id) {
  alert("Die Funktion funktioniert! Route: " + id);

  const route = document.getElementById(id);

  if (route) {
    route.classList.toggle("active");
  }
}
