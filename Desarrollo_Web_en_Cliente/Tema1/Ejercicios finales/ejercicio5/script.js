const rusoButton = document.getElementById("rusoButton");
const espanolButton = document.getElementById("espanolButton");
const inglesButton = document.getElementById("inglesButton");
const mensajeBienvenida = document.getElementById("mensajeBienvenida");

rusoButton.addEventListener("click", () => {
    mensajeBienvenida.textContent = "Добро пожаловать!"; // Mensaje en ruso
    mensajeBienvenida.className = "ruso";
});

espanolButton.addEventListener("click", () => {
    mensajeBienvenida.textContent = "¡Bienvenido!"; // Mensaje en español
    mensajeBienvenida.className = "espanol";
});

inglesButton.addEventListener("click", () => {
    mensajeBienvenida.textContent = "Welcome!"; // Mensaje en inglés
    mensajeBienvenida.className = "ingles";
});
