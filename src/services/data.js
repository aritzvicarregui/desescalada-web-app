const phases = [
  {
    actividades: {
      ceremonias: {
        cultos: null,
        bodas: null,
        texto: null,
      },
      comercios: {
        pequeños: "si",
        cc: null,
        mercadillos: null,
        texto:
          "Apertura de pequeños comercios (locales de menos de 400m2): con cita previa y atención individual.",
      },
      hostelería: {
        takeaway: "si",
        enlocal: null,
        terrazas: null,
        discotecas: null,
        hoteles: null,
        texto:
          "Apertura de pequeños locales con cita previa y atención idividual.",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones: null,
        texto: "Entrenamientos individuales de deportistas profesionales.",
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
    activities: {
      ceremonias: {
        cultos: "si",
        bodas: null,
        texto: "En lugares de culto : limitación de aforo del 30%.",
      },
      comercios: {
        pequeños: "si",
        cc: null,
        mercadillos: "si",
        texto: "Apertura de comercios ",
      },
      hosteleria: {
        takeaway: "si",
        enlocal: null,
        terrazas: "si",
        discotecas: null,
        hoteles: "si",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones: null,
        texto:
          "Deporte No Profesional: se podrán realizar actividades que no impliquen contacto físico ni uso de vestuarios. Deporte Profesional: Apertura de centros deportivos de alto rendimiento.",
      },
      cultura: {
        museos: "si",
        bibliotecas: "si",
      },
      eventos: {
        cine: null,
        espectáculos: "si",
        exteriores: "si",
      },
      funerales: {
        funerales: "si",
      },
    },
  },
  {
    name: "dos",
    activities: {
      ceremonias: {
        cultos: "si",
        bodas: "si",
      },
      comercios: {
        pequeños: "si",
        cc: "si",
        mercadillos: "si",
      },
      hosteleria: {
        takeaway: "si",
        enlocal: "si",
        terrazas: "si",
        discotecas: null,
        hoteles: "si",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones: "si",
        texto:
          "Campeonatos profesionales en partidos a puerta cerrada o con limitación de aforo, con posibilidad de ser retransmitidos.",
      },
      cultura: {
        museos: "si",
        bibliotecas: "si",
      },
      eventos: {
        cine: "si",
        espectáculos: "si",
        exteriores: "si",
      },
      funerales: {
        funerales: "si",
      },
    },
  },
  {
    name: "tres",
    activities: {
      ceremonias: {
        cultos: "si",
        bodas: "si",
      },
      comercios: {
        pequeños: "si",
        cc: "si",
        mercadillos: "si",
      },
      hosteleria: {
        takeaway: "si",
        enlocal: "si",
        terrazas: "si",
        discotecas: "si",
        hoteles: "si",
      },
      deporte: {
        individual: "si",
        profesional: "si",
        competiciones: "si",
      },
      culture: {
        museos: "si",
        bibliotecas: "si",
      },
      eventos: {
        cine: "si",
        espectáculos: "si",
        exteriores: "si",
      },
      funerales: {
        funerales: "si",
      },
    },
  },
];

export default phases;
