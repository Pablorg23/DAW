const rusoBoton = document.getElementById("rusoBoton");
const espanolBoton = document.getElementById("espanolBoton");
const inglesBoton = document.getElementById("inglesBoton");

rusoBoton.addEventListener("click", () => {
    alert("Добро пожаловать!"); // Mensaje en ruso usando una alerta
});

espanolBoton.addEventListener("click", () => {
    alert("¡Bienvenido!"); // Mensaje en español usando una alerta
});

inglesBoton.addEventListener("click", () => {
    alert("Welcome!"); // Mensaje en inglés usando una alerta
});
