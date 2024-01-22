var numero;
var contadorParaArray = -1;
var array = [];

function esUnNumero() {
    numero = document.getElementById("miNumero").value;

    // si quito el parse no funciona y nose por que.
    if (!isNaN(numero)) {
        contadorParaArray++;
        array[contadorParaArray] = parseInt(numero);
    }
}

function encontrarNumeroMayor() {
    if (array.length > 0) {
        var numeroMax = array[0];

        for (var i = 1; i < array.length; i++) {
            if (array[i] > numeroMax) {
                numeroMax = array[i];
            }
        }

        alert("El numero mas grande es: " + numeroMax);
        console.log(array);
    } else {
        alert("El array está vacío. Añade números primero.");
    }
}


