// Funciones para los ejercicios

// Ejercicio 20
function determinarCuatrimestre() {
    var fechaActual = new Date();
    var mes = fechaActual.getMonth() + 1;
    var cuatrimestre;
    if (mes >= 1 && mes <= 3) {
        cuatrimestre = 1;
    } else if (mes >= 4 && mes <= 6) {
        cuatrimestre = 2;
    } else if (mes >= 7 && mes <= 9) {
        cuatrimestre = 3;
    } else {
        cuatrimestre = 4;
    }
    alert('Estamos en el cuatrimestre ' + cuatrimestre);
}

// Ejercicio 22.1
function calcularPotenciaAlCubo() {
    var numero = prompt('Ingrese un número:');
    if (!isNaN(numero)) {
        numero = parseFloat(numero);
        var resultado = Math.pow(numero, 3);
        alert('El cubo de ' + numero + ' es: ' + resultado);
    } else {
        alert('Error: Ingrese un número válido.');
    }
}

// Ejercicio 22.2
function calcularRaizCuadrada() {
    var valor = prompt('Ingrese un número para calcular su raíz cuadrada:');
    if (!isNaN(valor) && valor >= 0) {
        valor = parseFloat(valor);
        var raizCuadrada = Math.sqrt(valor);
        alert('La raíz cuadrada de ' + valor + ' es: ' + raizCuadrada);
    } else {
        alert('Error: Ingrese un número válido y positivo.');
    }
}

// Ejercicio 23.1
function contarNombres() {
    var contador = 0;
    var nombre;
    do {
        nombre = prompt('Ingrese un nombre (o "Fin" para salir):');
        if (nombre.toLowerCase() !== 'fin') {
            contador++;
        }
    } while (nombre.toLowerCase() !== 'fin');
    alert('Se ingresaron ' + contador + ' nombres.');
}

// Ejercicio 23.2
function contarNombresSinCase() {
    var contador = 0;
    var nombre;
    do {
        nombre = prompt('Ingrese un nombre (o "Fin" para salir):');
        if (nombre.toLowerCase() !== 'fin') {
            contador++;
        }
    } while (nombre.toLowerCase() !== 'fin');
    alert('Se ingresaron ' + contador + ' nombres sin distinguir mayúsculas y minúsculas.');
}

// Ejercicio 23.3
function buscarStringClave() {
    var fuente = prompt('Ingrese una frase o texto (fuente):');
    var clave = prompt('Ingrese la clave a buscar:');
    var posicion = fuente.toLowerCase().indexOf(clave.toLowerCase());
    if (posicion !== -1) {
        alert('La clave fue encontrada en la posición ' + posicion + '.');
    } else {
        alert('La clave no fue encontrada.');
    }
}

// Ejercicio 23.4
function verificarPalindromo() {
    var palabra = prompt('Ingrese una palabra o texto para verificar si es un palíndromo:');
    var textoReverso = palabra.split('').reverse().join('');
    if (palabra.toLowerCase() === textoReverso.toLowerCase()) {
        alert('La palabra/texto es un palíndromo.');
    } else {
        alert('La palabra/texto no es un palíndromo.');
    }
}

// Ejercicio 23.7
function mostrarPalabrasEnLineas() {
    var oracion = prompt('Ingrese una oración por teclado:');
    var palabras = oracion.split(' ');
    for (var i = 0; i < palabras.length; i++) {
        alert(palabras[i]);
    }
}

// Ejercicio 34
function abrirVentana() {
    window.open('', '_blank', 'width=600,height=300');
}

// Ejercicio 35
function abrirWebmail() {
    var num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            window.location.href = 'http://www.hotmail.com';
            break;
        case 1:
            window.location.href = 'http://www.gmail.com';
            break;
        case 2:
            window.location.href = 'http://www.yahoo.com';
            break;
        default:
            alert('Error: Valor aleatorio no reconocido.');
    }
}

// Ejercicio 37
function ventanaAnchoCompleto() {
    window.open('', '_blank', 'width=' + screen.width + ',height=' + (screen.height / 2));
}

// Ejercicio 38
function verificarCookies() {
    if (navigator.cookieEnabled) {
        alert('Las cookies están activadas en tu navegador.');
    } else {
        alert('Las cookies no están activadas en tu navegador.');
    }
}
