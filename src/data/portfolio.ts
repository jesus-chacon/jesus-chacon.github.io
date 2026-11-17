export interface Project {
  slug: string;
  name: string;
  description: string;
  role?: string;
  period?: string;
  label?: string;
  highlights?: string[];
  stack: { title: string; items: string[]; description?: string }[];
  caseStudy: {
    tagline: string;
    visibilityNote?: string;
    challenge: string;
    approach: string;
    concept?: [input: string, outcome: string];
    productHeading: string;
    features: { title: string; description: string }[];
    orderedFeatures?: boolean;
    clinicalManagement?: { title: string; description: string }[];
    integrations?: { title: string; description: string }[];
    contribution?: string;
    nextSteps?: { title: string; description: string }[];
    stackNote?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'therapyside',
    name: 'TherapySide',
    role: 'Full Stack Developer',
    period: '2022 – hoy',
    description: 'Plataforma para psicólogos donde gestionar pacientes, citas, notas de sesión e historias clínicas.',
    highlights: [
      'Migración de Polymer a Vue 3 y TypeScript.',
      'Adaptación del cliente web a las apps móviles con Ionic y Capacitor.',
      'Asistente de IA con RAG para la gestión clínica diaria.',
    ],
    stack: [
      { title: 'Web y móvil', items: ['Vue 3', 'TypeScript', 'Ionic'] },
      { title: 'Backend y datos', items: ['Python', 'Django', 'MySQL'] },
      { title: 'IA', items: ['LangChain', 'RAG'] },
    ],
    caseStudy: {
      tagline: 'Las herramientas de la consulta, reunidas en una plataforma.',
      challenge: 'La gestión de una consulta combina agenda, seguimiento de pacientes y documentación clínica. El reto era mejorar estas herramientas mientras se renovaba la plataforma web y se mantenía la experiencia móvil.',
      approach: 'Migramos el cliente a Vue 3 y TypeScript, lo adaptamos a las apps móviles y añadimos un asistente para apoyar las tareas diarias de la consulta.',
      concept: ['Actividad de la consulta', 'Seguimiento clínico'],
      productHeading: 'Del día a día al seguimiento clínico',
      features: [
        { title: 'Gestión de consulta', description: 'Agenda, fichas de pacientes y notas de sesión desde el mismo entorno.' },
        { title: 'Experiencia web y móvil', description: 'Un cliente web que se reutiliza en las apps con Ionic y Capacitor.' },
        { title: 'Asistente con RAG', description: 'Apoyo para consultar información y gestionar tareas de la consulta.' },
      ],
    },
  },
  {
    slug: 'altalago',
    name: 'Altalago',
    role: 'Tech Lead',
    period: '2021 – 2022',
    description: 'Club de fans para influencers tokenizado mediante smart contracts.',
    highlights: [
      'Liderazgo de un equipo de cinco personas.',
      'Smart contracts en Ethereum con desarrollo guiado por tests.',
      'Arquitectura full stack desplegada en AWS.',
    ],
    stack: [
      { title: 'Smart contracts', items: ['Solidity', 'Ethereum'] },
      { title: 'Aplicación y despliegue', items: ['React', 'Node.js', 'AWS', 'Prisma'] },
      { title: 'Pruebas', items: ['TDD', 'Mocha'] },
    ],
    caseStudy: {
      tagline: 'Un club de fans digital para creadores y sus comunidades.',
      challenge: 'El proyecto buscaba dar a los creadores una forma de organizar un club de fans con una membresía digital. Había que incorporar la lógica de los tokens a una experiencia web que los miembros pudieran usar.',
      approach: 'Lideré un equipo de cinco personas en el desarrollo de una aplicación full stack y de los smart contracts en Ethereum, con pruebas para validar su comportamiento.',
      concept: ['Creadores y comunidad', 'Membresía digital'],
      productHeading: 'De la comunidad a la membresía',
      features: [
        { title: 'Experiencia de club', description: 'Un espacio web para creadores y miembros de su comunidad.' },
        { title: 'Membresía tokenizada', description: 'Smart contracts para representar la membresía en Ethereum.' },
        { title: 'Desarrollo guiado por tests', description: 'Pruebas de los contratos y de la lógica de la aplicación.' },
      ],
    },
  },
  {
    slug: 'xatflows',
    name: 'XatFlows',
    label: 'Proyecto personal',
    description: 'Centraliza y automatiza la atención al cliente por WhatsApp y correo electrónico.',
    stack: [
      { title: 'Frontend', items: ['React'] },
      { title: 'Backend y datos', items: ['Node.js', 'PostgreSQL'] },
      { title: 'Mensajería y tiempo real', items: ['RabbitMQ', 'Socket.IO'] },
      { title: 'Automatización', items: ['n8n'] },
    ],
    caseStudy: {
      tagline: 'Atención al cliente conectada. Conversaciones que fluyen.',
      visibilityNote: 'Proyecto de código privado, utilizado por una empresa y desarrollado como trabajo remunerado.',
      challenge: 'Cuando la atención al cliente se reparte entre WhatsApp y correo, las conversaciones quedan separadas por canal. XatFlows parte de ese reto: reunir la comunicación y conectar la atención con la automatización.',
      approach: 'La plataforma combina la atención por WhatsApp y correo con flujos automatizados, apoyada en herramientas de integración y comunicación en tiempo real.',
      concept: ['WhatsApp + correo', 'Automatización'],
      productHeading: 'De la conversación al flujo',
      features: [
        { title: 'WhatsApp y correo', description: 'Dos canales de comunicación dentro de una misma propuesta de atención al cliente.' },
        { title: 'Atención centralizada', description: 'Un punto de encuentro para las conversaciones con clientes de ambos canales.' },
        { title: 'Automatización', description: 'Flujos que conectan la comunicación y la atención al cliente con procesos automatizados.' },
      ],
    },
  },
  {
    slug: 'nidario',
    name: 'Nidario',
    role: 'Tech Lead',
    description: 'Reúne el seguimiento diario de los alumnos y la comunicación entre el equipo docente y las familias.',
    stack: [
      { title: 'Aplicación privada instalable (PWA)', items: ['Vue 3', 'TypeScript', 'Pinia'] },
      { title: 'API', items: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'MongoDB'] },
      { title: 'Comunicación en tiempo real', items: ['Socket.IO'] },
      {
        title: 'Web comercial estática',
        items: ['Astro'],
        description: 'El formulario de solicitud de demo está conectado a la API.',
      },
    ],
    caseStudy: {
      tagline: 'Una aplicación para el día a día de las escuelas infantiles.',
      challenge: 'Nidario nació como agenda digital para la Escuela Infantil Campanilla. El reto fue convertir esa primera aplicación en un producto reutilizable para escuelas infantiles de 0 a 3 años.',
      approach: 'Los centros comparten una API. Cada uno puede tener una versión de la aplicación con su propio nombre, identidad visual y vocabulario. El inicio de sesión se limita al centro correspondiente.',
      concept: ['Actividad de las aulas', 'Información para las familias'],
      productHeading: 'Del aula a las familias',
      features: [
        {
          title: 'Agenda diaria',
          description: 'El equipo docente parte del menú general y registra qué ha comido cada alumno. La agenda también recoge las siestas y la higiene. Cada familia consulta el registro de su hijo.',
        },
        {
          title: 'Galería privada',
          description: 'El equipo docente elige a qué alumnos va dirigido cada álbum. Las familias solo ven los álbumes publicados que incluyen a alguno de sus hijos. Las imágenes se sirven mediante enlaces firmados y temporales.',
        },
        {
          title: 'Chat por alumno',
          description: 'Las familias y el equipo docente comparten una conversación por alumno. El historial se conserva aunque cambie el docente. Los mensajes se guardan a través de la API y Socket.IO actualiza el chat en tiempo real.',
        },
      ],
    },
  },
  {
    slug: 'clinicgest',
    name: 'ClinicGest',
    label: 'Proyecto personal',
    description: 'ClinicGest reúne los datos del paciente, el accidente y su evolución para preparar borradores de informes asistidos por IA. El equipo puede revisarlos, editarlos y exportarlos a PDF.',
    stack: [
      { title: 'Frontend', items: ['Vue 3', 'Pinia', 'TypeScript'] },
      { title: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'MongoDB'] },
      { title: 'Despliegue', items: ['Docker Compose'] },
    ],
    caseStudy: {
      tagline: 'Gestión clínica e informes para pacientes de accidentes de tráfico.',
      challenge: 'Los datos del paciente y del accidente se necesitan durante todo el seguimiento, desde urgencias y la primera visita hasta los informes de seguimiento y alta. Recopilarlos cada vez que se prepara un informe duplica trabajo.',
      approach: 'Cada informe parte del mismo expediente. ClinicGest reutiliza los datos del paciente, el accidente y los informes anteriores, e incorpora la evolución del caso en cada etapa.',
      productHeading: 'De los datos al informe',
      orderedFeatures: true,
      features: [
        {
          title: 'Expediente y seguimiento',
          description: 'ClinicGest reúne los datos de la clínica, el paciente, el accidente y los informes previos del caso.',
        },
        {
          title: 'Borrador asistido por IA',
          description: 'La aplicación prepara los datos y los envía a un flujo en n8n. La respuesta se convierte en un borrador editable.',
        },
        {
          title: 'Revisión y PDF',
          description: 'El equipo revisa y edita el borrador. El servidor combina la plantilla y los datos de la clínica con Handlebars y genera el PDF con Browserless.',
        },
      ],
      clinicalManagement: [
        {
          title: 'Gestión de pacientes',
          description: 'Registra y actualiza fichas de pacientes, vincula sus accidentes y consulta los informes de cada caso.',
        },
        {
          title: 'Gestión documental',
          description: 'Prepara y gestiona documentos para firma, como los justificantes de asistencia de pacientes.',
        },
        {
          title: 'Compactación de archivos PDF',
          description: 'Ordena y combina archivos PDF e imágenes JPG o PNG existentes en un solo PDF, directamente en el navegador.',
        },
        {
          title: 'Registro de cambios y auditoría',
          description: 'Consulta quién hizo qué y cuándo en altas, ediciones y bajas de pacientes, accidentes e informes. El registro también recoge eventos de sincronización automática.',
        },
      ],
      integrations: [
        {
          title: 'NaturalSoft/Velneo',
          description: 'Sincroniza pacientes y episodios clínicos con ClinicGest y permite importar informes existentes.',
        },
        {
          title: 'WhatsApp Web',
          description: 'WAHA conecta las conversaciones y notificaciones de cada clínica. Una cola persistente en MongoDB ordena los envíos y evita que coincidan en una misma sesión, mientras Socket.IO refleja los cambios en tiempo real.',
        },
        {
          title: 'TIREA',
          description: 'Permite consultar el listado y el detalle de los expedientes de TIREA desde ClinicGest.',
        },
      ],
    },
  },
  {
    slug: 'caravanmap',
    name: 'CaravanMap',
    label: 'Proyecto en colaboración · En desarrollo',
    description: 'Catálogo de áreas de servicio, campings y lugares de pernocta para una comunidad caravanista, con un panel para mantenerlo y fichas que se consultan desde el móvil.',
    stack: [
      { title: 'Frontend', items: ['Vue 3', 'TypeScript'] },
      { title: 'API y datos', items: ['Express', 'TypeScript', 'Prisma 8', 'PostgreSQL'] },
      { title: 'Almacenamiento', items: ['MinIO'] },
      { title: 'Despliegue', items: ['Docker Compose'] },
    ],
    caseStudy: {
      tagline: 'Un catálogo propio para una comunidad caravanista.',
      challenge: 'La comunidad mantenía su catálogo de lugares en Google My Maps. Buscaba un espacio propio para gestionar esos lugares y facilitar su consulta durante el viaje.',
      approach: 'El panel permite mantener el catálogo. Desde el móvil, cada lugar tiene una ficha con la información disponible y acceso a la navegación.',
      contribution: 'En este proyecto compartido, trabajé en el panel de usuarios, el alta y la edición de lugares, la carga de fotografías y la ficha de detalle que se consulta en el móvil.',
      productHeading: 'Del panel a la ruta',
      orderedFeatures: true,
      features: [
        {
          title: 'Dar de alta un lugar',
          description: 'Desde el panel se puede crear o editar un lugar y subir su foto. La carga genera miniaturas WebP, que se sirven desde MinIO mediante enlaces temporales.',
        },
        {
          title: 'Consultar la ficha',
          description: 'La ficha móvil reúne la descripción, los servicios, la foto y el vídeo cuando están disponibles. Omite las coordenadas numéricas y las direcciones en texto. En aparcamientos públicos, avisa de que la pernocta no está garantizada y recomienda consultar con la policía local.',
        },
        {
          title: 'Pulsar «Cómo llegar»',
          description: 'Abre una app de navegación compatible en Android y Apple Maps en iOS, con Google Maps como alternativa.',
        },
      ],
      nextSteps: [
        { title: 'Mapa interactivo', description: 'Explorar los lugares del catálogo sobre el mapa.' },
        { title: 'Instalación como PWA', description: 'Permitir instalar CaravanMap desde el navegador.' },
        { title: 'Migración inicial del catálogo', description: 'Trasladar los puntos y las fotos del catálogo existente de Google My Maps a partir de archivos KML/KMZ.' },
      ],
      stackNote: 'El monorepo pnpm comparte tipos entre el frontend y la API. GitHub Actions ejecuta los controles de lint, tipos y compilación.',
    },
  },
];

export const experienceGroups = [
  {
    entries: [
      { company: 'Nidario', role: 'Tech Lead', period: 'oct. 2026 – hoy', description: 'Defino la arquitectura y desarrollo el frontend y el backend de una plataforma para escuelas infantiles.' },
      { company: 'TherapySide', role: 'Full Stack Developer', period: '2022 – hoy', description: 'Migración a Vue 3 y TypeScript, apps móviles con Ionic y asistente de IA con RAG.' },
      { company: 'Altalago', role: 'Tech Lead', period: '2021 – 2022', description: 'Lideré a un equipo de cinco personas en el desarrollo de un club de fans tokenizado.' },
      { company: 'Wabimovil', role: 'Tech Lead', period: '2020 – 2022', description: 'Desarrollamos una app móvil, un checkout web y un backoffice con CRM, e integramos atención al cliente, facturación y gestión de líneas móviles y fibra.' },
      { company: 'Clever ecommerce (CleverAds)', role: 'Full Stack Developer', period: '2018 – 2020', description: 'Automatización de anuncios desde catálogos de Shopify y WooCommerce y optimización con machine learning.' },
    ],
  },
  {
    title: 'Actividad independiente',
    entries: [
      { company: 'BitBcn', role: 'Mentor y consultor de blockchain', period: 'sept. 2016 – nov. 2021', description: 'Mentoría en Solidity, Web3 y EVM, y consultoría para integraciones de blockchain.' },
      { company: 'Workkola', role: 'CTO', period: 'abr. 2015 – sept. 2018', description: 'Conectábamos a empresas y estudiantes mediante proyectos reales para validar sus habilidades.' },
      { company: 'Skyllz', role: 'Blockchain Developer', period: 'nov. 2017 – sept. 2018', description: 'Certificación de habilidades mediante smart contracts.' },
    ],
  },
];

export const stackGroups = [
  { title: 'Frontend', items: ['Vue 3', 'React', 'Angular', 'TypeScript', 'Ionic', 'Capacitor', 'Flutter'] },
  { title: 'Backend y datos', items: ['Node.js', 'Express', 'Python', 'Django', 'Ruby on Rails', 'GraphQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'RabbitMQ'] },
  { title: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'CI/CD'] },
  { title: 'IA y automatización', items: ['LangChain', 'RAG', 'Machine learning', 'n8n', 'SDD', 'ODD'] },
  { title: 'Prácticas y metodologías', items: ['TDD', 'Arquitectura hexagonal', 'Extreme Programming', 'Pair programming', 'Arquitectura en capas'] },
];
