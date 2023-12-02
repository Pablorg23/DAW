// Variables para almacenar estadísticas
let doblePareja = 0;
let trios = 0;
let escaleraSimple = 0;
let escaleraCompleta = 0;
let pocker = 0;

// Función para calcular la figura y mostrar estadísticas
function calcularFigura() {
  const numero = document.getElementById("numeroInput").value;

  // Verificar que el número sea de 4 cifras
  if (numero.length !== 4 || isNaN(numero)) {
    alert("Por favor, introduce un número de 4 cifras válido.");
    return;
  }

  // Actualizar estadísticas según la figura
  if (tieneDoblePareja(numero)) {
    doblePareja++;
  } else if (tieneTrio(numero)) {
    trios++;
  } else if (esEscaleraSimple(numero)) {
    escaleraSimple++;
  } else if (esEscaleraCompleta(numero)) {
    escaleraCompleta++;
  } else if (esPocker(numero)) {
    pocker++;
  }

  // Mostrar la figura correspondiente
  mostrarFigura(numero);

  // Almacenar estadísticas en la cookie
  guardarEstadisticasEnCookie();

  // Abrir la ventana de estadísticas durante 10 segundos
  setTimeout(() => {
    window.open("Ventana_secundaria.html", "_blank");
  }, 10000);
}

// Funciones para verificar la figura
function tieneDoblePareja(numero) {
  const digitos = Array.from(numero).map(Number);
  const conteoDigitos = {};

  for (const digito of digitos) {
    conteoDigitos[digito] = (conteoDigitos[digito] || 0) + 1;
  }

  const pares = Object.values(conteoDigitos).filter(cont => cont === 2);

  return pares.length === 2;
}

function tieneTrio(numero) {
  const digitos = Array.from(numero).map(Number);
  const conteoDigitos = {};

  for (const digito of digitos) {
    conteoDigitos[digito] = (conteoDigitos[digito] || 0) + 1;
  }

  return Object.values(conteoDigitos).includes(3);
}

function esEscaleraSimple(numero) {
    const digitos = Array.from(numero).map(Number);
    digitos.sort();
  
    for (let i = 0; i < digitos.length - 2; i++) {
      if (digitos[i] + 1 !== digitos[i + 1] || digitos[i] + 2 !== digitos[i + 2]) {
        return false;
      }
    }
  
    return true;
  }
  
  function esEscaleraCompleta(numero) {
    const digitos = Array.from(numero).map(Number);
    digitos.sort();
  
    for (let i = 0; i < digitos.length - 3; i++) {
      if (digitos[i] + 1 !== digitos[i + 1] || digitos[i] + 2 !== digitos[i + 2] || digitos[i] + 3 !== digitos[i + 3]) {
        return false;
      }
    }
  
    return true;
  }

function esPocker(numero) {
  const digitos = Array.from(numero).map(Number);
  const conteoDigitos = {};

  for (const digito of digitos) {
    conteoDigitos[digito] = (conteoDigitos[digito] || 0) + 1;
  }

  return Object.values(conteoDigitos).includes(4);
}

// Función para mostrar la figura
function mostrarFigura(numero) {
  alert(`Número: ${numero}\nFigura: ${obtenerFigura(numero)}`);
}

// Función para obtener la figura
function obtenerFigura(numero) {
  if (tieneDoblePareja(numero)) {
    return "Doble Pareja";
  } else if (tieneTrio(numero)) {
    return "Trio";
  } else if (esEscaleraSimple(numero)) {
    return "Escalera Simple";
  } else if (esEscaleraCompleta(numero)) {
    return "Escalera Completa";
  } else if (esPocker(numero)) {
    return "Pocker";
  } else {
    return "Sin figura";
  }
}

// Función para guardar estadísticas en la cookie
function guardarEstadisticasEnCookie() {
  const estadisticas = {
    doblePareja,
    trios,
    escaleraSimple,
    escaleraCompleta,
    pocker,
  };

  document.cookie = `estadisticas=${JSON.stringify(estadisticas)}`;
}
