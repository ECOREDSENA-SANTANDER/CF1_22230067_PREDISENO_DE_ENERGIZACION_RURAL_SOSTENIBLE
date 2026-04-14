export default {
  global: {
    Name: 'Diagnóstico social y energético de usuario rural',
    Description:
      'La energización rural sostenible en Colombia integra el marco de las zonas no interconectadas con un diagnóstico multidimensional. Articula la participación comunitaria y el análisis técnico para diseñar sistemas fotovoltaicos. Esta estructura, que considera la viabilidad ambiental, fundamenta la prefactibilidad bajo la regulación del IPSE (Instituto de Planificación de Soluciones Energéticas) y la CREG (Comisión de Regulación de Energía y Gas).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos de energización rural sostenible y zonas no interconectadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pobreza energética',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco Institucional Colombiano (ZNI)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Introducción a las FNCER',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodología de diagnóstico social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Apropiación comunitaria como factor de viabilidad',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico de demanda energética',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Inventario y clasificación de cargas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Elaboración de la curva de demanda',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Principios de predimensionamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recurso crítico: Horas Solares Pico (HSP)',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Viabilidad ambiental inicial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Factor de seguridad',
      significado:
        'porcentaje de margen de diseño añadido a la demanda energética para compensar pérdidas por eficiencia, degradación de equipos, suciedad y posibles imprecisiones en el diagnóstico.',
    },
    {
      termino: 'FAZNI',
      significado:
        'fondo de apoyo financiero para la energización de las zonas no interconectadas.',
    },
    {
      termino: 'Fuentes no convencionales de energía renovable',
      significado:
        'fuentes de energía que provienen de recursos que no se agotan (solar, eólica, biomasa, etc.) y cuya explotación tecnológica es reciente. La solar fotovoltaica es la principal FNCER utilizada en ZNI.',
    },
    {
      termino: 'Horas solares pico',
      significado:
        'la cantidad de horas diarias equivalentes a una radiación solar de 1000 W / m². Es el parámetro fundamental del recurso solar usado para dimensionar la matriz solar (paneles).',
    },
    {
      termino: 'Inversor',
      significado:
        'dispositivo electrónico que convierte la corriente continua (DC) almacenada en las baterías en corriente alterna (AC), necesaria para alimentar la mayoría de los electrodomésticos estándar.',
    },
    {
      termino: 'IPSE',
      significado:
        'Instituto de Planificación y Promoción de Soluciones Energéticas para las zonas no interconectadas.',
    },
    {
      termino: 'Modelo de gestión y operación',
      significado:
        'la estructura legal, administrativa y financiera propuesta para asegurar la sostenibilidad a largo plazo del sistema de energía, incluyendo el recaudo y el mantenimiento.',
    },
    {
      termino: 'Potencia pico',
      significado:
        'la potencia máxima instantánea (en vatios, W) que el sistema debe suministrar en un momento dado, generalmente al anochecer. Es el valor crítico para dimensionar el inversor.',
    },
    {
      termino: 'Prefactibilidad',
      significado:
        'la fase de estudio que evalúa si un proyecto es viable técnica, social y económicamente antes de pasar a la ingeniería de detalle y la inversión (factibilidad).',
    },
    {
      termino: 'Profundidad de descarga',
      significado:
        'el porcentaje máximo de la capacidad de la batería que se utiliza. Limitar el DoD (ejemplo: al 50 % en baterías de plomo-ácido) aumenta la vida útil de la batería.',
    },
    {
      termino: 'Wh/día',
      significado:
        'vatio-hora por día. Unidad de medida fundamental de la energía consumida por las cargas de un usuario en un ciclo de 24 horas. Es el valor clave para dimensionar el sistema.',
    },
    {
      termino: 'Zonas no interconectadas',
      significado:
        'áreas geográficas de Colombia que no están conectadas al Sistema Interconectado Nacional (SIN), donde se implementan los proyectos de Energización Rural Sostenible (ERS).',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2099 de 2021: Por medio de la cual se dictan disposiciones para la transición energética, la dinamización del mercado energético, la reactivación económica del país y se dictan otras disposiciones. Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2022). Plan Nacional de Desarrollo 2022–2026: Colombia potencia mundial de la vida. (Capítulo sobre Transición Energética).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (s. f.). Funcionamiento del Sector.',
      link: '',
    },
    {
      referencia:
        'Semana. (2024, julio). En pleno siglo XXI, 8,4 millones de colombianos se alumbran con vela: resultados del índice de pobreza energética. Revista Semana.',
      link: '',
    },
    {
      referencia:
        'Redacción El País. (2023). De la protesta a la propuesta: campesinos crean la primera escuela de energías limpias de Colombia. El País.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático electricidad',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
