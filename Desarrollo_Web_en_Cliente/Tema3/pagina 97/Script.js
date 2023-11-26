// Ejericicio 2

// Tu función Coche
function Coche(modelo, color, kms, combustible) {
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
  }
  
  // Crear instancias de Coche
  var miCoche = new Coche("Mercedes E330", "negro", 120000, "diésel");
  var tuCoche = new Coche("BMW 318", "blanco", 210000, "gasolina");
  
  // Función para imprimir información en la consola
  function imprimirInformacion() {
    console.log("Mi coche:", miCoche);
    console.log("Tu coche:", tuCoche);
  }
  

  
// Ejericicio 3



// Función que se ejecuta al pulsar el botón
function obtenerUltimaPosicion() {
    // Obtener el texto de la entrada y la palabra a buscar
    var texto = document.getElementById("entradaTexto").value;
    var palabra = document.getElementById("palabraBuscar").value;
  
    // Verificar si se proporcionó un texto y una palabra
    if (texto && palabra) {
      // Utilizar el método lastIndexOf para encontrar la última posición de la palabra
      var ultimaPosicion = texto.lastIndexOf(palabra)+1;
  
      // Verificar si la palabra se encontró
      if (ultimaPosicion !== 0) {
        // Mostrar el resultado en la consola del navegador
        console.log("La última posición de '" + palabra + "' es: " + ultimaPosicion);
  
        // Mostrar el resultado en la página web
        document.getElementById("resultado").innerHTML = "La última posición de '" + palabra + "' es: " + ultimaPosicion;
      } else {
        // Mostrar un mensaje si la palabra no se encuentra
        console.log("La palabra '" + palabra + "' no se encuentra en el texto.");
        document.getElementById("resultado").innerHTML = "La palabra '" + palabra + "' no se encuentra en el texto.";
      }
    } else {
      // Mostrar un mensaje si no se proporciona texto o palabra
      console.log("Por favor, ingresa un texto y una palabra.");
      document.getElementById("resultado").innerHTML = "Por favor, ingresa un texto y una palabra.";
    }
  }
  


// Ejericicio 4
function navidad() {
  // Seleccionar la lista <ul>
  var lista = document.getElementById('listaNavidad');
  lista.innerHTML = '';

  // Array de mensajes
  var saludos = [
    'Feliz Navidad a todos',
    'Feliz cumpleaños!',
    'Deseo una Feliz Navidad',
    'En Navidades nos vamos de fiesta',
    'Pasa un buen fin de semana'
  ];

  // Iterar a través de los mensajes
  for (var i = 0; i < saludos.length; i++) {
    var mensaje = saludos[i];

    // Verificar si el mensaje contiene la palabra 'Navidad'
    if (mensaje.toLowerCase().includes('navidad')) {
      var listItem = document.createElement('li');
      listItem.textContent = mensaje;
      lista.appendChild(listItem);
    }
  }
}

function mostrarListaNavidad() {
  // Llamar a la función navidad
  navidad();
}


// Ejericicio 5

function navidad2() {
  // Seleccionar la lista <ul>
  var lista = document.getElementById('listaNavidad');
  lista.innerHTML = '';

  // Array de mensajes
  var saludos = [
    'Feliz Navidad a todos',
    'Feliz cumpleaños!',
    'Deseo una Feliz Navidad',
    'En Navidades nos vamos de fiesta',
    'Pasa un buen fin de semana'
  ];

  // Iterar a través de los mensajes
  for (var i = 0; i < saludos.length; i++) {
    var mensaje = saludos[i];

    // Verificar si el mensaje NO contiene la palabra 'fiesta'
    if (!mensaje.toLowerCase().includes('fiesta')) {
      var listItem = document.createElement('li');
      listItem.textContent = mensaje;
      lista.appendChild(listItem);
    }
  }
}

function mostrarListaNavidad() {
  // Llamar a la función navidad
  navidad();
}



// Ejericicio 6

// Función para arreglar y mostrar los nombres de equipos
function mostrarResultadoFinal() {
  var lista = document.querySelector('#equipos');
  lista.innerHTML = '';

  var equipos = [
    'MÃN675847583748sjt567654;Manchester United',
    'RHD576746573fhdg4737dh4;Rea1 Madrid',
    'LIV5hg65hd737456236dch46dg4;Liverpool',
    'SEV4f65hf75f736463;Sevi11a',
    'BAR5767ghtyfyr4536dh45dg45dg3;Barcelona PC'
  ];

  for (var i = 0; i < equipos.length; i++) {
    var input = equipos[i];

    // Obtener el nombre del equipo eliminando todo antes del punto y coma
    var result = input.split(';')[1].trim();

    var listItem = document.createElement('li');
    listItem.textContent = result;
    lista.appendChild(listItem);
  }
}

// Llamar a la función para mostrar el resultado final
mostrarResultadoFinal();



// Ejericicio 7
// Definir el objeto persona
var persona = {
  nombre: 'Rafa',
  edad: 30,
  genero: 'masculino',
  intereses: ['fútbol'],

  biografia: function() {
    alert(this.nombre + ' tiene ' + this.edad + ' años y le gusta el ' + this.intereses.join(' y el ') + '.');
  },

  saluda: function() {
    alert('Hola, me llamo ' + this.nombre + '.');
  }
};

// Funciones para mostrar la biografía y el saludo
function mostrarBiografia() {
  persona.biografia();
}

function mostrarSaludo() {
  persona.saluda();
}


// Ejericicio 8

function procesarPerrillos() {
  var perrillos = ["Rocket", , "Slugger"];
  console.log(perrillos.toString());

  var ciudades = "Madrid,Barcelona,Sevilla";
  perrillos = ciudades.split(',');
  console.log(perrillos.toString());

  // a) Eliminar elementos que contengan una 'C' (mayúscula o minúscula)
  perrillos = perrillos.filter(function(elemento) {
    return elemento.toLowerCase().indexOf('c') === -1;
  });

  // b) Modificar para que perrillos contenga nombres de perros y ciudades
  perrillos.unshift("Estepona");

  // c) Comprobar si funciona
  console.log(perrillos.toString());
}



// Ejericicio 9

function realizarBusqueda() {
  // Array grande con elementos
  var elementos = [
    "028924;Estepona",
    // Agrega más elementos según sea necesario
  ];

  // Obtener el término de búsqueda del campo de texto
  var terminoBusqueda = document.getElementById('campoBusqueda').value.toLowerCase();

  // Filtrar los elementos que contienen o coinciden con el término de búsqueda
  var resultados = elementos.filter(function(elemento) {
    return elemento.toLowerCase().includes(terminoBusqueda);
  });

  // Mostrar los resultados
  mostrarResultados(resultados);
}

// Función para mostrar los resultados en el HTML
function mostrarResultados(resultados) {
  var resultadoHTML = "";
  
  if (resultados.length > 0) {
    resultadoHTML = "Resultados:<br>";
    resultados.forEach(function(resultado) {
      resultadoHTML += resultado + "<br>";
    });
  } else {
    resultadoHTML = "No se encontraron resultados.";
  }

  document.getElementById('resultado').innerHTML = resultadoHTML;
}



// Ejericicio 10

// Función para establecer cookies
function establecerCookies() {
  // Nombre y contenido de las cookies
  var nombreCookie1 = "miCookie1";
  var contenidoCookie1 = "Contenido de la Cookie 1";

  var nombreCookie2 = "miCookie2";
  var contenidoCookie2 = "Contenido de la Cookie 2";

  // Establecer las cookies con una duración de 7 días
  document.cookie = `${nombreCookie1}=${contenidoCookie1}; expires=${obtenerFechaExpiracion(7)}`;
  document.cookie = `${nombreCookie2}=${contenidoCookie2}; expires=${obtenerFechaExpiracion(7)}`;

  alert("Cookies establecidas correctamente.");
}

// Función para obtener la fecha de expiración para las cookies
function obtenerFechaExpiracion(dias) {
  var fecha = new Date();
  fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
  var expiracion = fecha.toUTCString();
  return expiracion;
}

// Llamar a la función para establecer las cookies cuando se carga la página
establecerCookies();
