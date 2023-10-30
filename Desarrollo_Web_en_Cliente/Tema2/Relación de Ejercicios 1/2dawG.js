function contadores() {
    var numero = parseFloat(document.getElementById("numero").value);
    
    var contador1 = numero + 5;
    var contador2 = contador1 + 21;
    var contador3 = contador2 - 4;
    
    // Mostrar los resultados
    document.getElementById("numeroIntroducido").textContent = numero;
    document.getElementById("contador1").textContent = contador1;
    document.getElementById("contador2").textContent = contador2;
    document.getElementById("contador3").textContent = contador3;
}