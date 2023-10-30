function calcularProductoL() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultadoElement = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0 || numero1 > 57 || numero2 > 57) {
        resultadoElement.textContent = "Los números deben ser positivos y menores de 57.";
    } else {
        var producto = numero1 * numero2;
        resultadoElement.textContent = "El producto de " + numero1 + " y " + numero2 + " es: " + producto;
    }
}