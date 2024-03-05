var ventanasAbiertas = {};
var rangoSelect2 = parseInt(document.getElementById("lista2").value);
var rangoSelect1 = parseInt(document.getElementById("lista1").value);

var rangoLista2 = [];
var usuario = {
  nombre: "",
  contrasena: "",
  eliminarContrasena: function () {
    this.contrasena = "";
  },
  eliminarNombre: function () {
    this.nombre = "";
  },
  crearContrasena: function (contrasena) {
    this.contrasena = contrasena;
  },
  crearNombre: function (nombre) {
    this.nombre = nombre;
  },
};


function mostrarLista2() {
  var rangoSelect = parseInt(document.getElementById("lista2").value);

  rangoLista2 = [];

  for (var i = 0; i <= rangoSelect; i++) {
    rangoLista2.push(i);
  }

  var contenido = "<p>Valores de lista2: " + rangoLista2.join(", ") + "</p>";
  alert(contenido);
}


function mostrarFormularioLogin() {
  ventanasAbiertas['ventana1'].document.write("<p>Introduce el usuario</p>");
  ventanasAbiertas['ventana1'].document.write("<input id='usuario1' type='text'>");
  ventanasAbiertas['ventana1'].document.write("<p>Introduce la contraseña (4 cifras)</p>");
  ventanasAbiertas['ventana1'].document.write("<input id='contrasena1' title='Debe ser un número de 4 cifras'>");
  ventanasAbiertas['ventana1'].document.write("<p>Repite la contraseña</p>");
  ventanasAbiertas['ventana1'].document.write("<input id='contrasena2' title='Debe ser un número de 4 cifras'>");
  ventanasAbiertas['ventana1'].document.write("<br>");
  ventanasAbiertas['ventana1'].document.write("<button id='enviarButton'>Enviar</button>");

  var enviarButton = ventanasAbiertas['ventana1'].document.getElementById("enviarButton");
  enviarButton.addEventListener("click", comprobarCredenciales);
}

function comprobarCredenciales() {
  var usuario1 = ventanasAbiertas['ventana1'].document.getElementById("usuario1").value;
  var contrasena1 = ventanasAbiertas['ventana1'].document.getElementById("contrasena1").value;
  var contrasena2 = ventanasAbiertas['ventana1'].document.getElementById("contrasena2").value;

  if (contrasena1 === contrasena2) {
    if (usuario1.length === 5) {
      usuario.crearNombre(usuario1);
      usuario.crearContrasena(contrasena1);

      ventanasAbiertas['ventana1'].document.write("<p>Usuario y contraseña creados correctamente</p>");
    } else {
      ventanasAbiertas['ventana1'].document.write("<p>Longitud incorrecta del nombre de usuario. Debe tener 5 caracteres.</p>");
    }
  } else {
    ventanasAbiertas['ventana1'].document.write("<p>Contraseña incorrecta. Las dos contraseñas deben ser iguales y tener 4 dígitos.</p>");
  }
}

function abrirVentana(nombreVentana, color, left, top, rangoSelect1, rangoSelect2) {
  if (!ventanasAbiertas[nombreVentana] || ventanasAbiertas[nombreVentana].closed) {
    var style = "width=300,height=300,left=" + left + ",top=" + top;

    ventanasAbiertas[nombreVentana] = window.open("", nombreVentana, style);
    ventanasAbiertas[nombreVentana].document.write("<style>body{background-color:" + color + ";}</style>");
    ventanasAbiertas[nombreVentana].document.write("<h2>Ventana " + nombreVentana + "</h2>");
    ventanasAbiertas[nombreVentana].document.write("<p>Contenido de la ventana " + nombreVentana + ".</p>");

    if (nombreVentana === 'ventana1') {
      mostrarFormularioLogin();
    }
    if (nombreVentana === 'ventana2') {
      ventanasAbiertas['ventana2'].document.write("<p> EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE <p>");
    }
    if (nombreVentana === 'ventana3') {
      var numerosGenerados = generarNumerosAleatorios(rangoSelect1,rangoSelect2);
      ventanasAbiertas['ventana3'].document.write(numerosGenerados);
    }
  }
}

function mostrarCredenciales() {
  ventanasAbiertas['ventana2'].document.write("<p>Usuario: " + usuario.nombre + "</p>");
  ventanasAbiertas['ventana2'].document.write("<p>Contraseña: " + usuario.contrasena + "</p>");
  ventanasAbiertas['ventana2'].document.write("<button id='btnBorrarContraseña'>Borrar Contraseña</button>");
}

function borrarContraseña() {
  usuario.eliminarContrasena();

  var mensaje = ventanasAbiertas['ventana2'].document.createElement("p");
  mensaje.textContent = "Contraseña borrada correctamente. Debes introducirla de nuevo.";
  ventanasAbiertas['ventana2'].document.body.appendChild(mensaje);

  setTimeout(function () {
    ventanasAbiertas['ventana2'].close();
  }, 5000);
}

ventanasAbiertas['ventana2'].document.getElementById("btnBorrarContraseña").addEventListener("click", borrarContraseña);



function cerrarVentana(nombreVentana) {
  ventanasAbiertas[nombreVentana].close();
}


function generarNumerosAleatorios(cantidad,rangoFin) {
  var numerosAleatorios = [];

  for (var i = 0; i < cantidad; i++) {
    var numeroAleatorio = Math.floor(Math.random() * (rangoFin - 0 + 1)) + 0;
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}



