// Arrays de frases
let frases1 = ["Queridos compañeros", "Por otra parte,y dados los condicionamientos actuales", "Asimismo", "Sin embargo no hemos de olvidar que", "De igual manera", "La práctica de la vida cotidiana prueba que", "No es indispensable argumentar el peso y la significación de estos problemas ya que", "Las experiencias ricas y diversas muestran que", "EI afán de organzaclón, pero sobre todo", "Los superiores principios ideológicos condicionan que", "Incluso, bien pudiéramos atrevernos a sugerir que", "Es obvio señalar que", "Pero pecaríamos de", "Insinceros 51 soslayásemos que", "Y además quedaríamos inmersos en la más abyecta de las estulticias si no fueramos consacientes de que", "Por último, y como definitivo elemento esclarecedor, cabe añadir que"];
let frases2 = ["la realización de las premisas del programa", "la complejidad de los estudios de los dirigentes", "el aumento constante, en cantidad y en extensión, de nuestra actividad", "la estructura actual de la organización", "el nuevo modelo de actividad de la organización,", "el desarrollo continuo de distintas formas de actividad", "nuestra actividad de información y propaganda", "el reforzamiento y desarrollo de las estructuras", "la consulta con los numerosos militantes", "el inicio de la acción general de formación de las actitudes", "un relanzamiento específico de todos los sectores implicados", "la superación de experiencias periclitadas", "una aplicación indiscriminada de los factores confluyentes", "la condición sine qua non rectora del proceso", "el proceso consensuado de unas y otras aplicaciones concurrentes"];
let frases3 = ["nos obliga a un exhaustivo análisis", "cumple un rol escencial en la formación", "exige la precisión y la determinación", "ayuda a la preparación y a la realización", "garantiza la participación de un grupo importante en la formación", "cumple deberes importantes en la determinación", "facilita la creación", "obstaculiza la apreciación de la importancia", "ofrece un ensayo interesante de verificación", "implica el proceso de reestructuración y modernización", "habrá de significar un auténtico y eficaz punto de partida", "permite en todo caso explicitar las razones fundamentales", "asegura, en todo caso, un proceso muy sensible de inversión", "radica en una elaboración cuidadosa y sistemática de las estrategias adecuadas", "deriva de una indirecta incidencia superadora"];
let frases4 = ["de las condiciones financieras y administrativas existentes.", "de las directivas de desarrollo para el futuro.", "del sistema de participación general.", "de las actitudes de los miembros hacia sus deberes ineludibles.", "de las nuevas proposiciones.", "de las direcciones educativas en el sentido del progreso.", "del sistema de formación de cuadros que corresponda a las necesidades.", "de las condiciones de las actividades apropiadas.", "del modelo de desarrollo.", "de las formas de acción.", "de las básicas premisas adoptadas.", "de toda una casuística de amplio espectro.", "de los elementos generadores.", "para configurar una interface amigable y coadyuvante a la reingeniería del sistema.", "de toda una serie de criterios ideológicamente sistematizados en un frente común de actuación regeneradora."];
// Función para generar una frase
function generarFrase() {
    // Comprueba si hay frases disponibles en todos los arrays
    if (frases1.length > 0 && frases2.length > 0 && frases3.length > 0 && frases4.length > 0) {
        // Selecciona una frase aleatoria de cada array
        let frase1 = frases1[Math.floor(Math.random() * frases1.length)];
        let frase2 = frases2[Math.floor(Math.random() * frases2.length)];
        let frase3 = frases3[Math.floor(Math.random() * frases3.length)];
        let frase4 = frases4[Math.floor(Math.random() * frases4.length)];

        // Elimina las frases seleccionadas de los arrays
        frases1 = frases1.filter(frase => frase !== frase1);
        frases2 = frases2.filter(frase => frase !== frase2);
        frases3 = frases3.filter(frase => frase !== frase3);
        frases4 = frases4.filter(frase => frase !== frase4);

        // Genera la frase completa
        let fraseCompleta = frase1 + ", " + frase2 + ", " + frase3 + ", " + frase4 + ".";

        // Crea un nuevo elemento de párrafo y añade la frase
        let p = document.createElement('p');
        p.innerText = fraseCompleta;
        document.getElementById('frases').prepend(p);
    } else {
        // Si no hay más frases para generar, muestra una alerta
        alert('No hay más frases para generar.');
    }
}
