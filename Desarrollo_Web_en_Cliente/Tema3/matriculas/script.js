// Función para contar los dígitos
function contarDigitos(num) {
    let cuenta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (num > 0) {
        let digito = num % 10;
        cuenta[digito]++;
        num = Math.floor(num / 10);
    }
    return cuenta;
}

// Función para verificar las condiciones
function verificarNumero(num) {
    let cuenta = contarDigitos(num);
    let figuras = {
        'Doble pareja': false,
        'Trios': false,
        'Escalera simple': false,
        'Escalera completa': false,
        'Poker': false
    };

    // Verificar doble pareja, trios y poker
    let parejas = 0, trios = 0, poker = 0;
    for (let i = 0; i < 10; i++) {
        if (cuenta[i] == 2) parejas++;
        if (cuenta[i] == 3) trios++;
        if (cuenta[i] == 4) poker++;
    }
    if (parejas == 2) figuras['Doble pareja'] = true;
    if (trios == 1) figuras['Trios'] = true;
    if (poker == 1) figuras['Poker'] = true;

    // Verificar escaleras
    for (let i = 0; i < 7; i++) {
        if (cuenta[i] > 0 && cuenta[i+1] > 0 && cuenta[i+2] > 0) {
            figuras['Escalera simple'] = true;
            if (cuenta[i+3] > 0) {
                figuras['Escalera completa'] = true;
            }
        }
    }

    return figuras;
}

// Función para mostrar los resultados
function mostrarResultados(num) {
    let figuras = verificarNumero(num);
    let resultado = '';
    for (let figura in figuras) {
        if (figuras[figura]) {
            resultado += figura + ', ';
        }
    }
    if (resultado == '') {
        resultado = 'Ninguna figura';
    } else {
        resultado = resultado.slice(0, -2);  // Eliminar la última coma y espacio
    }
    alert('El número ' + num + ' representa: ' + resultado);
}
// Función para manejar el evento del botón
function verificar() {
    let num = document.getElementById('txtNumero').value;
    if (num.length != 4 || isNaN(num)) {
        alert('Por favor, introduce un número de 4 cifras');
    } else {
        mostrarResultados(parseInt(num));
        // Incrementar el contador de matrículas correctas
        let vecesCorrectas = parseInt(getCookie('vecesCorrectas'));
        if (isNaN(vecesCorrectas)) vecesCorrectas = 0;
        setCookie('vecesCorrectas', vecesCorrectas + 1);
    }
}

// Funciones para manejar las cookies
function setCookie(name, value) {
    document.cookie = name + '=' + value + ';';
}

function getCookie(name) {
    let value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if (parts.length == 2) return parts.pop().split(';').shift();
}

// Función para mostrar las estadísticas
function mostrarEstadisticas() {
    // Leer la información de la cookie
    let vecesCorrectas = parseInt(getCookie('vecesCorrectas'));
    if (isNaN(vecesCorrectas)) vecesCorrectas = 0;

    // Calcular las posibilidades de cada figura
    let posibilidades = {
        'Doble pareja': 0,
        'Trios': 0,
        'Escalera simple': 0,
        'Escalera completa': 0,
        'Poker': 0
    };
    for (let num = 0; num < 10000; num++) {
        let figuras = verificarNumero(num);
        for (let figura in figuras) {
            if (figuras[figura]) posibilidades[figura]++;
        }
    }

    // Mostrar las estadísticas
    let estadisticas = 'Veces que has introducido un número correctamente: ' + vecesCorrectas + '<br>';
    for (let figura in posibilidades) {
        estadisticas += 'Posibilidades de ' + figura + ': ' + (posibilidades[figura] / 10000 * 100).toFixed(2) + '%<br>';
    }
    document.getElementById('estadisticas').innerHTML = estadisticas;
}

// Cerrar la ventana después de 10 segundos
function cerrarVentana() {
    setTimeout(function() { window.close(); }, 10000);
}

// Asignar los eventos a los botones
window.onload = function() {
    let btnVerificar = document.getElementById('btnVerificar');
    let btnEstadisticas = document.getElementById('btnEstadisticas');
    if (btnVerificar) {
        btnVerificar.addEventListener('click', verificar);
    }
    if (btnEstadisticas) {
        btnEstadisticas.addEventListener('click', function() {
            let win = window.open('secundaria.html', '_blank', 'width=400,height=300');
        });
    }
    if (window.location.pathname.endsWith('secundaria.html')) {
        mostrarEstadisticas();
        cerrarVentana();
    }
}