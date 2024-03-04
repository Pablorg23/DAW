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
