// Esta función muestra información sobre el usuario en una ventana emergente.
function mostrarInformacion() {
    // Obtiene el valor de la edad ingresada por el usuario y lo convierte a un número de punto flotante (decimal).
    const edad = parseFloat(document.getElementById("Edad").value);

    // Obtiene el valor del nombre ingresado por el usuario.
    const Nombre = document.getElementById("Nombre").value;

    // Calcula la edad en días multiplicando la edad por 365.
    const edadEnDias = edad * 365;

    // Muestra una alerta en la ventana del navegador con el nombre y la edad en días del usuario.
    window.alert("Tu nombre es " + Nombre + " y tu edad en días es de " + edadEnDias);
}
