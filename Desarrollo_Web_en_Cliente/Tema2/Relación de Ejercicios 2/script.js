//ejercicio 5.1
function calcularPerimetro() {
    // Solicitar al usuario el valor del lado del cuadrado
    var lado = prompt("Ingrese el valor del lado del cuadrado:");
    
    // Validar que se haya ingresado un valor numérico
    if (!isNaN(lado)) {
        // Calcular el perímetro del cuadrado
        var perimetro = 4 * parseFloat(lado);
        
        // Mostrar el resultado en pantalla
        document.getElementById("resultado").innerHTML = "El perimetro del cuadrado es: " + perimetro;
    } else {
        // Mostrar un mensaje de error si no se ingresó un valor numérico
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un valor numerico valido.";
    }
}

//ejercicio 5.2
function calcular() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);
    var num4 = parseFloat(document.getElementById("numero4").value);

    var suma = num1 + num2;
    var producto = num3 * num4;

    document.getElementById("resultadoSuma").textContent = suma;
    document.getElementById("resultadoProducto").textContent = producto;
}
//ejercicio 5.3
function calcular2() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);
    var valor4 = parseFloat(document.getElementById("valor4").value);

    var suma = valor1 + valor2 + valor3 + valor4;
    var producto = valor1 * valor2 * valor3 * valor4;

    var resultado = "La suma es " + suma + " y el producto es " + producto;

    document.getElementById("resultado").textContent = resultado;
}
//ejercicio 5.4
function calcularTotal() {
    // Obtener el precio y la cantidad ingresados por el usuario
    var precio = parseInt(document.getElementById('precio').value);
    var cantidad = parseInt(document.getElementById('cantidad').value);

    // Calcular el total a pagar
    var total = precio * cantidad;

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerHTML = "Total a pagar: " + total + " euros.";
}
//ejercicio 6.1
function calcularPromedio() {
    var nota1 = prompt('Ingrese la primera nota:', '');
    nota1 = parseInt(nota1);

    var nota2 = prompt('Ingrese la segunda nota:', '');
    nota2 = parseInt(nota2);

    var nota3 = prompt('Ingrese la tercera nota:', '');
    nota3 = parseInt(nota3);

    var suma = nota1 + nota2 + nota3;
    var promedio = suma / 3;

    if (promedio >= 7) {
        alert('Promocionado');
    } else {
        alert('No Promocionado');
    }
}
//ejercicio 6.2


function verificarClave() {
    // Obtener los valores ingresados en los campos de clave
    var clave1 = document.getElementById("clave1").value;
    var clave2 = document.getElementById("clave2").value;

    // Verificar si las claves son iguales
    if (clave1 == clave2) {
        document.getElementById("mensaje").textContent = "Las claves son iguales.";
    } else {
        document.getElementById("mensaje").textContent = "Las claves no son iguales. Inténtelo de nuevo.";
    }
}
//ejercicio 7.1
function realizarOperaciones() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoDiv = document.getElementById("resultado");
    var resultado = "";

    if (numero1 > numero2) {
        var suma = numero1 + numero2;
        var resta = numero1 - numero2;
        resultado = "Suma: " + suma + "<br>Diferencia: " + resta;
    } else {
        var producto = numero1 * numero2;
        var division = numero1 / numero2;
        resultado = "Producto: " + producto + "<br>Division: " + division;
    }

    resultadoDiv.innerHTML = resultado;
}

//ejercicio 7.2
function calcularPromedio2() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 4) {
        document.getElementById("resultado").textContent = 'Regular';
    } else {
        document.getElementById("resultado").textContent = 'Reprobado';
    }
}


//ejercicio 7.3
function verificarDigitos() {
    var numero = document.getElementById("numeroInput").value;
    var numeroEntero = parseInt(numero);

    if (numeroEntero >= 1 && numeroEntero <= 99) {
        if (numeroEntero >= 10 && numeroEntero <= 99) {
            document.getElementById("resultado").textContent = "El numero tiene dos digitos.";
        } else {
            document.getElementById("resultado").textContent = "El numero tiene un digito.";
        }
    } else {
        document.getElementById("resultado").textContent = "Ingresa un numero valido de uno o dos digitos.";
    }
}
