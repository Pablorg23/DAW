document.addEventListener("DOMContentLoaded", function () {
  // Obtención de elementos del DOM
  var campoNombre = document.getElementById("nombre");
  var campoApellidos = document.getElementById("apellidos");
  var campoEdad = document.getElementById("edad");
  var campoNIF = document.getElementById("nif");
  var campoEmail = document.getElementById("email");
  var campoProvincia = document.getElementById("provincia");
  var campoFecha = document.getElementById("fecha");
  var campoTelefono = document.getElementById("telefono");
  var campoHora = document.getElementById("hora");
  var contenedorErrores = document.getElementById("errores");

  // Event listener para el evento blur en campoNombre
  campoNombre.addEventListener("blur", function () {
    convertirAMayusculas(campoNombre);
    validarNombre();
  });

  // Event listener para el evento blur en campoApellidos
  campoApellidos.addEventListener("blur", function () {
    convertirAMayusculas(campoApellidos);
    validarApellidos();
  });

  // Event listener para el evento blur en campoEdad
  campoEdad.addEventListener("blur", function () {
    validarEdad();
  });

  // Event listener para el evento blur en campoNIF
  campoNIF.addEventListener("blur", function () {
    validarNIF();
  });

  // Event listener para el evento blur en campoEmail
  campoEmail.addEventListener("blur", function () {
    validarEmail();
  });

  // Event listener para el evento blur en campoProvincia
  campoProvincia.addEventListener("blur", function () {
    validarProvincia();
  });

  // Event listener para el evento blur en campoFecha
  campoFecha.addEventListener("blur", function () {
    validarFecha();
  });

  // Event listener para el evento blur en campoTelefono
  campoTelefono.addEventListener("blur", function () {
    validarTelefono();
  });

  // Event listener para el evento blur en campoHora
  campoHora.addEventListener("blur", function () {
    validarHora();
  });

  // Event listener para el evento submit del formulario
  document.getElementById("formulario").addEventListener("submit", function (evento) {
    if (!confirm("¿Estás seguro de enviar el formulario?")) {
      evento.preventDefault();
    } else {
      if (!validarFormulario()) {
        evento.preventDefault();
      }
    }
  });

  // Función para convertir a mayúsculas el valor de un campo
  function convertirAMayusculas(input) {
    input.value = input.value.toUpperCase();
  }

  // Función de validación para el campo de teléfono
  function validarTelefono() {
    var valorTelefono = campoTelefono.value.trim();
    var regexTelefono = /^\d{9}$/;

    if (!regexTelefono.test(valorTelefono)) {
      mostrarError("Formato de TELÉFONO incorrecto. Debe contener 9 dígitos", campoTelefono);
    }
  }

  // Event listener para el evento blur en campoHora (segunda vez)
  campoHora.addEventListener("blur", function () {
    var valorHora = campoHora.value.trim();
    var regexHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    if (!regexHora.test(valorHora)) {
      mostrarError("Formato de HORA incorrecto. Debe seguir el patrón hh:mm", campoHora);
    }
  });

  // Función para mostrar un mensaje de error
  function mostrarError(mensaje, input) {
    contenedorErrores.textContent = mensaje;
    input.classList.add("error");
    input.focus();
  }

  // Función para mostrar un mensaje de éxito
  function mostrarExito(mensaje) {
    var contenedorExito = document.getElementById("mensajes");
    contenedorExito.textContent = mensaje;
  }

  // Función de validación para el campo de nombre
  function validarNombre() {
    if (campoNombre.value.trim() === "") {
      mostrarError("Nombre no puede estar vacío", campoNombre);
    }
  }

  // Función de validación para el campo de apellidos
  function validarApellidos() {
    if (campoApellidos.value.trim() === "") {
      mostrarError("Apellidos no pueden estar vacíos", campoApellidos);
    }
  }

  // Función de validación para el campo de edad
  function validarEdad() {
    var valorEdad = campoEdad.value.trim();
    if (!/^\d+$/.test(valorEdad) || parseInt(valorEdad) < 0 || parseInt(valorEdad) > 105) {
      mostrarError("Edad debe contener valores numéricos entre 0 y 105", campoEdad);
    }
  }

  // Función de validación para el campo de NIF
  function validarNIF() {
    var valorNIF = campoNIF.value.trim();
    var regexNIF = /^\d{8}-[A-Z]$/;

    if (!regexNIF.test(valorNIF)) {
      mostrarError("Formato de NIF incorrecto. Debe ser 8 números, un guión y una letra", campoNIF);
    }
  }

  // Función de validación para el campo de email
  function validarEmail() {
    var valorEmail = campoEmail.value.trim();
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regexEmail.test(valorEmail)) {
      mostrarError("Formato de E-MAIL incorrecto", campoEmail);
    }
  }

  // Función de validación para el campo de provincia
  function validarProvincia() {
    if (campoProvincia.value === "0") {
      mostrarError("Seleccione una provincia", campoProvincia);
    }
  }

  // Función de validación para el campo de fecha
  function validarFecha() {
    var valorFecha = campoFecha.value.trim();
    var regexFecha = /^\d{2}[/|-]\d{2}[/|-]\d{4}$/;

    if (!regexFecha.test(valorFecha)) {
      mostrarError("Formato de FECHA incorrecto. Use dd/mm/aaaa o dd-mm-aaaa", campoFecha);
    }
  }

  // Función de validación general del formulario
  function validarFormulario() {
    if (campoNombre.value.trim() === "") {
      mostrarError("Nombre no puede estar vacío", campoNombre);
      return false;
    }

    if (campoApellidos.value.trim() === "") {
      mostrarError("Apellidos no pueden estar vacíos", campoApellidos);
      return false;
    }

    return true;
  }
});
