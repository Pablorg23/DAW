var miVentana1, miVentana2, miVentana3;
function miVentana1(){

    miVentana1=window.open("", '_blank', "width=300,height=300,left=0,top=0");
miVentana1.document.body.style.backgroundColor = "red";

}
function miVentana2(){

    miVentana2=window.open("",  '_blank', "width=300,height=300,left=100000,top=0");
miVentana2.document.body.style.backgroundColor = "yellow";
    
}
function miVentana3(){

    miVentana3=window.open("",  '_blank', "width=300,height=300,left=0,top=10000000");
miVentana3.document.body.style.backgroundColor = "blue";
    
}
function cerrarVentana1(){
    if (miVentana1) miVentana1.close();
}
function cerrarVentana2(){
    if (miVentana2) miVentana2.close();
}
function cerrarVentana(){
    if (miVentana3) miVentana3.close();
}