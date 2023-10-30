// Esta función se encarga de convertir un número en base 8 a su equivalente en base 10 y base 2.
function convertir2() {
    // Obtiene el valor ingresado por el usuario en un campo de entrada de texto con el id "numero".
    var numeroBase8 = document.getElementById("numero").value;

    // Convierte el número en base 8 a su equivalente en base 10 utilizando la función parseInt() con una base de 8.
    var base10 = parseInt(numeroBase8, 8);

    // Llama a una función llamada decimalaBinary() para convertir el número en base 10 a base 2.

    var base2 = decimalaBinary(base10);

    // Muestra los resultados en la página web.
    document.getElementById("base10").textContent = base10; // Muestra el valor en base 10.
    document.getElementById("base2").textContent = base2;   // Muestra el valor en base 2.
}
