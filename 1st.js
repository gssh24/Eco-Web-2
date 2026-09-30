/* =========================================================
   NAVEGACIÓN ENTRE SECCIONES
========================================================= */

function mostrarSeccion(id) {

    const secciones = [
        "infoSection",
        "mapSection",
        "quizSection",
        "creditsSection"
    ];

    secciones.forEach(function(seccion) {

        const elemento = document.getElementById(seccion);

        if (elemento) {
            elemento.classList.add("hidden");
        }

    });

    const seleccionada = document.getElementById(id);

    if (seleccionada) {
        seleccionada.classList.remove("hidden");

        seleccionada.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    if (id === "mapSection" && typeof mapa !== "undefined") {
        setTimeout(function() {
            mapa.invalidateSize();
        }, 200);
    }
}


/* =========================================================
   DESPLEGAR / OCULTAR CLASIFICACIONES
========================================================= */

function toggleClasificacion(id) {

    const elemento = document.getElementById(id);

    if (!elemento) {
        return;
    }

    elemento.classList.toggle("hidden");
}


/* =========================================================
   MAPA
========================================================= */

let mapa;

function iniciarMapa() {

    const contenedor = document.getElementById("map");

    if (!contenedor) {
        return;
    }

    mapa = L.map("map").setView([-15.5, -55], 3.5);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(mapa);


    const paises = [

        {
            nombre: "Paraguay",
            lat: -23.4425,
            lng: -58.4438,
            info: "Paraguay posee importantes áreas de bosques, especialmente en la Región Oriental y el Chaco."
        },

        {
            nombre: "Argentina",
            lat: -34.6037,
            lng: -58.3816,
            info: "Argentina posee diversos ecosistemas y zonas forestales que pueden verse afectados por incendios."
        },

        {
            nombre: "Bolivia",
            lat: -16.2902,
            lng: -63.5887,
            info: "Bolivia posee grandes áreas de bosques tropicales y una importante biodiversidad."
        },

        {
            nombre: "Chile",
            lat: -33.4489,
            lng: -70.6693,
            info: "Chile posee ecosistemas forestales que pueden ser afectados por incendios durante períodos secos."
        },

        {
            nombre: "México",
            lat: 23.6345,
            lng: -102.5528,
            info: "México posee una gran diversidad de ecosistemas y especies."
        },

        {
            nombre: "Brasil",
            lat: -14.235,
            lng: -51.9253,
            info: "Brasil contiene una de las mayores extensiones de bosques tropicales del mundo."
        },

        {
            nombre: "Colombia",
            lat: 4.5709,
            lng: -74.2973,
            info: "Colombia posee una gran biodiversidad y extensas zonas de bosques."
        },

        {
            nombre: "Uruguay",
            lat: -32.5228,
            lng: -55.7658,
            info: "Uruguay cuenta con diferentes ambientes naturales y áreas forestales."
        },

        {
            nombre: "Estados Unidos",
            lat: 37.0902,
            lng: -95.7129,
            info: "Estados Unidos posee extensas áreas forestales que pueden experimentar incendios."
        },

        {
            nombre: "España",
            lat: 40.4637,
            lng: -3.7492,
            info: "España posee áreas forestales especialmente vulnerables a incendios durante períodos de altas temperaturas y sequía."
        }

    ];


    paises.forEach(function(pais) {

        const marcador = L.marker([
            pais.lat,
            pais.lng
        ]).addTo(mapa);

        marcador.bindPopup(
            "<strong>" +
            pais.nombre +
            "</strong><br><br>" +
            pais.info
        );

        marcador.on("click", function() {

            const infoBox = document.getElementById("infoBox");

            if (infoBox) {

                infoBox.innerHTML =
                    "<strong>" +
                    pais.nombre +
                    "</strong><br><br>" +
                    pais.info;

            }

        });

    });

}


/* =========================================================
   PREGUNTAS DEL TEST
========================================================= */

const preguntas = [

    {
        pregunta: "¿Qué es la deforestación?",
        opciones: [
            "La plantación de árboles",
            "La eliminación o pérdida de bosques",
            "La limpieza de ríos",
            "La protección de animales"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Cuál puede ser una causa de los incendios forestales?",
        opciones: [
            "Reforestación",
            "Lluvia",
            "Quemas y actividades humanas",
            "Reciclaje"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué representa la huella de carbono?",
        opciones: [
            "La cantidad de árboles de una región",
            "Las emisiones de gases de efecto invernadero asociadas a actividades",
            "La cantidad de animales de un bosque",
            "La superficie de un país"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué ocurre cuando se destruye el hábitat de una especie?",
        opciones: [
            "Puede disminuir su población",
            "Siempre aumenta su población",
            "No ocurre nada",
            "La especie se convierte en otra"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es una forma de reducir nuestra huella de carbono?",
        opciones: [
            "Desperdiciar electricidad",
            "Quemar basura",
            "Ahorrar energía",
            "Talar árboles"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Por qué son importantes los bosques?",
        opciones: [
            "Porque eliminan toda la contaminación",
            "Porque proporcionan hábitats, regulan el clima y almacenan carbono",
            "Porque producen plástico",
            "Porque evitan todas las enfermedades"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué es la biodiversidad?",
        opciones: [
            "La variedad de seres vivos y ecosistemas",
            "La cantidad de ciudades",
            "El número de carreteras",
            "La cantidad de edificios"
        ],
        correcta: 0
    }

];


/* =========================================================
   CREAR TEST
========================================================= */

function crearQuiz() {

    const quiz = document.getElementById("quiz");

    if (!quiz) {
        return;
    }

    quiz.innerHTML = "";

    preguntas.forEach(function(pregunta, indice) {

        const contenedor = document.createElement("div");

        const titulo = document.createElement("h3");

        titulo.textContent =
            (indice + 1) + ". " + pregunta.pregunta;

        contenedor.appendChild(titulo);


        pregunta.opciones.forEach(function(opcion, opcionIndex) {

            const label = document.createElement("label");

            const radio = document.createElement("input");

            radio.type = "radio";

            radio.name = "pregunta" + indice;

            radio.value = opcionIndex;

            label.appendChild(radio);

            label.appendChild(
                document.createTextNode(" " + opcion)
            );

            contenedor.appendChild(label);

            contenedor.appendChild(
                document.createElement("br")
            );

        });

        quiz.appendChild(contenedor);

    });

}


/* =========================================================
   CORREGIR TEST
========================================================= */

function corregirQuiz() {

    let puntuacion = 0;

    preguntas.forEach(function(pregunta, indice) {

        const respuesta =
            document.querySelector(
                'input[name="pregunta' +
                indice +
                '"]:checked'
            );

        if (respuesta) {

            if (
                Number(respuesta.value) ===
                pregunta.correcta
            ) {

                puntuacion++;

            }

        }

    });


    const resultado =
        document.getElementById("quizResult");

    if (!resultado) {
        return;
    }


    const porcentaje =
        Math.round(
            (puntuacion / preguntas.length) * 100
        );


    if (puntuacion === preguntas.length) {

        resultado.innerHTML =
            "🎉 ¡Excelente! Respondiste correctamente " +
            puntuacion +
            " de " +
            preguntas.length +
            " preguntas (" +
            porcentaje +
            "%).";

    } else if (puntuacion >= preguntas.length / 2) {

        resultado.innerHTML =
            "👍 ¡Buen trabajo! Respondiste correctamente " +
            puntuacion +
            " de " +
            preguntas.length +
            " preguntas (" +
            porcentaje +
            "%).";

    } else {

        resultado.innerHTML =
            "📚 Respondiste correctamente " +
            puntuacion +
            " de " +
            preguntas.length +
            " preguntas (" +
            porcentaje +
            "%). Te recomendamos revisar nuevamente la información.";

    }

}


/* =========================================================
   INICIAR PÁGINA
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    crearQuiz();

    iniciarMapa();

});