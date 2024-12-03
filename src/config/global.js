export default {
  global: {
    componenteFormativo: 'El poder de la ética',
    descripcionCurso:
      'El Poder de la Ética tiene como objetivo desarrollar competencias relacionadas con la interacción ética con clientes y el entorno. Se enfoca en principios del comportamiento humano, relaciones interpersonales, dilemas éticos, y valores profesionales; fomenta la reflexión sobre la ética aplicada en diferentes contextos, promoviendo una gestión responsable y alineada con los valores organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Ética personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Valores y principios éticos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Deberes y derechos del ser humano',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ética profesional y laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Los valores y principios empresariales',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Razón social, misión y visión corporativas',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '1.	Ética Personal',
      referencia:
        'Universidad de Deusto / Deustuko Unibertsitatea. (2020, 13 noviembre). ¿Qué es la ética?',
      tipo: 'Video',
      link: 'https://youtu.be/pk1jWDZQ55U',
    },
    {
      tema: '3. Misión y Visión Corporativas',
      referencia:
        'ILERNA. (2020, 19 octubre). ¿Qué son la Misión, visión y valores?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=InIuCGq7j94',
    },
  ],
  glosario: [
    {
      termino: 'Código de ética',
      significado:
        'Conjunto de principios que guían la conducta en un entorno profesional.',
    },
    {
      termino: 'Dignidad humana',
      significado:
        'Valor intrínseco de cada persona por el hecho de ser humano.',
    },
    {
      termino: 'Dilema ético',
      significado: 'Situación que enfrenta valores o principios en conflicto.',
    },
    {
      termino: 'Deber',
      significado: 'Obligación moral o legal hacia otros o hacia la sociedad.',
    },
    {
      termino: 'Derechos',
      significado:
        'Normas universales que garantizan el bienestar y desarrollo humano.',
    },
    {
      termino: 'Ética aplicada',
      significado:
        'Rama que analiza problemas específicos como bioética o ética profesional.',
    },
    {
      termino: 'DiÉtica laboral',
      significado:
        'Principios y valores que regulan el comportamiento en el trabajo.',
    },
    {
      termino: 'Ética normativa',
      significado: 'Rama que establece teorías y reglas de conducta moral.',
    },
    {
      termino: 'Ética personal',
      significado:
        'Principios que guían las acciones individuales con integridad y respeto.',
    },
    {
      termino: 'Integridad',
      significado: 'Coherencia en actuar de acuerdo con principios éticos.',
    },
    {
      termino: 'Misión',
      significado: 'Propósito central de una organización que define su rol.',
    },
    {
      termino: 'Normas morales',
      significado: 'Reglas sociales heredadas que orientan el comportamiento.',
    },
    {
      termino: 'Principios éticos',
      significado:
        'Normas universales que promueven el respeto y la convivencia.',
    },
    {
      termino: 'Relativismo ético',
      significado:
        'Teoría que sostiene que los valores morales dependen del contexto cultural.',
    },
    {
      termino: 'Valores',
      significado:
        'Cualidades que orientan las acciones hacia el bien común y el desarrollo humano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Catedra Alfonso Reyes del Tecnológico de Monterrey. (2002). Conferencia de Fernando Savater- Ética en el mundo de hoy. Consultado el 25 de julio de 2014, en:',
      link: 'https://www.youtube.com/watch?v=dyUVu61l2rE',
    },
    {
      referencia:
        'Covey, S. (2003). Los 7 hábitos de la gente altamente efectiva: la revolución ética en la vida cotidiana y en la empresa, 1”ed II”reimp. Buenos Aires: Paidós.',
      link: '',
    },
    {
      referencia:
        'Martínez, E. (2000). Ética para el desarrollo de los pueblos. Madrid: Ed. Trotta.',
      link: '',
    },
    {
      referencia:
        'Plá, A. (1988). Curso de derecho Laboral, Volumen I, Tomo III, Reglamentación del trabajo. Montevideo: Ediciones Idea.',
      link: '',
    },
    {
      referencia:
        'Trincado, J. (2008). Los Cinco Amores. Ética y sociología. Táchira: Lito Formas.',
      link: '',
    },
    {
      referencia:
        'Gómez Córdoba, A. I., & Espinosa, Á. F. (2006). Dilemas éticos frente a la seguridad del paciente. Cuidar es pensar. Aquichan, 6(1), 54-67.',
      link: '',
    },
    {
      referencia:
        'Imanuel Kant (1724-1804). Fundamentación de la metafísica de las costumbres Capítulo Primero.',
      link: '',
    },
    {
      referencia:
        'Küng, H. (1999). Una ética mundial para la economía y la política. Trotta. Thompson, I. (2007). Concepto de misión. Promonegocios, Octubre.',
      link: '',
    },
    {
      referencia:
        'Fleitman Jack, McGraw Hill, 2000: Negocios Exitosos, de Pág. 283.',
      link: '',
    },
    {
      referencia:
        'Koontz, H., Weihrich, H., & Harold Koontz, H. W. (1998). Administración: una perspectiva global (No. 658/K82mE/11a. ed.).',
      link: '',
    },
    {
      referencia:
        'Dessler, G., Juárez, R. A. V., Sobrino, C. H., & Tepezano, J. L. R. (2009).',
      link: '',
    },
    {
      referencia: 'Administración de recursos humanos. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Acosta, G. (2008). Gestión de Recursos Humanos en la Administración Tributaria Venezolana. Observatorio laboral Revista venezolana, 1(2), 79-100.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mayra Cardenas Castellanos',
          cargo: 'Experta temática',
          centro: 'Centro de comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Ángela Patricia Frasser Castaño',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de comercio y servicios - Regional Tolima',
        },
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
