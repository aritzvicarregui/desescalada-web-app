const phases = [
  {
    name: "cero",
    actividades: {
      ceremonias: {
        cultos: null,
        bodas: null,
      },
      comercios: {
        pequeños: [
          "si",
          "Apertura de comercios de menos de 400m² con cita previa y atención individual.",
        ],
        grandes: null,
        mercadillos: null,
        cc: null,
      },
      hostelería: {
        takeaway: [
          "si",
          "Apertura de pequeños locales: atención  individual y con cita previa.",
        ],
        enlocal: null,
        terrazas: null,
        discotecas: null,
        hoteles: null,
      },
      deporte: {
        individual: ["si", "Sin abandonar el municipio de residencia"],
        profesional: null,
        competiciones: null,
      },
      cultura: {
        museos: null,
        bibliotecas: null,
      },
      ocio: {
        cine: null,
        espectáculos: null,
        exteriores: null,
      },
      funerales: {
        funerales: null,
      },
    },
  },
  {
    name: "uno",
    actividades: {
      ceremonias: {
        cultos: ["si", "Aforo limitado al 33%."],
        bodas: null,
      },
      comercios: {
        pequeños: [
          "si",
          "Apertura de comercios de menos de 400m², que no se encuentren dentro de parques o centros comerciales sin acceso directo e independiente desde el exterior. Mercadillos: aforo limitado al 25%.",
        ],
        grandes: null,
        mercadillos: [
          "si",
          "Apertura de mercadillos con funcionamiento hasta el 25% y aforo limitado al 30%.",
          "Prohibido el autoservicio y los productos de prueba.",
        ],
        cc: null,
      },
      hostelería: {
        takeaway: ["si", "Con cita previa"],
        enlocal: null,
        terrazas: [
          "si",
          "Apertura de terrazas con ciertas limitaciones: aforo hasta 30%-50%",
        ],
        discotecas: null,
        hoteles: [
          "si",
          "No se permite el uso de instalaciones de uso común, como piscinas, gimnasios o zonas de recreo.",
        ],
      },
      deporte: {
        individual: [
          "si",
          "Se podrán realizar actividades que no impliquen contacto físico ni uso de vestuarios",
        ],
        profesional: [
          "si",
          "Apertura de centros deportivos de alto rendimiento.",
        ],
        competiciones: null,
      },
      cultura: {
        museos: ["si", "Apertura de museos: aforo limitado al 33%."],
        bibliotecas: "si",
      },
      ocio: {
        cine: null,
        espectáculos: [
          "si",
          "Actividades culturales: aforo limitado al 33%",
          "Lugares cerrados: máximo 30 personas",
          "Al aire libre: máximo 200 personas sentadas.",
        ],
        exteriores: [
          "si",
          "Actividades culturales: aforo limitado al 33%",
          "Al aire libre: máximo 200 personas sentadas.",
        ],
      },
      funerales: {
        funerales: [
          "si",
          "Velatorios y actos fúnebres: aforo limitado de 15 personas en espacios al aire libre y de 10 personas en espacios cerrados.",
        ],
      },
    },
  },
  {
    name: "dos",
    actividades: {
      ceremonias: {
        cultos: ["si", "aforo limitado al 50%."],
        bodas: "si",
      },
      comercios: {
        pequeños: "si",
        grandes: "si",
        mercadillos: "si",
        cc: "si",
        texto:
          "Mercadillos: aforo limitado al 33%. Apertura de centros comerciales, salvo zonas comunes o áreas recreativas: aforo limitado al 40%.",
      },
      hostelería: {
        takeaway: "si",
        enlocal: "si",
        terrazas: "si",
        discotecas: null,
        hoteles: "si",
        texto:
          "Apertura de restaurantes y bares para el servicio de mesas, aforo limitado al 33% y respetando la distancia mínima recomendada. Apertura de zonas comunes en hoteles con restricciones específicas.",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones: "si",
        texto:
          "Campeonatos profesionales en partidos a puerta cerrada o con aforo limitado, con posibilidad de ser retransmitidos.",
      },
      cultura: {
        museos: "si",
        bibliotecas: "si",
        texto: "Apertura de bibliotecas limitado al servicio de préstamo.",
      },
      ocio: {
        cine: "si",
        espectáculos: "si",
        exteriores: "si",
        texto:
          "Apertura de cines y teatros: aforo limitado al 50%. Actividades culturales en lugares cerrados: máximo 50 personas, y al aire libre: máximo 400 personas sentadas.",
      },
      funerales: {
        funerales: "si",
      },
    },
  },
  {
    name: "tres",
    actividades: {
      ceremonias: {
        cultos: "si",
        bodas: "si",
      },
      comercios: {
        pequeños: "si",
        grandes: "si",
        mercadillos: "si",
        cc: "si",
        texto:
          "Apertura de zonas comunes y recreativas en Centros Comerciales: aforo limitado al 50%. Mercadillo: aforo limitado al 50%.",
      },
      hostelería: {
        takeaway: "si",
        enlocal: "si",
        terrazas: "si",
        discotecas: "si",
        hoteles: "si",
        texto:
          "Restaurantes: aforo limitado al 50% y consumo en barra. Apertura de bares nocturnos y discotecas con aforo limitado al 33%. Apertura de zonas comunes en hoteles y alojamientos turísticos: aforo limitado al 50%.",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones: "si",
      },
      cultura: {
        museos: "si",
        bibliotecas: "si",
      },
      ocio: {
        cine: "si",
        espectáculos: "si",
        exteriores: "si",
        texto: "Actividades culturales: aumenta el aforo limitado.",
      },
      funerales: {
        funerales: "si",
      },
    },
  },
  {
    name: "cuatro",
    info: "nueva normalidad",
  },
];

export default phases;
