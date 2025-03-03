document.addEventListener("DOMContentLoaded", function() {
    // Cambiar color al hacer clic en una categoría
    const menuLinks = document.querySelectorAll(".menu-link");

    menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        menuLinks.forEach(item => item.style.color = "white"); // Restaurar color
        this.style.color = "#ffd700"; // Cambiar color del clic
    });
});
});

