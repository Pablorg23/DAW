function restarNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 - numero2;
    document.getElementById("resultado").textContent = resultado;
}
function dividirNumeros(){
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 / numero2;
    document.getElementById("resultado").textContent = resultado;

}
function mostrarInformacion(){
    const edad=parseFloat(document.getElementById("Edad").value);
    const Nombre=document.getElementById("Nombre").value;
    const edadEnDias=edad*365;
    window.alert("Tu nombre es "+Nombre+" y tu edad en dias es de "+edadEnDias);

}
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