function calcular2() {
    const radio = parseFloat(document.getElementById("radio").value);

    if (!isNaN(radio)) {
        function calcularLongitudCircunferencia(radio) {
            return 2 * Math.PI * radio;
        }

        function calcularAreaCirculo(radio) {
            return Math.PI * Math.pow(radio, 2);
        }

        const longitudCircunferencia = calcularLongitudCircunferencia(radio);
        const areaCirculo = calcularAreaCirculo(radio);

        document.getElementById("longitud").textContent = longitudCircunferencia.toFixed(2);
        document.getElementById("area").textContent = areaCirculo.toFixed(2);
    } else {
        alert("Por favor, ingresa un radio válido.");
    }
}