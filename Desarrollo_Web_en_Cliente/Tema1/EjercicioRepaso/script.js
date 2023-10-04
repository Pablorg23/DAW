function restarNumeros() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 - numero2;
    document.getElementById("resultado").textContent = resultado;
}
function dividirNumeros(){
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 / numero2;
    document.getElementById("resultado").textContent = resultado;

}
function mostrarInformacion(){
    const edad=parseFloat(document.getElementById("Edad").value);
    const Nombre=document.getElementById("Nombre").value;
    const edadEnDias=edad*365;
    window.alert("Tu nombre es "+Nombre+" y tu edad en dias es de "+edadEnDias);



}