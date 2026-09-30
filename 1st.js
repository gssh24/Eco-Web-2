/* =====================================================
   NAVEGACIÓN ENTRE SECCIONES
===================================================== */

let mapaInicializado = false;
let map = null;


function mostrarSeccion(id) {

    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
    });

    const seleccionada = document.getElementById(id);

    if (seleccionada) {
        seleccionada.classList.add("activa");
    }

    /*
        Cuando se abre el mapa se actualiza su tamaño.
        Esto evita que aparezca cortado o deformado.
    */

    if (id === "mapa" && mapaInicializado) {

        setTimeout(() => {

            map.invalidateSize();

            map.setView(
                [-23.4425, -58.4438],
                4
            );

        }, 150);
    }
}


/* =====================================================
   INFORMACIÓN DE PAÍSES
===================================================== */

const countryCoords = {

    Paraguay: [-23.4425, -58.4438],

    Argentina: [-34.6037, -58.3816],

    Brasil: [-14.2350, -51.9253],

    Bolivia: [-16.2902, -63.5887],

    Chile: [-33.4489, -70.6693],

    Uruguay: [-32.5228, -55.7658],

    Colombia: [4.5709, -74.2973],

    México: [23.6345, -102.5528],

    España: [40.4637, -3.7492],

    "Estados Unidos": [37.0902, -95.7129]

};


const countryInfo = {

    Paraguay: {
        descripcion:
            "Paraguay posee diferentes ecosistemas y regiones naturales. Sus bosques cumplen funciones importantes para la biodiversidad y el equilibrio ambiental.",
        importancia:
            "La conservación de los bosques paraguayos ayuda a proteger especies, recursos hídricos y suelos.",
        especie:
            "Lapacho"
    },

    Argentina: {
        descripcion:
            "Argentina posee una gran diversidad de ambientes, desde bosques subtropicales hasta regiones templadas y áridas.",
        importancia:
            "Sus bosques y áreas naturales albergan numerosas especies de flora y fauna.",
        especie:
            "Yaguareté"
    },

    Brasil: {
        descripcion:
            "Brasil contiene grandes extensiones de bosques tropicales y otros ecosistemas de gran diversidad.",
        importancia:
            "La conservación de sus bosques tiene importancia para la biodiversidad y el equilibrio climático.",
        especie:
            "Jaguar"
    },

    Bolivia: {
        descripcion:
            "Bolivia posee una amplia variedad de ecosistemas, incluyendo zonas de bosque tropical.",
        importancia:
            "Sus áreas naturales protegen una gran diversidad de especies.",
        especie:
            "Jaguar"
    },

    Chile: {
        descripcion:
            "Chile posee diversos ecosistemas debido a su gran extensión de norte a sur.",
        importancia:
            "Sus áreas protegidas ayudan a conservar ecosistemas y especies adaptadas a diferentes condiciones.",
        especie:
            "Cóndor andino"
    },

    Uruguay: {
        descripcion:
            "Uruguay posee diferentes ambientes naturales, incluyendo bosques nativos y humedales.",
        importancia:
            "La conservación de sus ecosistemas contribuye a proteger la biodiversidad.",
        especie:
            "Carpincho"
    },

    Colombia: {
        descripcion:
            "Colombia presenta una gran diversidad biológica y diferentes tipos de bosques.",
        importancia:
            "La conservación de sus bosques ayuda a proteger una elevada diversidad de especies.",
        especie:
            "Oso de anteojos"
    },

    México: {
        descripcion:
            "México posee una amplia variedad de ecosistemas, desde bosques templados hasta selvas tropicales.",
        importancia:
            "Sus ecosistemas son importantes para numerosas especies de flora y fauna.",
        especie:
            "Ajolote"
    },

    España: {
        descripcion:
            "España cuenta con bosques mediterráneos, atlánticos y otros ecosistemas.",
        importancia:
            "La conservación forestal contribuye a proteger la biodiversidad y reducir la degradación del suelo.",
        especie:
            "Lince ibérico"
    },

    "Estados Unidos": {
        descripcion:
            "Estados Unidos posee una gran variedad de ecosistemas forestales.",
        importancia:
            "Sus áreas protegidas permiten conservar diferentes especies y paisajes naturales.",
        especie:
            "Águila calva"
    }

};


/* =====================================================
   SITIOS NATURALES DE PARAGUAY
===================================================== */

const paraguaySites = [

    {
        nombre: "Parque Nacional Defensores del Chaco",

        coords: [-20.3500, -60.1500],

        descripcion:
            "Una de las áreas protegidas más extensas del Paraguay, ubicada en la región Occidental.",

        importancia:
            "Protege ecosistemas del Chaco y numerosas especies de flora y fauna.",

        especie:
            "Taguá"
    },

    {
        nombre: "Parque Nacional Médanos del Chaco",

        coords: [-21.7000, -61.6500],

        descripcion:
            "Área protegida ubicada en el Chaco paraguayo, caracterizada por sus paisajes de dunas y vegetación adaptada.",

        importancia:
            "Conserva ecosistemas chaqueños y especies adaptadas a condiciones ambientales particulares.",

        especie:
            "Guanaco"
    },

    {
        nombre: "Reserva Natural del Bosque Mbaracayú",

        coords: [-24.1000, -55.0000],

        descripcion:
            "Área natural que conserva uno de los remanentes importantes del Bosque Atlántico del Alto Paraná.",

        importancia:
            "Contribuye a conservar biodiversidad y hábitats forestales.",

        especie:
            "Yaguareté"
    },

    {
        nombre: "Reserva para Parque Nacional San Rafael",

        coords: [-26.6333, -55.6833],

        descripcion:
            "Zona de gran importancia para la conservación de bosques y biodiversidad en la región Oriental.",

        importancia:
            "Conserva remanentes de bosque y diferentes especies de flora y fauna.",

        especie:
            "Pecarí"
    },

    {
        nombre: "Parque Nacional Ñacunday",

        coords: [-26.0333, -54.7000],

        descripcion:
            "Área protegida de la región Oriental que incluye importantes formaciones boscosas y cursos de agua.",

        importancia:
            "Ayuda a conservar bosques, recursos hídricos y biodiversidad.",

        especie:
            "Tucán"
    }

];


/* =====================================================
   CREACIÓN DEL MAPA
===================================================== */

function inicializarMapa() {

    if (typeof L === "undefined") {

        console.error("Leaflet no pudo cargarse.");

        return;
    }


    if (mapaInicializado) {
        return;
    }


    map = L.map("map").setView(
        [-23.4425, -58.4438],
        4
    );


    /* Mapa base */

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        }
    ).addTo(map);


    /* =================================================
       MARCADORES DE PAÍSES
    ================================================= */

    Object.keys(countryCoords).forEach(pais => {

        const coordenadas = countryCoords[pais];

        const info = countryInfo[pais];


        const contenido = `

            <div>

                <div class="popup-titulo">
                    ${pais}
                </div>

                <p>
                    ${info.descripcion}
                </p>

                <p>
                    <strong>Importancia:</strong>
                    ${info.importancia}
                </p>

                <p class="popup-especie">
                    Especie destacada: ${info.especie}
                </p>

            </div>

        `;


        L.marker(coordenadas)
            .addTo(map)
            .bindPopup(contenido);

    });


    /* =================================================
       MARCADORES VERDES DE PARAGUAY
    ================================================= */

    paraguaySites.forEach(sitio => {

        const contenido = `

            <div>

                <div class="popup-titulo">
                    ${sitio.nombre}
                </div>

                <p>
                    ${sitio.descripcion}
                </p>

                <p>
                    <strong>Importancia:</strong>
                    ${sitio.importancia}
                </p>

                <p class="popup-especie">
                    Especie destacada: ${sitio.especie}
                </p>

            </div>

        `;


        L.circleMarker(
            sitio.coords,
            {
                radius: 9,
                color: "#126b37",
                fillColor: "#1e8f4d",
                fillOpacity: 0.9,
                weight: 2
            }
        )
        .addTo(map)
        .bindPopup(contenido);

    });


    /* =================================================
       LEYENDA DEL MAPA
    ================================================= */

    const leyenda = L.control({
        position: "bottomright"
    });


    leyenda.onAdd = function () {

        const div = L.DomUtil.create(
            "div",
            "info legend"
        );

        div.style.background = "white";
        div.style.padding = "10px";
        div.style.borderRadius = "8px";
        div.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";


        div.innerHTML = `

            <strong>Referencias</strong><br><br>

            <span style="
                display:inline-block;
                width:12px;
                height:12px;
                background:#3388ff;
                border-radius:50%;
                margin-right:5px;
            "></span>

            País<br>

            <span style="
                display:inline-block;
                width:12px;
                height:12px;
                background:#1e8f4d;
                border-radius:50%;
                margin-right:5px;
            "></span>

            Área natural de Paraguay

        `;

        return div;
    };


    leyenda.addTo(map);


    mapaInicializado = true;


    setTimeout(() => {
        map.invalidateSize();
    }, 300);
}


/* =====================================================
   CORRECCIÓN DEL TEST
===================================================== */

function corregirTest() {

    const respuestasCorrectas = {

        p1: "b",
        p2: "b",
        p3: "a",
        p4: "d",
        p5: "b",
        p6: "c",
        p7: "a"

    };


    let correctas = 0;

    let respondidas = 0;

    const total = Object.keys(respuestasCorrectas).length;


    Object.keys(respuestasCorrectas).forEach(pregunta => {

        const seleccionada =
            document.querySelector(
                `input[name="${pregunta}"]:checked`
            );


        if (seleccionada) {

            respondidas++;

            if (
                seleccionada.value ===
                respuestasCorrectas[pregunta]
            ) {

                correctas++;

            }

        }

    });


    const porcentaje =
        Math.round((correctas / total) * 100);


    const resultado =
        document.getElementById("resultado");


    let mensaje = "";


    if (respondidas < total) {

        mensaje = `
            ⚠️ Respondiste ${respondidas} de ${total} preguntas.
            <br>
            Completa todas las preguntas para obtener el resultado.
        `;

    } else if (porcentaje >= 86) {

        mensaje = `
            🌳 ¡Excelente!
            <br>
            Obtuviste ${correctas} de ${total} respuestas correctas
            (${porcentaje}%).
        `;

    } else if (porcentaje >= 60) {

        mensaje = `
            🌱 ¡Muy bien!
            <br>
            Obtuviste ${correctas} de ${total} respuestas correctas
            (${porcentaje}%).
        `;

    } else {

        mensaje = `
            📚 Puedes seguir aprendiendo.
            <br>
            Obtuviste ${correctas} de ${total} respuestas correctas
            (${porcentaje}%).
        `;

    }


    resultado.innerHTML = mensaje;

    resultado.style.background = "#eef9f1";

    resultado.style.color = "#1f5d42";

    resultado.style.border =
        "2px solid #3ca66b";
}


/* =====================================================
   INICIO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        inicializarMapa();

    }
);