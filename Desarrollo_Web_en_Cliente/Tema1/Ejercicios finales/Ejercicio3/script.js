function comprobarRespuesta(respuesta, numeroPregunta) {
    const pregunta = document.querySelector(`.pregunta:nth-child(${numeroPregunta})`);
    const botones = pregunta.querySelectorAll("button");

    botones.forEach((boton) => {
        boton.disabled = true; // Desactiva los botones después de hacer clic en uno
    });

    if (respuesta) {
        pregunta.style.color = "green"; // Verde para respuesta correcta
    } else {
        pregunta.style.color = "red"; // Rojo para respuesta incorrecta
    }
}
