function calcularMultiplos() {
    var resultadoElement = document.getElementById("resultado");
    var suma = 0;

    for (var i = 1; i * 23 < 1000; i++) {
        var multiplo = i * 23;
        suma += multiplo;
        resultadoElement.textContent += multiplo + "\n";
    }

    resultadoElement.textContent += "Suma de los múltiplos: " + suma;
}

