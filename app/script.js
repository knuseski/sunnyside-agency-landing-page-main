document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementsByClassName("toggle");
    const navMenu = document.getElementsByClassName("nav-menu");
    toggle[0].addEventListener("click", function () {
        navMenu[0].classList.toggle("active");
    });
});

