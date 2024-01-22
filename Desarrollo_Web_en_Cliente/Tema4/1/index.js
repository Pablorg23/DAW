document.addEventListener("DOMContentLoaded", function () {
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

  campoNombre.addEventListener("blur", function () {
    convertirAMayusculas(campoNombre);
    validarNombre();
  });

  campoApellidos.addEventListener("blur", function () {
    convertirAMayusculas(campoApellidos);
    validarApellidos();
  });

  campoEdad.addEventListener("blur", function () {
    validarEdad();
  });

  campoNIF.addEventListener("blur", function () {
    validarNIF();
  });

  campoEmail.addEventListener("blur", function () {
    validarEmail();
  });

  campoProvincia.addEventListener("blur", function () {
    validarProvincia();
  });

  campoFecha.addEventListener("blur", function () {
    validarFecha();
  });

  campoTelefono.addEventListener("blur", function () {
    validarTelefono();
  });

  campoHora.addEventListener("blur", function () {
    validarHora();
  });

  document.getElementById("formulario").addEventListener("submit", function (evento) {
    if (!confirm("¿Estás seguro de enviar el formulario?")) {
      evento.preventDefault();
    } else {
      if (!validarFormulario()) {
        evento.preventDefault();
      }
    }
  });

  function convertirAMayusculas(input) {
    input.value = input.value.toUpperCase();
  }

  function validarTelefono() {
    var valorTelefono = campoTelefono.value.trim();
    var regexTelefono = /^\d{9}$/;

    if (!regexTelefono.test(valorTelefono)) {
      mostrarError("Formato de TELÉFONO incorrecto. Debe contener 9 dígitos", campoTelefono);
    }
  }

  campoHora.addEventListener("blur", function () {
    var valorHora = campoHora.value.trim();
    var regexHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    if (!regexHora.test(valorHora)) {
      mostrarError("Formato de HORA incorrecto. Debe seguir el patrón hh:mm", campoHora);
    }
  });

  function mostrarError(mensaje, input) {
    contenedorErrores.textContent = mensaje;
    input.classList.add("error");
    input.focus();
  }

  function mostrarExito(mensaje) {
    var contenedorExito = document.getElementById("mensajes");
    contenedorExito.textContent = mensaje;
  }

  function validarNombre() {
    if (campoNombre.value.trim() === "") {
      mostrarError("Nombre no puede estar vacío", campoNombre);
    }
  }

  function validarApellidos() {
    if (campoApellidos.value.trim() === "") {
      mostrarError("Apellidos no pueden estar vacíos", campoApellidos);
    }
  }

  function validarEdad() {
    var valorEdad = campoEdad.value.trim();
    if (!/^\d+$/.test(valorEdad) || parseInt(valorEdad) < 0 || parseInt(valorEdad) > 105) {
      mostrarError("Edad debe contener valores numéricos entre 0 y 105", campoEdad);
    }
  }

  function validarNIF() {
    var valorNIF = campoNIF.value.trim();
    var regexNIF = /^\d{8}-[A-Z]$/;

    if (!regexNIF.test(valorNIF)) {
      mostrarError("Formato de NIF incorrecto. Debe ser 8 números, un guión y una letra", campoNIF);
    }
  }

  function validarEmail() {
    var valorEmail = campoEmail.value.trim();
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regexEmail.test(valorEmail)) {
      mostrarError("Formato de E-MAIL incorrecto", campoEmail);
    }
  }

  function validarProvincia() {
    if (campoProvincia.value === "0") {
      mostrarError("Seleccione una provincia", campoProvincia);
    }
  }

  function validarFecha() {
    var valorFecha = campoFecha.value.trim();
    var regexFecha = /^\d{2}[/|-]\d{2}[/|-]\d{4}$/;

    if (!regexFecha.test(valorFecha)) {
      mostrarError("Formato de FECHA incorrecto. Use dd/mm/aaaa o dd-mm-aaaa", campoFecha);
    }
  }

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