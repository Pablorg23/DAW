function convertir2() {
    
    var numeroBase8 = document.getElementById("numero").value;

    var base10 = parseInt(numeroBase8, 8);

    var base2 = decimalaBinary(base10);

    // Mostrar los resultados
    document.getElementById("base10").textContent = base10;
    document.getElementById("base2").textContent = base2;
}