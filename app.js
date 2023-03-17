$(document).ready(function () {
    $('#proyectos-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

const toggleTheme = document.querySelector("#toggle-theme");
const body = document.querySelector("body");

toggleTheme.addEventListener("click", () => {
    body.classList.toggle("dark");
});

function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector("header");
    const toggle = document.querySelector("#dark-mode-toggle");
  
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) {
      toggle.innerHTML = "Light Mode";
    } else {
      toggle.innerHTML = "Dark Mode";
    }
  }
  