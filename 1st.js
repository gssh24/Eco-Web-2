// ============================================================
// NORMALIZAR NOMBRES
// ============================================================

function normalizeName(str) {

    if (!str) return "";

    try {

        return str
            .toString()
            .normalize('NFD')
            .replace(/\p{M}/gu, '')
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();

    } catch (e) {

        return str
            .toString()
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();

    }
}


// ============================================================
// IMÁGENES
// ============================================================

// Genera la ruta correcta para cada imagen de la carpeta "imagenes"

function imagenSrc(nombre) {

    return "imagenes/" + encodeURIComponent(nombre + ".jpg");

}


// Genera el HTML de una o varias imágenes

function generarImagenes(lista) {

    if (!lista || lista.length === 0) {
        return "";
    }

    return `
        <div class="image-grid">

            ${lista.map(nombre => `

                <div class="image-container">

                    <img
                        src="${imagenSrc(nombre)}"
                        alt="${nombre}"
                        onerror="this.style.display='none'; this.parentElement.style.display='none';"
                    >

                </div>

            `).join("")}

        </div>
    `;

}


// ============================================================
// SECCIONES
// ============================================================

function mostrarInfo() {

    document
        .getElementById("infoSection")
        .classList
        .remove("hidden");

    document
        .getElementById("mapSection")
        .classList
        .add("hidden");

    document
        .getElementById("quizSection")
        .classList
        .add("hidden");


    if (!document.getElementById("infoContent").innerHTML.trim()) {

        document.getElementById("infoContent").innerHTML = `

            <h3>🌳 Deforestación</h3>

            <p>
                La deforestación es la pérdida de bosques y selvas
                por actividades humanas como la agricultura,
                ganadería, minería y urbanización.
            </p>


            <h3>🔥 Incendios forestales</h3>

            <p>
                Los incendios forestales destruyen hábitats,
                liberan CO₂ y afectan a comunidades enteras.
                Pueden ser provocados o naturales, pero el cambio
                climático puede intensificar las condiciones
                favorables para su propagación.
            </p>


            <h3>🌍 Huella de carbono</h3>

            <p>
                La huella de carbono mide los gases de efecto
                invernadero emitidos por una persona, actividad,
                organización o territorio. La deforestación y los
                incendios pueden contribuir al aumento de estas
                emisiones.
            </p>


            <h3>🦉 Biodiversidad</h3>

            <p>
                Los bosques son el hogar de millones de especies.
                La pérdida de estos ecosistemas amenaza la
                supervivencia de flora y fauna únicas.
            </p>

        `;
    }

}


function mostrarMapa() {

    document
        .getElementById("infoSection")
        .classList
        .add("hidden");

    document
        .getElementById("mapSection")
        .classList
        .remove("hidden");

    document
        .getElementById("quizSection")
        .classList
        .add("hidden");


    setTimeout(() => {

        if (window.map) {

            window.map.invalidateSize();

        }

    }, 200);

}


function mostrarCuestionario() {

    document
        .getElementById("infoSection")
        .classList
        .add("hidden");

    document
        .getElementById("mapSection")
        .classList
        .add("hidden");

    document
        .getElementById("quizSection")
        .classList
        .remove("hidden");


    cargarCuestionario();

}


// ============================================================
// INICIALIZACIÓN
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("btnInfo")
        .addEventListener("click", mostrarInfo);


    document
        .getElementById("btnMapa")
        .addEventListener("click", mostrarMapa);


    document
        .getElementById("btnQuiz")
        .addEventListener("click", mostrarCuestionario);


    mostrarInfo();


    initMapAndData();


    document
        .getElementById("submitQuiz")
        .addEventListener("click", handleSubmitQuiz);

});


// ============================================================
// DATOS Y MAPA
// ============================================================

function initMapAndData() {


    // Crear mapa

    window.map = L
        .map("map", {
            preferCanvas: true
        })
        .setView([0, 0], 2);


    // Mapa base de OpenStreetMap

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 18,
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(window.map);


    // ========================================================
    // INFORMACIÓN DE LOS PAÍSES
    // ========================================================

    const countryInfo = {


        // ----------------------------------------------------
        // BRASIL
        // ----------------------------------------------------

        "Brasil": {

            deforestacion:
                "La Amazonía enfrenta una fuerte pérdida de bosques por agricultura, ganadería y extracción de recursos.",

            incendios:
                "21 de septiembre de 2026 — Aldeia Canoanã, Tocantins. Un incendio afectó la comunidad y fue controlado por equipos del IBAMA.",

            carbono:
                "La deforestación y el cambio de uso del suelo generan importantes emisiones.",

            biodiversidad:
                "La Amazonía alberga una enorme diversidad de especies.",

            especies: [
                "Jaguar",
                "Tucán",
                "Arara azul"
            ],


            imagenes: {

                deforestacion: [
                    "deforestación br",
                    "Amazonía br1",
                    "Amazonía br2"
                ],

                incendios: [
                    "incendio br",
                    "incendio br2",
                    "incendio br3"
                ],

                carbono: [
                    "Amazonía br1",
                    "Amazonía br2",
                    "Amazonía br3"
                ],

                biodiversidad: [
                    "Amazonía br1",
                    "Amazonía br2",
                    "Amazonía br3"
                ],

                especies: [
                    "Jaguar",
                    "Tucán",
                    "Arara azul"
                ]

            }

        },


        // ----------------------------------------------------
        // PARAGUAY
        // ----------------------------------------------------

        "Paraguay": {

            deforestacion:
                "El Gran Chaco pierde bosques principalmente por la expansión agropecuaria.",

            incendios:
                "21 de septiembre de 2026 — San Pedro. Un incendio detectado por satélite afectó una superficie estimada de 1.426 hectáreas.",

            carbono:
                "La agricultura, ganadería y deforestación contribuyen a las emisiones.",

            biodiversidad:
                "El Chaco conserva una gran diversidad de fauna nativa.",

            especies: [
                "Tatú carreta",
                "Jaguar",
                "Taguá"
            ],


            imagenes: {

                deforestacion: [
                    "deforestación py",
                    "Chaco P1",
                    "Chaco py1"
                ],

                incendios: [
                    "Incendios py",
                    "incendios py2",
                    "Incendios py3"
                ],

                carbono: [
                    "agricultura py",
                    "deforestación py",
                    "ganadería py"
                ],

                biodiversidad: [
                    "Chaco P1",
                    "Chaco P2",
                    "Chaco P3"
                ],

                especies: [
                    "Tatú carreta",
                    "Jaguar",
                    "tagua"
                ]

            }

        },


        // ----------------------------------------------------
        // ARGENTINA
        // ----------------------------------------------------

        "Argentina": {

            deforestacion:
                "El Gran Chaco es una de las regiones más afectadas por la pérdida de bosques.",

            incendios:
                "28 de septiembre de 2026 — Salsacate y Villa Berna, Córdoba. Fueron extinguidos dos focos forestales registrados en el noroeste provincial.",

            carbono:
                "La agricultura y el cambio de uso del suelo contribuyen a las emisiones.",

            biodiversidad:
                "Las Yungas, el Chaco y la Patagonia poseen ecosistemas diversos.",

            especies: [
                "Yaguareté",
                "Huemul",
                "Cóndor andino"
            ],


            imagenes: {

                deforestacion: [
                    "bosque arg",
                    "Chaco A",
                    "Suelo Arg"
                ],

                incendios: [
                    "Chaco inceA",
                    "Chaco inceA2",
                    "Incendios Arg1"
                ],

                carbono: [
                    "agricultura Arg",
                    "Suelo Arg",
                    "Chaco A"
                ],

                biodiversidad: [
                    "Las Yungas",
                    "Patagonia",
                    "bosque arg"
                ],

                especies: [
                    "Yaguareté",
                    "Huemul",
                    "Cóndor andino"
                ]

            }

        },


        // ----------------------------------------------------
        // CHILE
        // ----------------------------------------------------

        "Chile": {

            deforestacion:
                "Los bosques nativos del centro-sur enfrentan pérdida y degradación.",

            incendios:
                "26 de septiembre de 2026 — Región de Ñuble. CONAF registró un incendio forestal durante ese día.",

            carbono:
                "Los incendios liberan carbono almacenado en la vegetación.",

            biodiversidad:
                "Sus bosques templados contienen numerosas especies únicas.",

            especies: [
                "Huemul",
                "Pudú",
                "Cóndor andino"
            ],


            imagenes: {

                deforestacion: [
                    "bosques chi",
                    "bosques chi2",
                    "bosquesnat chi"
                ],

                incendios: [
                    "incendios chi1",
                    "Incendios chi2 26",
                    "incendios chi2"
                ],

                carbono: [
                    "bosques chi",
                    "bosquesnat chi",
                    "incendios chi2"
                ],

                biodiversidad: [
                    "bosquesnat chi",
                    "bosquesnat chi2",
                    "bosques chi2"
                ],

                especies: [
                    "Huemul",
                    "Pudú",
                    "Cóndor andino"
                ]

            }

        },


        // ----------------------------------------------------
        // ESPAÑA
        // ----------------------------------------------------

        "España": {

            deforestacion:
                "La pérdida directa de bosques es menor, pero existen fragmentación y degradación.",

            incendios:
                "27 de septiembre de 2026 — Quiroga, Lugo. Fue extinguido un incendio forestal que afectó unas 467 hectáreas.",

            carbono:
                "El transporte, la industria y la energía son fuentes importantes de emisiones.",

            biodiversidad:
                "Los ecosistemas mediterráneos son diversos y vulnerables.",

            especies: [
                "Lince ibérico",
                "Águila imperial ibérica",
                "Oso pardo"
            ],


            imagenes: {

                deforestacion: [
                    "deforestacion esp",
                    "ecosistemas esp",
                    "ecosistemas esp2"
                ],

                incendios: [
                    "Incendios esp",
                    "Incendios esp2",
                    "Incendios esp3"
                ],

                carbono: [
                    "transporte esp",
                    "industria esp",
                    "energía esp"
                ],

                biodiversidad: [
                    "ecosistemas esp",
                    "ecosistemas esp2",
                    "Lince ibérico"
                ],

                especies: [
                    "Lince ibérico",
                    "Águila imperial ibérica",
                    "Oso pardo"
                ]

            }

        },


        // ----------------------------------------------------
        // COLOMBIA
        // ----------------------------------------------------

        "Colombia": {

            deforestacion:
                "La Amazonía y otras regiones boscosas sufren deforestación por actividades agropecuarias.",

            incendios:
                "19 de septiembre de 2026 — Villa de Leyva, Boyacá. Un incendio avanzó desde el cerro San Marcos hacia el Santuario de Iguaque.",

            carbono:
                "La deforestación genera una parte importante de las emisiones.",

            biodiversidad:
                "Colombia posee una de las mayores biodiversidades del planeta.",

            especies: [
                "Oso de anteojos",
                "Jaguar",
                "Cóndor andino"
            ],


            imagenes: {

                deforestacion: [
                    "deforestación col",
                    "deforestación col2",
                    "deforestación col3"
                ],

                incendios: [
                    "Incendios col",
                    "Incendios col2",
                    "Incendios col3"
                ],

                carbono: [
                    "deforestación col",
                    "deforestación col2",
                    "deforestación col3"
                ],

                biodiversidad: [
                    "biodivercidad col",
                    "biodivercidad col2",
                    "Amazonía col"
                ],

                especies: [
                    "Oso de anteojos",
                    "Jaguar",
                    "Cóndor andino"
                ]

            }

        },


        // ----------------------------------------------------
        // MÉXICO
        // ----------------------------------------------------

        "México": {

            deforestacion:
                "Las selvas del sur y bosques de la Sierra Madre sufren pérdida de cobertura forestal.",

            incendios:
                "22 de septiembre de 2026 — Calkiní, Campeche. Un incendio en Los Petenes afectaba unas 1.750 hectáreas según el sistema oficial de monitoreo.",

            carbono:
                "Energía, transporte, industria y cambio de uso del suelo generan emisiones.",

            biodiversidad:
                "México es un país megadiverso con numerosas especies endémicas.",

            especies: [
                "Ajolote",
                "Jaguar",
                "Águila real"
            ],


            imagenes: {

                deforestacion: [
                    "selvas mex",
                    "selvas mex2",
                    "naturaleza mex"
                ],

                incendios: [
                    "Incendios mex",
                    "Incendios mex2",
                    "Incendios mex3"
                ],

                carbono: [
                    "energía mex",
                    "transporte mex",
                    "industria"
                ],

                biodiversidad: [
                    "naturaleza mex",
                    "naturaleza mex2",
                    "selvas mex2"
                ],

                especies: [
                    "Ajolote",
                    "Jaguar",
                    "Águila real"
                ]

            }

        },


        // ----------------------------------------------------
        // ESTADOS UNIDOS
        // ----------------------------------------------------

        "Estados Unidos": {

            deforestacion:
                "Existen procesos de transformación y degradación de algunos ecosistemas forestales.",

            incendios:
                "28 de septiembre de 2026 — Estados Unidos. El NIFC reportó 17 grandes incendios activos en el país.",

            carbono:
                "El transporte, la industria y la energía generan gran parte de las emisiones.",

            biodiversidad:
                "Posee ecosistemas que van desde bosques hasta desiertos.",

            especies: [
                "Águila calva",
                "Bisonte americano",
                "Oso grizzly"
            ],


            imagenes: {

                deforestacion: [
                    "bosques uss",
                    "bosques uss2",
                    "desiertos uss"
                ],

                incendios: [
                    "Incendios uss1",
                    "Incendios uss2",
                    "Incendios uss3"
                ],

                carbono: [
                    "autopistas uss",
                    "industria uss",
                    "energía uss"
                ],

                biodiversidad: [
                    "bosques uss",
                    "bosques uss2",
                    "desiertos uss"
                ],

                especies: [
                    "Águila calva",
                    "Bisonte americano",
                    "Oso grizzly"
                ]

            }

        },


        // ----------------------------------------------------
        // BOLIVIA
        // ----------------------------------------------------

        "Bolivia": {

            deforestacion:
                "La Amazonía y la Chiquitanía sufren pérdida de bosques por expansión agropecuaria.",

            incendios:
                "11 de septiembre de 2026 — El Puente, Tarija. Un incendio forestal movilizó a bomberos y equipos de emergencia.",

            carbono:
                "La quema de bosques y pastizales genera importantes emisiones.",

            biodiversidad:
                "La Amazonía y la Chiquitanía albergan una gran diversidad.",

            especies: [
                "Jaguar",
                "Paraba azul",
                "Oso andino"
            ],


            imagenes: {

                deforestacion: [
                    "Amazonía bol",
                    "Amazonía bol3",
                    "Chiquitanía"
                ],

                incendios: [
                    "Incendios bol",
                    "Incendios bol2",
                    "Incendios bol3"
                ],

                carbono: [
                    "quema de bosques bol",
                    "pastizales bol",
                    "Amazonía bol"
                ],

                biodiversidad: [
                    "Amazonía bol",
                    "Amazonía bol3",
                    "Chiquitanía"
                ],

                especies: [
                    "Jaguar",
                    "Paraba azul",
                    "Oso andino"
                ]

            }

        },


        // ----------------------------------------------------
        // URUGUAY
        // ----------------------------------------------------

        "Uruguay": {

            deforestacion:
                "Los bosques nativos son afectados por la transformación del territorio.",

            incendios:
                "21 de septiembre de 2026 — Maldonado. Se registró un incendio que afectó una vivienda; no se encontró un registro reciente verificable de incendio forestal.",

            carbono:
                "La agricultura y ganadería tienen un papel importante en las emisiones.",

            biodiversidad:
                "Sus pastizales, humedales y bosques albergan numerosas especies.",

            especies: [
                "Carpincho",
                "Ñandú",
                "Venado de campo"
            ],


            imagenes: {

                deforestacion: [
                    "bosques uru",
                    "bosquesnat uru1",
                    "bosquesnat uru2"
                ],

                incendios: [
                    "Incendios uru1",
                    "Incendios uru2",
                    "Incendios uru3"
                ],

                carbono: [
                    "agricultura uru",
                    "ganadería uru",
                    "pastizales uru"
                ],

                biodiversidad: [
                    "humedales uru",
                    "bosquesnat uru1",
                    "bosquesnat uru2"
                ],

                especies: [
                    "Carpincho",
                    "Ñandú",
                    "Venado de campo"
                ]

            }

        }

    };


    // ========================================================
    // COORDENADAS DE LOS PAÍSES
    // ========================================================

    const countryCoords = {

        "Brasil": [-14.235, -51.925],

        "Paraguay": [-23.4425, -58.4438],

        "Argentina": [-38.4161, -63.6167],

        "Chile": [-35.6751, -71.543],

        "España": [40.4637, -3.7492],

        "Colombia": [4.5709, -74.2973],

        "México": [23.6345, -102.5528],

        "Estados Unidos": [37.0902, -95.7129],

        "Bolivia": [-16.2902, -63.5887],

        "Uruguay": [-32.5228, -55.7658]

    };


    // ========================================================
    // CREAR MARCADORES
    // ========================================================

    for (const [pais, coords] of Object.entries(countryCoords)) {

        const marker = L
            .marker(coords)
            .addTo(window.map)
            .bindPopup(
                `<b>${pais}</b><br>Haz clic para más información`
            );


        marker.on("click", () => {

            const info = countryInfo[pais];


            if (info) {

                document.getElementById("infoBox").innerHTML = `

                    <h2>${pais}</h2>


                    <h3>🌳 Estado forestal</h3>

                    <p>
                        ${info.deforestacion}
                    </p>

                    ${generarImagenes(
                        info.imagenes?.deforestacion
                    )}


                    <h3>🔥 Incendios</h3>

                    <p>
                        ${info.incendios}
                    </p>

                    ${generarImagenes(
                        info.imagenes?.incendios
                    )}


                    <h3>🌍 Huella de carbono</h3>

                    <p>
                        ${info.carbono}
                    </p>

                    ${generarImagenes(
                        info.imagenes?.carbono
                    )}


                    <h3>🦉 Biodiversidad</h3>

                    <p>
                        ${info.biodiversidad}
                    </p>

                    ${generarImagenes(
                        info.imagenes?.biodiversidad
                    )}


                    <h3>🐾 Especies destacadas</h3>

                    <p>
                        ${info.especies.join(" · ")}
                    </p>

                    ${generarImagenes(
                        info.imagenes?.especies
                    )}

                `;

            }

        });

    }

}


// ============================================================
// CUESTIONARIO
// ============================================================

const niveles = [


    // ========================================================
    // NIVEL 1
    // ========================================================

    {

        nombre: "Nivel 1",

        preguntas: [

            {

                q: "¿Cuál es la principal causa de la deforestación?",

                o: [
                    "Expansión agrícola",
                    "Turismo",
                    "Carreteras"
                ],

                a: "Expansión agrícola"

            },


            {

                q: "¿Qué gas aumenta por la deforestación?",

                o: [
                    "Oxígeno",
                    "CO₂",
                    "Nitrógeno"
                ],

                a: "CO₂"

            },


            {

                q: "¿Qué ecosistema es más afectado en Brasil?",

                o: [
                    "Amazonía",
                    "Sahara",
                    "Alpes"
                ],

                a: "Amazonía"

            },


            {

                q: "¿Qué recurso producen los árboles?",

                o: [
                    "Petróleo",
                    "Oxígeno",
                    "Plástico"
                ],

                a: "Oxígeno"

            }

        ]

    },


    // ========================================================
    // NIVEL 2
    // ========================================================

    {

        nombre: "Nivel 2",

        preguntas: [

            {

                q: "¿Qué país sufre deforestación en el Chaco?",

                o: [
                    "Paraguay",
                    "Canadá",
                    "Japón"
                ],

                a: "Paraguay"

            },


            {

                q: "¿Qué animales pierden hábitat por deforestación?",

                o: [
                    "Monos y aves",
                    "Tiburones",
                    "Pingüinos"
                ],

                a: "Monos y aves"

            },


            {

                q: "¿Qué provoca la desertificación?",

                o: [
                    "Pérdida de suelos fértiles",
                    "Más lluvias",
                    "Nieve"
                ],

                a: "Pérdida de suelos fértiles"

            },


            {

                q: "¿Qué ciclo natural altera la deforestación?",

                o: [
                    "Ciclo del agua",
                    "Ciclo lunar",
                    "Ciclo solar"
                ],

                a: "Ciclo del agua"

            }

        ]

    },


    // ========================================================
    // NIVEL 3
    // ========================================================

    {

        nombre: "Nivel 3",

        preguntas: [

            {

                q: "¿Qué país europeo sufre incendios en Galicia?",

                o: [
                    "España",
                    "Francia",
                    "Italia"
                ],

                a: "España"

            },


            {

                q: "¿Qué función cumplen los bosques?",

                o: [
                    "Producir oxígeno",
                    "Generar plástico",
                    "Fabricar autos"
                ],

                a: "Producir oxígeno"

            },


            {

                q: "¿Qué tipo de incendios pueden ser causados por rayos?",

                o: [
                    "Naturales",
                    "Artificiales",
                    "Industriales"
                ],

                a: "Naturales"

            },


            {

                q: "¿Qué palabra describe a quien cuida los bosques?",

                o: [
                    "Guardián",
                    "Consumidor",
                    "Destructor"
                ],

                a: "Guardián"

            }

        ]

    }

];


// ============================================================
// VARIABLE DEL NIVEL ACTUAL
// ============================================================

let nivelActual = 0;


// ============================================================
// CARGAR CUESTIONARIO
// ============================================================

function cargarCuestionario() {

    const quizContainer =
        document.getElementById("quiz");


    const resultBox =
        document.getElementById("quizResult");


    // Limpiar resultado anterior

    resultBox.innerText = "";


    // Crear título del nivel

    quizContainer.innerHTML =
        `<h3>${niveles[nivelActual].nombre}</h3>`;


    // Crear preguntas

    niveles[nivelActual].preguntas.forEach(
        (p, i) => {

            const div =
                document.createElement("div");


            div.innerHTML =
                `<p>${p.q}</p>` +

                p.o.map(
                    opt => `

                        <label>

                            <input
                                type="radio"
                                name="q${i}"
                                value="${opt}"
                            >

                            ${opt}

                        </label>

                        <br>

                    `
                ).join("");


            quizContainer.appendChild(div);

        }
    );

}


// ============================================================
// ENVIAR RESPUESTAS
// ============================================================

function handleSubmitQuiz() {


    let score = 0;


    const preguntas =
        niveles[nivelActual].preguntas;


    // Contar respuestas correctas

    preguntas.forEach(
        (p, i) => {

            const selected =
                document.querySelector(
                    `input[name="q${i}"]:checked`
                );


            if (
                selected &&
                selected.value === p.a
            ) {

                score++;

            }

        }
    );


    const resultBox =
        document.getElementById("quizResult");


    // ========================================================
    // PASAR DEL NIVEL 1 AL NIVEL 2
    // ========================================================

    if (nivelActual < niveles.length - 1) {

        resultBox.innerText =
            `Aciertos en ${niveles[nivelActual].nombre}: ` +
            `${score} de ${preguntas.length}. ` +
            `Avanza al siguiente nivel.`;


        nivelActual++;


        cargarCuestionario();


        return;
    }


    // ========================================================
    // RESULTADO FINAL
    // ========================================================

    let mensajeFinal = "";


    /*
       El último nivel tiene solamente 4 preguntas.

       Por eso los resultados deben estar entre 0 y 4.
    */


    if (score <= 1) {

        mensajeFinal =
            "🌱 Retoño del bosque: aún tienes mucho por aprender.";

    }

    else if (score <= 3) {

        mensajeFinal =
            "🍃 Amante de la naturaleza: buen conocimiento, sigue así.";

    }

    else {

        mensajeFinal =
            "🌍 Guardián del planeta: excelente, eres un protector del ambiente.";

    }


    resultBox.innerText =
        `Resultado final: ${mensajeFinal}`;

}