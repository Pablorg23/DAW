function convertir() {
    var numero = parseInt(document.getElementById("numero").value);

    // Convertir a base 16 
    var base16 = decimalToHexadecimal(numero);

    // Convertir a base 5
    var base5 = decimalToBase5(numero);

    // Mostrar los resultados
    document.getElementById("base16").textContent = base16;
    document.getElementById("base5").textContent = base5;
}