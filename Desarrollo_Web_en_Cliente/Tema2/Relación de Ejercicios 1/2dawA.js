// Esta función realiza una resta entre dos números ingresados por el usuario y muestra el resultado en la página web.
function restarNumeros() {
    // Obtiene el valor del primer número ingresado por el usuario y lo convierte a decimal.
    const numero1 = parseFloat(document.getElementById("numero1").value);

    // Obtiene el valor del segundo número ingresado por el usuario y lo convierte a decimal.
    const numero2 = parseFloat(document.getElementById("numero2").value);

    // Realiza la operación de resta entre los dos números.
    const resultado = numero1 - numero2;

    // Muestra el resultado en un elemento de la página web con el ID "resultado".
    document.getElementById("resultado").textContent = resultado;
}
