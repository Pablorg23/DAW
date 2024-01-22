// Función para aumentar el tamaño del borde
function aumentarBorde() {
    var tabla = document.getElementById("tabla1");
    var bordeActual = parseInt(tabla.border);
    tabla.border = bordeActual + 1;
 }
 
 // Función para disminuir el tamaño del borde
 function disminuirBorde() {
    var tabla = document.getElementById("tabla1");
    var bordeActual = parseInt(tabla.border);
    if (bordeActual > 0) {
       tabla.border = bordeActual - 1;
    }
 }
 
 // Función para mostrar el tamaño del borde mediante un alert
 function mostrarTamañoBorde() {
    var tabla = document.getElementById("tabla1");
    var bordeActual = parseInt(tabla.border);
    alert("El tamaño actual del borde es: " + bordeActual);
 }
 
 // Función para restaurar el valor original del borde
 function restaurarValorOriginal() {
    var tabla = document.getElementById("tabla1");
    tabla.border = 2; // Valor original
 }
 
 