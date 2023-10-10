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
function calcular2() {

    var radio = parseFloat(document.getElementById("radio").value);
    
    var longitud = 2 * Math.PI * radio;
    
    var area = Math.PI * Math.pow(radio, 2);
    
    document.getElementById("longitud").textContent = longitud.toFixed(2);
    document.getElementById("area").textContent = area.toFixed(2);
}

function contadores() {
    var numero = parseFloat(document.getElementById("numero").value);
    
    var contador1 = numero + 5;
    var contador2 = contador1 + 21;
    var contador3 = contador2 - 4;
    
    // Mostrar los resultados
    document.getElementById("numeroIntroducido").textContent = numero;
    document.getElementById("contador1").textContent = contador1;
    document.getElementById("contador2").textContent = contador2;
    document.getElementById("contador3").textContent = contador3;
}
function convertir() {
    var numero = parseInt(document.getElementById("numero").value);

    // Convertir a base 16 
    var base16 = decimalToHexadecimal(numero);

    // Convertir a base 5
    var base5 = decimalToBase5(numero);

    // Mostrar los resultados
    document.getElementById("base16").textContent = base16;
    document.getElementById("base5").textContent = base5;
}
//estas 2 siguientes funciones las he buscado en internet por que no era capaz de hacerlas.

function decimalaBase5(decimal) {
    var base5 = "";
    while (decimal > 0) {
        var resto = decimal % 5;
        base5 = resto.toString() + base5;
        decimal = Math.floor(decimal / 5);
    }
    return base5 || "0";
}

function decimalaHexadecimal(decimal) {
    var hexadecimal = "";
    while (decimal > 0) {
        var resto = decimal % 16;
        // Convertir los restos mayores a 9 en letras A-F
        if (resto >= 10) {
            hexadecimal = String.fromCharCode(65 + (resto - 10)) + hexadecimal;
        } else {
            hexadecimal = resto.toString() + hexadecimal;
        }
        decimal = Math.floor(decimal / 16);
    }
    return hexadecimal || "0";
}
function convertir2() {
    
    var numeroBase8 = document.getElementById("numero").value;

    var base10 = parseInt(numeroBase8, 8);

    var base2 = decimalaBinary(base10);

    // Mostrar los resultados
    document.getElementById("base10").textContent = base10;
    document.getElementById("base2").textContent = base2;
}

function decimalaBinario(decimal) {
    return decimal.toString(2);
}
function calcularBases() {
    // Obtener el número entero introducido por el usuario
    var numero = parseInt(document.getElementById("numero").value);

    // Obtener la base seleccionada
    var base = parseInt(document.getElementById("base").value);

    // Calcular la representación en la base seleccionada
    var resultado = "";

    switch (base) {
        case 2:
            resultado = numero.toString(2);
            break;
        case 8:
            resultado = numero.toString(8);
            break;
        case 16:
            resultado = numero.toString(16).toUpperCase(); // En mayúsculas
            break;
        default:
            resultado = "Selecciona una base válida";
    }

    // Mostrar el resultado en el párrafo
    document.getElementById("resultado").textContent = resultado;
}
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

function contarNumeros() {
    var contador = 0;

    var resultadoElement = document.getElementById("resultado");
    
    while (true) {
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        if (numero === 9999) {
            resultadoElement.textContent = "Número de números introducidos: " + contador;
            break;
        } else {
            contador++;
        }
    }
}
function sumarNumeros() {
 
    var suma = 0;
    var resultadoElement = document.getElementById("resultado");
    
    while (true) {
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        if (numero === 9999) {
            resultadoElement.textContent = "Suma de los números introducidos (excluyendo 9999): " + suma;
            break;
        } else {
            suma += numero;
        }
    }
}


function calcularProducto() {
    var producto = 1;
    var resultadoElement = document.getElementById("resultado");
    
    while (true) {
        var numero = parseInt(prompt("Introduce un número (9999 para terminar):"));
        
        if (numero === 9999) {
            resultadoElement.textContent = "Producto de los números introducidos (excluyendo 9999): " + producto;
            break;
        } else {
            producto *= numero;
        }
    }
}
function calcularMultiplos() {
    var resultadoElement = document.getElementById("resultado");
    var suma = 0;

    for (var i = 1; i * 23 < 1000; i++) {
        var multiplo = i * 23;
        suma += multiplo;
        resultadoElement.textContent += multiplo + "\n";
    }

    resultadoElement.textContent += "Suma de los múltiplos: " + suma;
}




