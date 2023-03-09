function mostrarOcultar(id) {
    let contenido = document.getElementById(id);
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}

function reproducirAudio() {
    let audio = document.getElementById("parlante");
    let image = document.getElementsByTagName("img")[0];

    if (audio.paused) {
        audio.play();
        image.src = "media/images/volume-high-solid.svg";
    } else {
        audio.pause();
        image.src = "media/images/volume-xmark-solid.svg";
    }
}