// Array para almacenar las tareas
var tareasArray = [];

function agregarTarea() {
    // Obtener el valor de la tarea del input
    var tarea = document.getElementById("tarea").value;

    // Validar que la tarea no esté vacía
    if (tarea.trim() === "") {
        alert("Por favor, introduce una tarea válida.");
        return;
    }

    // Agregar la tarea al array
    tareasArray.push(tarea);

    // Almacenar el array en una cookie
    document.cookie = "Tareas=" + JSON.stringify(tareasArray);

    // Limpiar el campo de entrada después de agregar la tarea
    document.getElementById("tarea").value = "";

    // Mostrar mensaje de éxito
    alert("Tarea agregada correctamente.");
}

function mostrarTareas() {
    // Obtener la cookie que contiene el array de tareas
    var cookieValue = getCookie("Tareas");

    // Validar si la cookie existe
    if (cookieValue) {
        // Parsear el valor de la cookie a un array
        tareasArray = JSON.parse(cookieValue);

        // Mostrar las tareas en un alert
        alert("Tareas almacenadas:\n" + tareasArray.join("\n"));
    } else {
        alert("No hay tareas almacenadas.");
    }
}

// Función auxiliar para obtener el valor de una cookie por su nombre
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split('=');
        if (cookie[0].trim() === name) {
            return cookie[1];
        }
    }
    return null;
}

