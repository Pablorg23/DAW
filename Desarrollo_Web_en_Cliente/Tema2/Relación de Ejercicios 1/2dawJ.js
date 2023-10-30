function calcularBases() {
    // Obtener el número entero introducido por el usuario
    var numero = parseInt(document.getElementById("numero").value);

    // Obtener la base seleccionada
    var base = parseInt(document.getElementById("base").value);

    // Calcular la representación en la base seleccionada
    var resultado = "";

    switch (base) {
        case 2:
            resultado = numero.toString(2);
            break;
        case 8:
            resultado = numero.toString(8);
            break;
        case 16:
            resultado = numero.toString(16).toUpperCase(); // En mayúsculas
            break;
        default:
            resultado = "Selecciona una base válida";
    }

    // Mostrar el resultado en el párrafo
    document.getElementById("resultado").textContent = resultado;
}