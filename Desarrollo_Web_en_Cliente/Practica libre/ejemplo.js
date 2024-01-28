var ventana1, ventana2, ventana3, ventana4;

function abrir() {
    ventana1 = window.open('hola.html', '_blank', 'width=500,height=300,left=500,top=0');
    ventana2 = window.open('hola.html', '_blank', 'width=500,height=300,left=0,top=0');
    ventana3 = window.open('hola.html', '_blank', 'width=500,height=300,left=500,top=500');
    ventana4 = window.open('hola.html', '_blank', 'width=500,height=300,left=0,top=500');
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

function cerrarDespuesDe10Segundos() {
    setTimeout(function() {
        cerrarVentanas();
    }, 10000); // 10000 milisegundos = 10 segundos
}
