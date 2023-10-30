function mostrarInformacion(){
    const edad=parseFloat(document.getElementById("Edad").value);
    const Nombre=document.getElementById("Nombre").value;
    const edadEnDias=edad*365;
    window.alert("Tu nombre es "+Nombre+" y tu edad en dias es de "+edadEnDias);

}