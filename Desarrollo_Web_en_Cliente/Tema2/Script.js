function crearRombo(filas) {
    let rombo = '';
    for (let i = 1; i <= filas; i++) {
        for (let j = 1; j <= filas - i; j++) {
            rombo += '&nbsp;&nbsp;'; // Espacios para la parte izquierda del rombo
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            rombo += '*';
        }
        rombo += '<br>';
    }
    for (let i = filas - 1; i >= 1; i--) {
        for (let j = 1; j <= filas - i; j++) {
            rombo += '&nbsp;&nbsp;'; // Espacios para la parte izquierda del rombo
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            rombo += '*';
        }
        rombo += '<br>';
    }
    document.getElementById('rombo').innerHTML = rombo;
}

crearRombo(6);
