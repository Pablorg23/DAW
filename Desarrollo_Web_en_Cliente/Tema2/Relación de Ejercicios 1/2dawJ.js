// Esta función calcula la representación de un número en una base seleccionada por el usuario.

function calcularBases() {
    // Obtener el número entero introducido por el usuario
    var numero = parseInt(document.getElementById("numero").value);

    // Obtener la base seleccionada
    var base = parseInt(document.getElementById("base").value);

    // Inicializar una variable para almacenar el resultado
    var resultado = "";

    // Utiliza una estructura switch para determinar la base y calcular la representación adecuada
    switch (base) {
        case 2:
            // Si la base seleccionada es 2, convierte el número en binario.
            resultado = numero.toString(2);
            break;
        case 8:
            // Si la base seleccionada es 8, convierte el número en octal.
            resultado = numero.toString(8);
            break;
        case 16:
            // Si la base seleccionada es 16, convierte el número en hexadecimal y lo convierte en mayúsculas.
            resultado = numero.toString(16).toUpperCase();
            break;
        default:
            // Si se selecciona una base que no es 2, 8 ni 16, muestra un mensaje de error.
            resultado = "Selecciona una base válida";
    }

    // Mostrar el resultado en un elemento HTML con el ID "resultado"
    document.getElementById("resultado").textContent = resultado;
}
