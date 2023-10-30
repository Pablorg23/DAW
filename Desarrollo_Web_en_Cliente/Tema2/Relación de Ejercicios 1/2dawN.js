function sumarNumeros() {
 
    var suma = 0;
    var resultadoElement = document.getElementById("resultado");
    
    while (true) {
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        if (numero === 9999) {
            resultadoElement.textContent = "Suma de los números introducidos (excluyendo 9999): " + suma;
            break;
        } else {
            suma += numero;
        }
    }
}