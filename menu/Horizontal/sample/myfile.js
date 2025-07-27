var document;

// Toggle Menu
document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var toggle, menu;
    toggle = document.querySelector(".menu-toggle");
    menu = document.querySelector(".menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
        toggle.classList.toggle("active");
    });
});
