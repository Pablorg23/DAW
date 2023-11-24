// Función para guardar el nombre en una cookie
function guardarNombre() {
  var nombreUsuario = document.getElementById("nombreInput").value;
  if (nombreUsuario.trim() !== "") {
      setCookie("usuario_" + Date.now(), nombreUsuario, 30);
      document.getElementById("nombreInput").value = ""; // Limpiar el campo de entrada
      mostrarNombresUsuario();
  } else {
      alert("Por favor, ingresa un nombre válido.");
  }
}

// Función para establecer una cookie
function setCookie(nombre, valor, diasParaExpirar) {
  var fechaExpiracion = new Date();
  fechaExpiracion.setDate(fechaExpiracion.getDate() + diasParaExpirar);
  var valorCodificado = encodeURIComponent(valor);
  document.cookie = nombre + "=" + valorCodificado + "; expires=" + fechaExpiracion.toUTCString() + "; path=/";
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
  var nombreEQ = nombre + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nombreEQ) == 0) {
          return decodeURIComponent(cookie.substring(nombreEQ.length, cookie.length));
      }
  }
  return null;
}

// Función para mostrar los nombres de usuario almacenados en cookies
function mostrarNombresUsuario() {
  var nombresUsuario = document.getElementById("nombresUsuario");
  nombresUsuario.innerHTML = "";

  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      var nombreEQ = cookie.indexOf("=");
      if (nombreEQ > -1) {
          var nombreCookie = cookie.substring(0, nombreEQ);
          if (nombreCookie.startsWith("usuario_")) {
              var nombreUsuario = getCookie(nombreCookie);
              var listItem = document.createElement("li");
              listItem.textContent = nombreUsuario;
              nombresUsuario.appendChild(listItem);
          }
      }
  }
}

// Función para borrar todas las cookies
function borrarCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var igualPos = cookie.indexOf("=");
      var nombre = igualPos > -1 ? cookie.substr(0, igualPos) : cookie;
      document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  document.getElementById("nombreUsuario").textContent = "";
  mostrarNombresUsuario();
}

// Función para mostrar cuántas veces se ha introducido una cookie
function mostrarCantidadCookies() {
  var cookies = document.cookie.split(";");
  document.getElementById("cantidadCookies").textContent = "Número de cookies almacenadas: " + cookies.length;
}

// Llamar a la función para mostrar los nombres de usuario al cargar la página
window.addEventListener('load', mostrarNombresUsuario);
