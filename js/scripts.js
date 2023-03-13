function mostrarOcultar(id) {
    let contenido = document.getElementById(id);
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        contenido.style.opacity = "1";
    } else {
        contenido.style.display = "none";
        contenido.style.opacity = "0";
    }
}

function reproducirAudio() {
    let audio = document.getElementById("parlante");
    let image = document.getElementsByTagName("img")[1];

    if (audio.paused) {
        audio.play();
        image.src = "media/images/volume-high-solid.svg";
    } else {
        audio.pause();
        image.src = "media/images/volume-xmark-solid.svg";
    }
}