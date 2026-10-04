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


    if (id === "mapa") {

        if (!mapaInicializado) {
            inicializarMapa();
        }

        setTimeout(() => {

            if (map) {

                map.invalidateSize();

                map.setView(
                    [-23.4425, -58.4438],
                    4
                );

            }

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


/* =====================================================
   INFORMACIÓN + IMÁGENES
===================================================== */

const countryInfo = {

    Brasil: {

        deforestacion:
            "La Amazonía enfrenta una fuerte pérdida de bosques por agricultura, ganadería y extracción de recursos.",

        incendios:
            "Los incendios forestales pueden afectar grandes superficies de vegetación y liberar carbono almacenado en los ecosistemas.",

        carbono:
            "La deforestación y el cambio de uso del suelo generan importantes emisiones.",

        biodiversidad:
            "La Amazonía alberga una enorme diversidad de especies.",

        especies:
            ["Jaguar", "Tucán", "Arara azul"],

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


    Paraguay: {

        deforestacion:
            "El Gran Chaco pierde bosques principalmente por la expansión agropecuaria.",

        incendios:
            "Los incendios forestales pueden afectar grandes extensiones de vegetación y representar una amenaza para la biodiversidad.",

        carbono:
            "La agricultura, ganadería y deforestación contribuyen a las emisiones.",

        biodiversidad:
            "El Chaco conserva una gran diversidad de fauna nativa.",

        especies:
            ["Tatú carreta", "Jaguar", "Taguá"],

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


    Argentina: {

        deforestacion:
            "El Gran Chaco es una de las regiones más afectadas por la pérdida de bosques.",

        incendios:
            "Los incendios forestales pueden provocar pérdida de vegetación, afectar la fauna y deteriorar los ecosistemas.",

        carbono:
            "La agricultura y el cambio de uso del suelo contribuyen a las emisiones.",

        biodiversidad:
            "Las Yungas, el Chaco y la Patagonia poseen ecosistemas diversos.",

        especies:
            ["Yaguareté", "Huemul", "Cóndor andino"],

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


    Chile: {

        deforestacion:
            "Los bosques nativos del centro-sur enfrentan pérdida y degradación.",

        incendios:
            "Los incendios forestales pueden producir pérdida de cobertura vegetal y afectar ecosistemas completos.",

        carbono:
            "Los incendios liberan carbono almacenado en la vegetación.",

        biodiversidad:
            "Sus bosques templados contienen numerosas especies únicas.",

        especies:
            ["Huemul", "Pudú", "Cóndor andino"],

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


    España: {

        deforestacion:
            "La pérdida directa de bosques es menor, pero existen procesos de fragmentación y degradación.",

        incendios:
            "Los incendios forestales constituyen una amenaza para los ecosistemas mediterráneos.",

        carbono:
            "El transporte, la industria y la energía son fuentes importantes de emisiones.",

        biodiversidad:
            "Los ecosistemas mediterráneos son diversos y vulnerables.",

        especies:
            ["Lince ibérico", "Águila imperial ibérica", "Oso pardo"],

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


    Colombia: {

        deforestacion:
            "La Amazonía y otras regiones boscosas sufren deforestación por actividades agropecuarias.",

        incendios:
            "Los incendios pueden afectar bosques, áreas naturales y comunidades.",

        carbono:
            "La deforestación genera una parte importante de las emisiones.",

        biodiversidad:
            "Colombia posee una de las mayores biodiversidades del planeta.",

        especies:
            ["Oso de anteojos", "Jaguar", "Cóndor andino"],

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


    México: {

        deforestacion:
            "Las selvas del sur y bosques de la Sierra Madre sufren pérdida de cobertura forestal.",

        incendios:
            "Los incendios forestales pueden afectar selvas, bosques y áreas protegidas.",

        carbono:
            "Energía, transporte, industria y cambio de uso del suelo generan emisiones.",

        biodiversidad:
            "México es un país megadiverso con numerosas especies endémicas.",

        especies:
            ["Ajolote", "Jaguar", "Águila real"],

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


    "Estados Unidos": {

        deforestacion:
            "Existen procesos de transformación y degradación de algunos ecosistemas forestales.",

        incendios:
            "Los incendios forestales pueden afectar grandes extensiones de bosques y otros ecosistemas.",

        carbono:
            "El transporte, la industria y la energía generan gran parte de las emisiones.",

        biodiversidad:
            "Posee ecosistemas que van desde bosques hasta desiertos.",

        especies:
            ["Águila calva", "Bisonte americano", "Oso grizzly"],

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


    Bolivia: {

        deforestacion:
            "La Amazonía y la Chiquitanía sufren pérdida de bosques por expansión agropecuaria.",

        incendios:
            "Los incendios forestales pueden afectar bosques y áreas naturales.",

        carbono:
            "La quema de bosques y pastizales genera importantes emisiones.",

        biodiversidad:
            "La Amazonía y la Chiquitanía albergan una gran diversidad.",

        especies:
            ["Jaguar", "Paraba azul", "Oso andino"],

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


    Uruguay: {

        deforestacion:
            "Los bosques nativos son afectados por la transformación del territorio.",

        incendios:
            "Los incendios forestales pueden afectar bosques, pastizales y áreas naturales.",

        carbono:
            "La agricultura y ganadería tienen un papel importante en las emisiones.",

        biodiversidad:
            "Sus pastizales, humedales y bosques albergan numerosas especies.",

        especies:
            ["Carpincho", "Ñandú", "Venado de campo"],

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
   GENERAR IMÁGENES
===================================================== */

function imagenSrc(nombre) {

    return "imagenes/" +
        encodeURIComponent(nombre + ".jpg");

}


function generarImagenes(lista) {

    if (!lista || lista.length === 0) {
        return "";
    }


    return `
        <div class="galeria-categoria">

            ${lista.map(nombre => `

                <img
                    class="imagen-categoria"
                    src="${imagenSrc(nombre)}"
                    alt="${nombre}"
                    title="${nombre}"
                    onerror="this.style.display='none';"
                >

            `).join("")}

        </div>
    `;

}


/* =====================================================
   GENERAR CATEGORÍA
===================================================== */

function generarCategoria(
    id,
    icono,
    titulo,
    texto,
    imagenes
) {

    return `

        <div class="categoria-mapa">

            <button
                class="categoria-boton"
                onclick="toggleCategoria('${id}')"
            >

                <span>
                    ${icono} ${titulo}
                </span>

                <span class="flecha">
                    ▼
                </span>

            </button>


            <div
                id="${id}"
                class="categoria-contenido"
            >

                <p>
                    ${texto}
                </p>

                ${generarImagenes(imagenes)}

            </div>

        </div>

    `;

}


/* =====================================================
   ABRIR / CERRAR CATEGORÍAS
===================================================== */

function toggleCategoria(id) {

    const contenido =
        document.getElementById(id);

    if (!contenido) {
        return;
    }


    const boton =
        contenido.previousElementSibling;


    contenido.classList.toggle("activo");


    if (boton) {

        boton.classList.toggle(
            "abierta"
        );

    }

}


/* =====================================================
   MOSTRAR INFORMACIÓN DEL PAÍS
===================================================== */

function mostrarInformacionPais(pais) {

    const info =
        countryInfo[pais];

    const contenedor =
        document.getElementById("mapInfo");


    if (!info || !contenedor) {
        return;
    }


    const idBase =
        "pais-" +
        pais
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase();


    contenedor.innerHTML = `

        <h3 class="mapInfo-titulo">
             ${pais}
        </h3>


        ${generarCategoria(
            idBase + "-deforestacion",
            "Deforestación",
            info.deforestacion,
            info.imagenes.deforestacion
        )}


        ${generarCategoria(
            idBase + "-incendios",,
            "Incendios forestales",
            info.incendios,
            info.imagenes.incendios
        )}


        ${generarCategoria(
            idBase + "-carbono",
         
            "Huella de carbono",
            info.carbono,
            info.imagenes.carbono
        )}


        ${generarCategoria(
            idBase + "-biodiversidad",
        
            "Biodiversidad",
            info.biodiversidad,
            info.imagenes.biodiversidad
        )}


        ${generarCategoria(
            idBase + "-especies",
         
            "Especies destacadas",
            "Entre las especies destacadas de esta región se encuentran: " +
            info.especies.join(", ") + ".",
            info.imagenes.especies
        )}

    `;


    /*
        Lleva la vista suavemente hacia
        la información que apareció
        debajo del mapa.
    */

    setTimeout(() => {

        contenedor.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =====================================================
   MOSTRAR INFORMACIÓN DE SITIOS DE PARAGUAY
===================================================== */

function mostrarInformacionSitio(sitio) {

    const contenedor =
        document.getElementById("mapInfo");


    if (!contenedor) {
        return;
    }


    const idBase =
        "sitio-" +
        sitio.nombre
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase();


    const infoParaguay =
        countryInfo.Paraguay;


    contenedor.innerHTML = `

        <h3 class="mapInfo-titulo">
             ${sitio.nombre}
        </h3>


        ${generarCategoria(
            idBase + "-deforestacion",
           
            "Deforestación",
            sitio.descripcion,
            infoParaguay.imagenes.deforestacion
        )}


        ${generarCategoria(
            idBase + "-incendios",
       
            "Incendios forestales",
            "Los incendios forestales representan una amenaza para las áreas naturales protegidas y pueden afectar la vegetación y la fauna.",
            infoParaguay.imagenes.incendios
        )}


        ${generarCategoria(
            idBase + "-carbono",
           
            "Huella de carbono",
            infoParaguay.carbono,
            infoParaguay.imagenes.carbono
        )}


        ${generarCategoria(
            idBase + "-biodiversidad",
            
            "Biodiversidad",
            sitio.importancia,
            infoParaguay.imagenes.biodiversidad
        )}


        ${generarCategoria(
            idBase + "-especies",
           
            "Especies destacadas",
            "Especie destacada: " + sitio.especie + ".",
            [
                sitio.especie
            ]
        )}

    `;


    setTimeout(() => {

        contenedor.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =====================================================
   CREACIÓN DEL MAPA
===================================================== */

function inicializarMapa() {

    if (typeof L === "undefined") {

        console.error(
            "Leaflet no pudo cargarse."
        );

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

    Object.keys(countryCoords).forEach(
        pais => {

            const coordenadas =
                countryCoords[pais];


            const marker =
                L.marker(coordenadas)
                    .addTo(map);


            marker.bindPopup(`
                <div>
                    <div class="popup-titulo">
                        ${pais}
                    </div>

                    <p>
                        Haz clic en el marcador para
                        ver las categorías de información
                        debajo del mapa.
                    </p>
                </div>
            `);


            marker.on(
                "click",
                () => {

                    mostrarInformacionPais(
                        pais
                    );

                }
            );

        }
    );


    /* =================================================
       MARCADORES VERDES DE PARAGUAY
    ================================================= */

    paraguaySites.forEach(
        sitio => {

            const marker =
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
                .addTo(map);


            marker.bindPopup(`
                <div>

                    <div class="popup-titulo">
                        ${sitio.nombre}
                    </div>

                    <p>
                        Haz clic en el marcador para
                        ver las categorías de información
                        debajo del mapa.
                    </p>

                </div>
            `);


            marker.on(
                "click",
                () => {

                    mostrarInformacionSitio(
                        sitio
                    );

                }
            );

        }
    );


    /* =================================================
       LEYENDA DEL MAPA
    ================================================= */

    const leyenda =
        L.control({
            position: "bottomright"
        });


    leyenda.onAdd =
        function() {

            const div =
                L.DomUtil.create(
                    "div",
                    "info legend"
                );


            div.style.background =
                "white";

            div.style.padding =
                "10px";

            div.style.borderRadius =
                "8px";

            div.style.boxShadow =
                "0 2px 8px rgba(0,0,0,0.2)";


            div.innerHTML = `

                <strong>
                    Referencias
                </strong>

                <br><br>


                <span style="
                    display:inline-block;
                    width:12px;
                    height:12px;
                    background:#3388ff;
                    border-radius:50%;
                    margin-right:5px;
                "></span>

                País

                <br>


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


    setTimeout(
        () => {

            map.invalidateSize();

        },
        300
    );

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

    const total =
        Object.keys(
            respuestasCorrectas
        ).length;


    Object.keys(
        respuestasCorrectas
    ).forEach(
        pregunta => {

            const seleccionada =
                document.querySelector(
                    `input[name="${pregunta}"]:checked`
                );


            if (seleccionada) {

                respondidas++;


                if (
                    seleccionada.value ===
                    respuestasCorrectas[
                        pregunta
                    ]
                ) {

                    correctas++;

                }

            }

        }
    );


    const porcentaje =
        Math.round(
            (correctas / total) * 100
        );


    const resultado =
        document.getElementById(
            "resultado"
        );


    let mensaje = "";


    if (respondidas < total) {

        mensaje = `
             Respondiste ${respondidas} de ${total} preguntas.
            <br>
            Completa todas las preguntas para obtener el resultado.
        `;

    }

    else if (porcentaje >= 86) {

        mensaje = `
             ¡Excelente!
            <br>
            Obtuviste ${correctas} de ${total}
            respuestas correctas
            (${porcentaje}%).
        `;

    }

    else if (porcentaje >= 60) {

        mensaje = `
             ¡Muy bien!
            <br>
            Obtuviste ${correctas} de ${total}
            respuestas correctas
            (${porcentaje}%).
        `;

    }

    else {

        mensaje = `
             Puedes seguir aprendiendo.
            <br>
            Obtuviste ${correctas} de ${total}
            respuestas correctas
            (${porcentaje}%).
        `;

    }


    resultado.innerHTML =
        mensaje;


    resultado.style.background =
        "#eef9f1";

    resultado.style.color =
        "#1f5d42";

    resultado.style.border =
        "2px solid #3ca66b";

}


/* =====================================================
   INICIO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
            Ahora el mapa se inicializa al entrar
            a la sección Mapa.
        */

        if (
            document.getElementById("mapa")
            .classList.contains("activa")
        ) {

            inicializarMapa();

        }

    }
);
