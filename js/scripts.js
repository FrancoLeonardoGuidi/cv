function mostrarOcultar(id) {
    var contenido = document.getElementById(id);
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}
