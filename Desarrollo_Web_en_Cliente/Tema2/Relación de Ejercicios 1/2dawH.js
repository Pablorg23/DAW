// Esta función se encarga de convertir un número decimal ingresado por el usuario
// en las bases 16 y 5, y luego muestra los resultados en la página web.
function convertir() {
    // Obtiene el valor del número decimal ingresado por el usuario.
    var numero = parseInt(document.getElementById("numero").value);

    // Convertir a base 16
    var base16 = decimalToHexadecimal(numero);

    // Convertir a base 5
    var base5 = decimalToBase5(numero);

    // Muestra los resultados en elementos HTML con los IDs "base16" y "base5".
    document.getElementById("base16").textContent = base16;
    document.getElementById("base5").textContent = base5;
}
