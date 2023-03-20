
document.addEventListener("DOMContentLoaded", function () { 
    document.getElementById("btn-burger").addEventListener("click", function () {
        document.querySelector(".header__menu").classList.toggle("open");
    });
})