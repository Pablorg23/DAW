function calcular2() {
    // Obtiene el valor del radio ingresado por el usuario y lo convierte a decimal.
    const radio = parseFloat(document.getElementById("radio").value);

    // Comprueba si el valor del radio es un número válido (no es NaN).
    if (!isNaN(radio)) {
        // Función interna para calcular la longitud de la circunferencia.
        function calcularLongitudCircunferencia(radio) {
            return 2 * Math.PI * radio;
        }

        // Función interna para calcular el área del círculo.
        function calcularAreaCirculo(radio) {
            return Math.PI * Math.pow(radio, 2);
        }

        // Calcula la longitud de la circunferencia y el área del círculo.
        const longitudCircunferencia = calcularLongitudCircunferencia(radio);
        const areaCirculo = calcularAreaCirculo(radio);

        // Muestra la longitud de la circunferencia y el área del círculo en la página web,
        // con dos decimales en el formato.
        document.getElementById("longitud").textContent = longitudCircunferencia.toFixed(2);
        document.getElementById("area").textContent = areaCirculo.toFixed(2);
    } else {
        // Si el radio no es un número válido, muestra un mensaje de alerta.
        alert("Por favor, ingresa un radio válido.");
    }
}
