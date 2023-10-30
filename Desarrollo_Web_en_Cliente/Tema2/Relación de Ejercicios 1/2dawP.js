// Esta función calcula los múltiplos de 23 hasta que la multiplicación por 23 sea menor que 1000, 
// luego muestra los múltiplos y la suma total en un elemento con el ID "resultado".
function calcularMultiplos() {
    // Obtiene una referencia al elemento en el HTML con el ID "resultado".
    var resultadoElement = document.getElementById("resultado");
    
    // Inicializa una variable "suma" para llevar un seguimiento de la suma de los múltiplos.
    var suma = 0;

    // Inicia un bucle "for" con una variable "i" inicializada en 1.
    // El bucle continuará mientras la multiplicación de "i" por 23 sea menor que 1000.
    for (var i = 1; i * 23 < 1000; i++) {
        // Calcula el múltiplo de 23 para el valor actual de "i".
        var multiplo = i * 23;
        
        // Agrega el múltiplo al contenido del elemento "resultadoElement", seguido de un salto de línea.
        resultadoElement.textContent += multiplo + "\n";
        
        // Agrega el múltiplo actual a la suma total.
        suma += multiplo;
    }

    // Después de terminar el bucle, agrega un mensaje que muestra la suma total de los múltiplos.
    resultadoElement.textContent += "Suma de los múltiplos: " + suma;
}
