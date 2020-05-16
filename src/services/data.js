const phases = [
  {
    name: "cero",
    actividades: {
      horarios: {
        a: "de 12:00 - 19:00",
        b: "de 10:00 - 12:00 // de 19:00 - 20:00",
        c: "de 6:00 - 10:00 // de 20:00 - 23:00",
      },
      ceremonias: {
        cultos: null,
        bodas: null,
      },
      comercios: {
        pequeños:
          "Apertura de comercios de menos de 400m² con cita previa y atención individual.",
        grandes: null,
        mercadillos: null,
        cc: null,
      },
      hostelería: {
        takeaway: "Atención individual y con cita previa.",

        enlocal: null,
        terrazas: null,
        discotecas: null,
        hoteles: null,
      },
      deporte: {
        individual:
          "Que no requiera de contacto con terceros y sin abandonar el municipio de residencia. Paseos.",
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
        cultos: "Aforo limitado al 33%.",
        bodas: null,
      },
      comercios: {
        pequeños:
          "Apertura de comercios de menos de 400m², que no se encuentren dentro de parques o centros comerciales sin acceso directo e independiente desde el exterior.",
        mercadillos: [
          "Apertura de mercadillos con funcionamiento hasta el 25% y aforo limitado al 30%.",
          "Prohibido el autoservicio y los productos de prueba.",
        ],
        grandes: null,
        cc: null,
      },
      hostelería: {
        takeaway: "Con cita previa",
        enlocal: null,
        terrazas:
          "Apertura de terrazas con ciertas limitaciones: aforo hasta 30%-50%",

        discotecas: null,
        hoteles:
          "No se permite el uso de instalaciones de uso común, como piscinas, gimnasios o zonas de recreo.",
      },
      deporte: {
        individual:
          "Se podrán realizar actividades que no impliquen contacto físico ni uso de vestuarios y sin abandonar el municipio de residencia.",
        profesional: "Apertura de centros deportivos de alto rendimiento.",

        competiciones: null,
      },
      cultura: {
        museos: "Apertura de museos: aforo limitado al 33%.",
        bibliotecas:
          "Apertura de bibliotecas para préstamo y devolución de obras, lectura en sala y para información bibliográfica y bibliotecaria",
      },
      ocio: {
        cine: null,
        espectáculos: [
          "Actividades culturales: aforo limitado al 33%",
          "Lugares cerrados: máximo 30 personas",
          "Al aire libre: máximo 200 personas sentadas.",
        ],

        exteriores: [
          "Actividades culturales: aforo limitado al 33%",
          "Al aire libre: máximo 200 personas sentadas.",
        ],
      },
      funerales: {
        funerales:
          "Velatorios y actos fúnebres: aforo limitado de 15 personas en espacios al aire libre y de 10 personas en espacios cerrados.",
      },
    },
  },
  {
    name: "dos",
    actividades: {
      ceremonias: {
        cultos: "aforo limitado al 50%.",
        bodas: "si",
      },
      comercios: {
        pequeños: "si",
        grandes: "si",
        mercadillos: "Mercadillos: aforo limitado al 33%.",
        cc:
          "Apertura de centros comerciales, salvo zonas comunes o áreas recreativas: aforo limitado al 40%.",
      },
      hostelería: {
        takeaway: "si",
        enlocal:
          "Apertura de restaurantes y bares para el servicio de mesas, aforo limitado al 33%",
        terrazas: "si",
        discotecas: null,
        hoteles:
          " Apertura de zonas comunes en hoteles con restricciones específicas",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones:
          "Campeonatos profesionales en partidos a puerta cerrada o con aforo limitado y con posibilidad de ser retransmitidos.",
      },
      cultura: {
        museos: "si",
        bibliotecas: "si",
      },
      ocio: {
        cine: "Apertura de cines y teatros: aforo limitado al 50%.",
        espectáculos:
          "Actividades culturales en lugares cerrados: máximo 50 personas y, al aire libre: máximo 400 personas sentadas.",
        exteriores:
          " Actividades culturales al aire libre: máximo 400 personas sentadas",
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
        mercadillos: "Mercadillo: aforo limitado al 50%.",
        cc:
          "Apertura de zonas comunes y recreativas en Centros Comerciales: aforo limitado al 50%.",
      },
      hostelería: {
        takeaway: "si",
        enlocal: "Aforo limitado al 50% y consumo en barra.",
        terrazas: "si",
        discotecas:
          "Apertura de bares nocturnos y discotecas con aforo limitado al 33%.",
        hoteles:
          "Apertura de zonas comunes en hoteles y alojamientos turísticos: aforo limitado al 50%.",
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
        espectáculos: "Actividades culturales: aumenta el aforo limitado.",
        exteriores: "Actividades culturales: aumenta el aforo limitado.",
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
