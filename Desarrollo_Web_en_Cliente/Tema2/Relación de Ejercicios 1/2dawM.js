// Esta función cuenta cuántos números introduce el usuario hasta que ingrese el número 9999.
function contarNumeros() {
    // Inicializa un contador para llevar la cuenta de los números ingresados.
    var contador = 0;

    // Obtiene una referencia al elemento HTML con el ID "resultado" para mostrar el resultado.
    var resultadoElement = document.getElementById("resultado");
    
    // Inicia un bucle while que se ejecutará indefinidamente hasta que se rompa explícitamente.
    while (true) {
        // Solicita al usuario que ingrese un número y lo convierte a entero.
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        // Comprueba si el número ingresado es igual a 9999.
        if (numero === 9999) {
            // Si es igual a 9999, muestra el resultado (cantidad de números ingresados) en la página.
            resultadoElement.textContent = "Número de números introducidos: " + contador;
            break;  // Rompe el bucle while para finalizar la ejecución.
        } else {
            // Si no es igual a 9999, incrementa el contador de números ingresados.
            contador++;
        }
    }
}
