function toggleRoute(id) {
  const route = document.getElementById(id);

  if (route) {
    route.classList.toggle("active");
  }
}
