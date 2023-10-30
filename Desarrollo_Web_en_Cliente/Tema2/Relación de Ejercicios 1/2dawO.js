// Esta función calcula el producto de los números ingresados por el usuario, excluyendo el valor 9999.
function calcularProducto() {
    // Inicializa una variable 'producto' con 1 para almacenar el producto.
    var producto = 1;

    // Obtiene una referencia al elemento con el ID "resultado" en el HTML.
    var resultadoElement = document.getElementById("resultado");
    
    // Inicia un bucle 'while' que se ejecutará indefinidamente hasta que se rompa explícitamente.
    while (true) {
        // Solicita al usuario que ingrese un número y lo convierte a un entero.
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        // Comprueba si el número ingresado es igual a 9999.
        if (numero === 9999) {
            // Si el número es igual a 9999, muestra el producto de los números ingresados (excluyendo 9999) en el elemento "resultado".
            resultadoElement.textContent = "Producto de los números introducidos (excluyendo 9999): " + producto;
            
            // Rompe el bucle 'while' para finalizar la ejecución de la función.
            break;
        } else {
            // Si el número no es igual a 9999, multiplica el número actual por el producto acumulado.
            producto *= numero;
        }
    }
}
