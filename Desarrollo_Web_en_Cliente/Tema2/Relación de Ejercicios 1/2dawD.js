function calcular() {

    const numeroIngresado = parseFloat(document.getElementById("numero").value);

    if (!isNaN(numeroIngresado)) {
        const doble = numeroIngresado * 2;
        const triple = numeroIngresado * 3;
        const cuadruple = numeroIngresado * 4;

        const resultado = `El doble es: ${doble}, el triple es: ${triple}, el cuádruple es: ${cuadruple}`;
        
        alert(resultado);
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}