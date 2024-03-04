var ventana1, ventana2, ventana3, ventana4;

function abrir() {
    ventana1 = window.open('hola.html', '_blank', 'width=500,height=300,left=50000,top=0');
    ventana2 = window.open('hola.html', '_blank', 'width=500,height=300,left=0,top=0');
    ventana3 = window.open('hola.html', '_blank', 'width=500,height=300,left=50000,top=50000');
    ventana4 = window.open('hola.html', '_blank', 'width=500,height=300,left=0,top=50000');
}
function cerrarVentanas() {
    if (ventana1) ventana1.close();
    if (ventana2) ventana2.close();
    if (ventana3) ventana3.close();
    if (ventana4) ventana4.close();
}
function darColor() {
    if (ventana1) ventana1.document.body.style.backgroundColor = 'red';
    if (ventana2) ventana2.document.body.style.backgroundColor = 'blue';
    if (ventana3) ventana3.document.body.style.backgroundColor = 'green';
    if (ventana4) ventana4.document.body.style.backgroundColor = 'yellow';
}
function escribir() {
    var miParrafo = ventana1.document.getElementById("miParrafo");

    if (miParrafo) {
        miParrafo.innerHTML = "Holaaaaaaa";
    } else {
        alert("Elemento no encontrado en hola.html");
    }
}
function objetoCompleto(){

    var persona = {
    nombre: "Juan",
    edad: 30,
    email: "juan@example.com",
    saludar: function() {
        console.log("¡Hola! Mi nombre es " + this.nombre);
        console.log(persona.nombre);
        console.log(persona["edad"]);
        console.log(persona.email);
        //generar un array es nombre=new Array();
        
    }
    }

persona.saludar(); 

}

function cerrarDespuesDe10Segundos() {
    setTimeout(function () {
        cerrarVentanas();
    }, 10000); // 10000 milisegundos = 10 segundos
}
function ordenArray(){

    var arrayNumerico = [33, 4, 12, 45, 7];

    // Función de comparación para ordenar numéricamente
    function compararNumeros(a, b) {
      return a - b;
    }
    
    // Ordenar el array utilizando la función de comparación
    arrayNumerico.sort(compararNumeros);
    
    console.log(arrayNumerico);

}
function generarNumerosAleatorios() {
    // Obtener la cantidad de números desde el elemento con el ID "cantidadNumeros"
    var cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);

    // Generar y mostrar los números aleatorios
    ventana2.document.write("Números aleatorios:");

    for (var i = 0; i < cantidadNumeros; i++) {
        var numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Rango del 1 al 100 (puedes ajustar según tus necesidades)
        ventana2.document.write(numeroAleatorio + "\t");
    }
}


function ventana1F(){
/* 
                //Comprobacion si la contraseña y el usuario es correcto
    if(usuario.nombre=="alumno"){
        if(usuario.contrasena=="bueno"){
            ventana.alert("Datos correctos, ¿Deseas cambiar la contraseña?")
            contrasenaNueva=ventana.prompt("Dime la contraseña nueva");
            usuario.contrasena=contrasenaNueva;
            ventana.alert("Contraseña cambiada con exito")
            //Cogemos horas y minutos
            var fechaActual = new Date();
            hora = fechaActual.getHours();
            minuto = fechaActual.getMinutes();
        //los dos else por si alguno de los dos es erroneo
        }else{
            ventana.document.write("Datos incorrectos ¿Quieres intentarlo de nuevo?")
        }
    }else{
        ventana.document.write("Datos incorrectos ¿Quieres intentarlo de nuevo?")
    }

*/

//para editar html
//nombre.document.write("");
//"<select name="seleccion" id="">"

//la ventana tiene que estar ya abierta. si no ventana1 = window.open('hola.html', '_blank', 'width=500,height=300,left=50000,top=0');
//para cerrarla es if (ventana1) ventana1.close();
    if (ventana1) ventana1.document.body.style.backgroundColor = 'red';


    //generar numaleatorio con id
// Obtener la cantidad de números desde el elemento con el ID "cantidadNumeros"
var cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);

// Generar y mostrar los números aleatorios
ventana1.document.write("Números aleatorios:");

for (var i = 0; i < cantidadNumeros; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Rango del 1 al 100
    ventana1.document.write(numeroAleatorio + "\t");
}

}

