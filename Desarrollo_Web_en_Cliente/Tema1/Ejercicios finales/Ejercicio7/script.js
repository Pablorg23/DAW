const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"];
let indiceActual = 0;

function cambiarImagen() {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    const imagen = document.getElementById("image");
    imagen.src = imagenes[indiceActual];
}
