// Esta función realiza la resta de dos números ingresados por el usuario y muestra el resultado en la página.

function restarNumeros() {
    // Obtiene el valor del primer número ingresado por el usuario desde el campo de entrada con el ID "numero1".
    const numero1 = parseFloat(document.getElementById("numero1").value);

    // Obtiene el valor del segundo número ingresado por el usuario desde el campo de entrada con el ID "numero2".
    const numero2 = parseFloat(document.getElementById("numero2").value);

    // Realiza la resta de los dos números obtenidos en los pasos anteriores y almacena el resultado en la variable "resultado".
    const resultado = numero1 - numero2;

    // Actualiza el contenido del elemento en la página web con el ID "resultado" para mostrar el resultado de la resta.
    document.getElementById("resultado").textContent = resultado;
}
