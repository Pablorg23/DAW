function calcularProducto() {
    var producto = 1;
    var resultadoElement = document.getElementById("resultado");
    
    while (true) {
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        if (numero === 9999) {
            resultadoElement.textContent = "Producto de los números introducidos (excluyendo 9999): " + producto;
            break;
        } else {
            producto *= numero;
        }
    }
}