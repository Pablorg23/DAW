// Esta función realiza una serie de operaciones matemáticas basadas en el número ingresado por el usuario
function contadores() {
    // Obtiene el valor del número ingresado por el usuario y lo convierte a decimal.
    var numero = parseFloat(document.getElementById("numero").value);

    // Realiza operaciones matemáticas en función del número ingresado.
    var contador1 = numero + 5; // Suma 5 al número ingresado.
    var contador2 = contador1 + 21; // Suma 21 al resultado anterior.
    var contador3 = contador2 - 4; // Resta 4 al resultado anterior.

    // Muestra los resultados en elementos HTML.
    document.getElementById("numeroIntroducido").textContent = numero; // Muestra el número introducido.
    document.getElementById("contador1").textContent = contador1; // Muestra el resultado de la primera operación.
    document.getElementById("contador2").textContent = contador2; // Muestra el resultado de la segunda operación.
    document.getElementById("contador3").textContent = contador3; // Muestra el resultado de la tercera operación.
}
