function contarNumeros() {
    var contador = 0;

    var resultadoElement = document.getElementById("resultado");
    
    while (true) {
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        if (numero === 9999) {
            resultadoElement.textContent = "Número de números introducidos: " + contador;
            break;
        } else {
            contador++;
        }
    }
}