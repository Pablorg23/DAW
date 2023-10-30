// Esta función calcula el área de un triángulo cuando el usuario proporciona la base y la altura.

function calcularArea() {
    var a, b; // Declara dos variables, 'a' para la base y 'b' para la altura.

    // Pide al usuario que ingrese el valor de la base y lo almacena en la variable 'a'.
    a = prompt("Escribe la base:");

    // Pide al usuario que ingrese el valor de la altura y lo almacena en la variable 'b'.
    b = prompt("Escribe la altura:");

    // Calcula el área del triángulo utilizando la fórmula: área = (base * altura) / 2.
    var area = a * b / 2;

    // Muestra un mensaje emergente (alert) que incluye el valor calculado del área.
    alert("Área = " + area);
}
