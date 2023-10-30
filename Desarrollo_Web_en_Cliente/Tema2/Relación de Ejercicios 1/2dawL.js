// Esta función calcula el producto de dos números ingresados por el usuario y muestra el resultado en la página web.
function calcularProductoL() {
    // Obtiene el valor del primer número ingresado por el usuario y lo convierte a un número entero.
    var numero1 = parseInt(document.getElementById("numero1").value);

    // Obtiene el valor del segundo número ingresado por el usuario y lo convierte a un número entero.
    var numero2 = parseInt(document.getElementById("numero2").value);

    // Obtiene una referencia al elemento en el HTML donde se mostrará el resultado.
    var resultadoElement = document.getElementById("resultado");

    // Comprueba las condiciones antes de realizar el cálculo.
    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0 || numero1 > 57 || numero2 > 57) {
        // Si alguna de las condiciones se cumple, se muestra un mensaje de error.
        resultadoElement.textContent = "Los números deben ser positivos y menores de 57.";
    } else {
        // Si las condiciones no se cumplen, se realiza la operación de multiplicación.
        var producto = numero1 * numero2;

        // Se muestra el resultado en el elemento de la página web.
        resultadoElement.textContent = "El producto de " + numero1 + " y " + numero2 + " es: " + producto;
    }
}
