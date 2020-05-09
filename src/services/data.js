const phases = [
  {
    name: "cero",
    actividades: {
      ceremonias: {
        cultos: null,
        bodas: null,
      },
      comercios: {
        pequeños: "si",
        mercadillos: null,
        cc: null,
        texto:
          "Apertura de pequeños comercios con cita previa y atención individual.",
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
        texto: "Entrenamiento individual de deportistas profesionales.",
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
        texto: "En lugares de culto : aforo limitado al 30%.",
      },
      comercios: {
        pequeños: "si",
        mercadillos: "si",
        cc: null,
        texto: "Mercadillos: aforo limitado al 25%.",
      },
      hosteleria: {
        takeaway: "si",
        enlocal: null,
        terrazas: "si",
        discotecas: null,
        hoteles: "si",
        texto:
          "Apertura de terrazas con ciertas limitaciones: aforo hasta 30%-50%, distancia mínima de 2m entre mesas y máximo 10 personas. Apertura de hoteles y alojamientos turísticos.",
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
        texto: "Apertura de museos: aforo limitado al 33%.",
      },
      eventos: {
        cine: null,
        espectáculos: "si",
        exteriores: "si",
        texto:
          "Actividades culturales: aforo limitado al 33%. Lugares cerrados: máximo 30 personas. Al aire libre: máximo 200 personas sentadas.",
      },
      funerales: {
        funerales: "si",
        texto: "Velatorios y actos fúnebres: aforo limitado a consultar.",
      },
    },
  },
  {
    name: "dos",
    activities: {
      ceremonias: {
        cultos: "si",
        bodas: "si",
        texto:
          "En lugares de culto: aforo limitado al 50%. Bodas: aforo limitado a consultar.",
      },
      comercios: {
        pequeños: "si",
        mercadillos: "si",
        cc: "si",
        texto:
          "Mercadillos: aforo limitado al 33%. Apertura de centros comerciales, salvo zonas comunes o áreas recreativas: aforo limitado al 40%.",
      },
      hosteleria: {
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
      eventos: {
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
    activities: {
      ceremonias: {
        cultos: "si",
        bodas: "si",
      },
      comercios: {
        pequeños: "si",
        mercadillos: "si",
        cc: "si",
        texto:
          "Apertura de zonas comunes y recreativas en Centros Comerciales: aforo limitado al 50%. Mercadillo: aforo limitado al 50%.",
      },
      hosteleria: {
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
      culture: {
        museos: "si",
        bibliotecas: "si",
      },
      eventos: {
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
];

export default phases;
