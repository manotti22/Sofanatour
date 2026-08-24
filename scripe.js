
function toggleRoute(id) {
  const route = document.getElementById(id);

  if (route.classList.contains("active")) {
    route.classList.remove("active");
  } else {
    route.classList.add("active");
  }
}
