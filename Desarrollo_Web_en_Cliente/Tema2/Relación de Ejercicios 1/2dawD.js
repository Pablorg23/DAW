// Esta función realiza cálculos basados en un número ingresado por el usuario y muestra los resultados en un cuadro de alerta.

function calcular() {
    // Obtiene el valor del número ingresado por el usuario y lo convierte a un número de punto flotante.
    const numeroIngresado = parseFloat(document.getElementById("numero").value);

    // Comprueba si el valor ingresado es un número válido (no es NaN).
    if (!isNaN(numeroIngresado)) {
        // Calcula el doble, el triple y el cuádruple del número ingresado.
        const doble = numeroIngresado * 2;
        const triple = numeroIngresado * 3;
        const cuadruple = numeroIngresado * 4;

        // Crea una cadena de texto que incluye los resultados calculados.
        const resultado = `El doble es: ${doble}, el triple es: ${triple}, el cuádruple es: ${cuadruple}`;
        
        // Muestra los resultados en un cuadro de alerta.
        alert(resultado);
    } else {
        // Si el valor ingresado no es un número válido, muestra un mensaje de error en un cuadro de alerta.
        alert("Por favor, ingresa un número válido.");
    }
}
