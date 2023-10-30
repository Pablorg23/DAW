// Esta función realiza una suma de números ingresados por el usuario hasta que se ingrese el número 9999.
function sumarNumeros() {
    // Inicializa una variable para llevar un seguimiento de la suma total.
    var suma = 0;

    // Obtiene un elemento del documento con el ID "resultado".
    var resultadoElement = document.getElementById("resultado");

    // Inicia un bucle while que se ejecutará indefinidamente hasta que se use 'break'.
    while (true) {
        // Pide al usuario que ingrese un número y lo convierte a un entero.
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        // Comprueba si el número ingresado es igual a 9999.
        if (numero === 9999) {
            // Si es igual a 9999, muestra la suma de los números ingresados (excluyendo 9999) en el elemento con ID "resultado".
            resultadoElement.textContent = "Suma de los números introducidos (excluyendo 9999): " + suma;
            // Sale del bucle while.
            break;
        } else {
            // Si el número no es igual a 9999, lo suma al acumulador 'suma'.
            suma += numero;
        }
    }
}
