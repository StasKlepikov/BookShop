document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-shopping-cart").addEventListener("click", function () {
        document.querySelector(".header__shopping-menu").classList.toggle("open");
    });
});

document.getElementById("btn-back").addEventListener("click", function () {
    document.querySelector(".header__shopping-menu").classList.toggle("open");
});