/**
 * Contenido público del portafolio, en español e inglés.
 * Los textos salen del sitio publicado, de repositorios públicos
 * y de lo que Ricky confirmó para este rediseño.
 * Todo campo `pending` debe seguir visible hasta que él lo confirme.
 */

export const SECTION_IDS = ['top', 'profile', 'practice', 'work', 'trajectory', 'lab', 'contact'];

export const profile = {
  es: {
    meta: {
      title: 'Ricky Montero Terrero · Ingeniero de software',
      description:
        'Portafolio de Ricky Montero Terrero, ingeniero de software en República Dominicana. Backend, arquitectura e integración de sistemas empresariales.',
    },
    lang: { label: 'Idioma', es: 'ES', en: 'EN' },
    nav: [
      { id: 'profile', label: 'Perfil' },
      { id: 'practice', label: 'Oficio' },
      { id: 'work', label: 'Trabajo' },
      { id: 'trajectory', label: 'Trayectoria' },
      { id: 'lab', label: 'Laboratorio' },
      { id: 'contact', label: 'Contacto' },
    ],
    menu: { open: 'Abrir menú', close: 'Cerrar menú' },
    brand: 'Ricky Montero, inicio',
    hero: {
      index: '01  /  Ingeniería de lo invisible',
      name: 'Ricky Montero Terrero',
      role: 'Ingeniero de software · Santo Domingo',
      titleLead: 'La arquitectura',
      titleEmphasis: 'que no se ve.',
      lede:
        'Diseño backends, integraciones y los acuerdos entre sistemas para que una plataforma empresarial siga respondiendo cuando una pieza falla.',
      primary: 'Ver el trabajo',
      secondary: 'Ver la trayectoria',
      tertiary: 'Escribir',
      facts: [
        { label: 'Backend', value: 'APIs y servicios' },
        { label: 'Integración', value: 'Canales y sistemas core' },
        { label: 'Operación', value: 'Datos, entrega y fallo' },
      ],
      mapLabel: 'Modelo ilustrativo de un sistema distribuido',
      mapHint: 'Selecciona un nodo. El diagrama no representa un sistema real.',
      labLink: 'Probar el failover en el laboratorio',
      nodes: {
        channel: {
          kind: 'Canal',
          title: 'Cliente',
          body: 'Una persona o un sistema vecino pide algo. El canal no debería conocer la base de datos ni el procesador de pagos.',
        },
        api: {
          kind: 'Contrato',
          title: 'API',
          body: 'El contrato publica lo que se puede pedir y lo que se promete devolver. SOAP o REST, el límite del servicio tiene que ser explícito.',
        },
        services: {
          kind: 'Orquestación',
          title: 'Servicios',
          body: 'Aquí se decide el orden: validar, llamar al core, publicar un evento. Si una dependencia no responde, la decisión ya debería estar escrita.',
        },
        events: {
          kind: 'Asíncrono',
          title: 'Eventos',
          body: 'No todo necesita una respuesta inmediata. Un evento deja que otro servicio continúe el trabajo sin bloquear al canal.',
        },
        data: {
          kind: 'Estado',
          title: 'Datos',
          body: 'El estado vive en algún sitio: SQL Server, Oracle o MongoDB. El servicio que lo modifica es el único que debería conocer ese detalle.',
        },
      },
    },
    about: {
      index: '02  /  Perfil',
      title: 'Del software empresarial a los sistemas que lo conectan.',
      portraitAlt: 'Retrato de Ricky Montero Terrero',
      portraitCaption: 'Santo Domingo, República Dominicana',
      paragraphs: [
        'Construyo el tramo que el usuario no recorre: contratos de API, orquestación de servicios e integración con sistemas que ya existían antes que la pantalla.',
        'El trabajo empezó en aplicaciones empresariales, con .NET y bases relacionales. Después se movió hacia la arquitectura de servicios: cómo un canal habla con un core, cómo un flujo SOAP convive con uno REST y qué queda definido cuando una dependencia no contesta. Hoy ese trabajo es en Humano Seguros, como analista SOA.',
        'La operación forma parte del mismo oficio. Contenedores, pipelines, análisis estático y observabilidad sirven para dejar un sistema en condiciones de mantenerse. Los asistentes de programación entran en ese flujo: aceleran la construcción y no sustituyen la decisión de diseño.',
      ],
    },
    practice: {
      index: '03  /  Oficio',
      title: 'Qué sé dejar en pie.',
      lede: 'Capacidades agrupadas por el tipo de sistema, no por una pared de logos. No hay porcentajes: nadie mide así un oficio.',
      groups: [
        {
          id: 'backend',
          title: 'Backend y APIs',
          thesis: 'Servicios con un contrato claro, una responsabilidad y una forma predecible de fallar.',
          tools: ['C#', '.NET', 'ASP.NET Core', 'REST', 'Clean Architecture', 'CQRS', 'MediatR', 'Node.js', 'Express'],
        },
        {
          id: 'integration',
          title: 'Integración empresarial',
          thesis: 'Hacer que canales, servicios y sistemas core se entiendan sin compartir su interior.',
          tools: ['Oracle SOA Suite 12c', 'SOAP', 'REST', 'Microservicios', 'Pagos', 'Arquitecturas orientadas a eventos'],
        },
        {
          id: 'platform',
          title: 'Entrega y operación',
          thesis: 'El sistema también es su pipeline, su contenedor y la señal que avisa cuando algo se degrada.',
          tools: ['Docker', 'Kubernetes', 'Azure DevOps', 'CI/CD', 'SonarQube', 'Observabilidad'],
        },
        {
          id: 'data',
          title: 'Datos',
          thesis: 'Elegir dónde vive el estado y qué servicio tiene permiso de cambiarlo.',
          tools: ['SQL Server', 'Oracle Database', 'MongoDB', 'PostgreSQL', 'Entity Framework'],
        },
        {
          id: 'ai',
          title: 'Construcción asistida',
          thesis: 'Usar agentes y asistentes para recorrer más código, con el criterio todavía del lado humano.',
          tools: ['Cursor', 'GitHub Copilot', 'AWS Kiro', 'MCP', 'Agentes de programación'],
        },
      ],
    },
    work: {
      index: '04  /  Trabajo seleccionado',
      title: 'Un repositorio que se puede abrir. Tres casos que no se pueden mostrar por dentro.',
      lede: 'El trabajo personal enlaza a GitHub. La experiencia empresarial está anonimizada: sin clientes, sin cifras y sin arquitectura interna.',
      context: 'Contexto',
      challenge: 'Desafío',
      approach: 'Enfoque',
      result: 'Resultado',
      stack: 'Tecnologías',
      items: [
        {
          id: 'posts-api',
          kind: 'Personal · verificable',
          title: 'API de publicaciones',
          repo: 'NodejsExpressAuth',
          context:
            'Repositorio público con una API REST para crear, leer, actualizar y eliminar publicaciones. El README la describe con Node.js, Express y MongoDB.',
          challenge:
            'Dejar un CRUD utilizable, exigir autenticación al crear y al actualizar, y documentar los endpoints.',
          approach:
            'El código publicado organiza rutas, controladores y modelos. package.json incluye Express, Mongoose, JWT, Joi, Helmet y Swagger.',
          result:
            'No hay métricas de uso publicadas. El README menciona una documentación en Render; no se enlaza porque no respondió durante esta revisión.',
          tools: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Joi', 'Helmet', 'Swagger'],
          links: [
            { label: 'Repositorio', href: 'https://github.com/rickyjobs07/NodejsExpressAuth' },
          ],
        },
        {
          id: 'core-integration',
          kind: 'Experiencia empresarial · anonimizada',
          title: 'Integrar canales con sistemas core',
          context:
            'Las plataformas empresariales reciben pedidos desde canales nuevos y tienen que resolverlos en sistemas que ya están en producción.',
          challenge:
            'Traducir un pedido externo a un contrato que el core entiende, sin filtrar hacia afuera el modelo interno.',
          approach:
            'A este nivel el trabajo es de contratos: límites por servicio, convivencia de SOAP y REST, y una responsabilidad explícita sobre quién transforma el mensaje. La topología real no se publica aquí.',
          result: 'Resultado cuantitativo pendiente de confirmación.',
          pending: 'Falta confirmar alcance, sistemas involucrados que se puedan nombrar y cualquier resultado medible.',
          tools: ['SOA', 'SOAP', 'REST', 'Integración de servicios'],
          links: [],
        },
        {
          id: 'payments',
          kind: 'Experiencia empresarial · anonimizada',
          title: 'Continuidad cuando un cobro no responde',
          context:
            'Un flujo de pago depende de procesadores externos. Uno de ellos puede degradarse o dejar de contestar.',
          challenge:
            'Decidir el siguiente paso sin cobrar dos veces y sin esconder el fallo detrás de un reintento ciego.',
          approach:
            'El criterio, descrito aquí solo en abstracto, es ordenar los procesadores, fijar un tiempo de espera y conservar una clave idempotente. El laboratorio de esta página muestra esa idea con nombres ficticios.',
          result: 'Resultado cuantitativo pendiente de confirmación.',
          pending: 'No se publican proveedores, volúmenes ni incidentes reales.',
          tools: ['Integración', 'Pagos', 'APIs', 'Diseño para el fallo'],
          links: [],
        },
        {
          id: 'dotnet',
          kind: 'Experiencia empresarial · anonimizada',
          title: 'Modernizar aplicaciones .NET',
          context:
            'En IDOPPRIL, el sitio anterior describe desarrollo y mantenimiento de aplicaciones empresariales con .NET Core y SQL Server, incluida la colaboración en migraciones de sistemas legacy.',
          challenge:
            'Sumar capacidad nueva sin detener lo que ya opera, y sin presentar una migración como si fuera un reemplazo de un día.',
          approach:
            'El relato público se queda en ese marco: aplicaciones .NET, SQL Server y una migración hecha en colaboración. No hay módulos, diagramas ni métricas que acompañen esta ficha.',
          result: 'Resultado cuantitativo pendiente de confirmación.',
          pending: 'Pendiente de un caso que se pueda contar con más precisión y sin datos internos.',
          tools: ['.NET Core', 'SQL Server', 'Aplicaciones empresariales'],
          links: [],
        },
      ],
    },
    trajectory: {
      index: '05  /  Trayectoria',
      title: 'Dónde se formó ese criterio.',
      lede: 'Fechas y cargos salen del sitio publicado. El rol en Humano Seguros es el actual.',
      workLabel: 'Trabajo',
      studyLabel: 'Formación',
      roles: [
        {
          id: 'humano',
          kind: 'work',
          years: '2025 — actualidad',
          title: 'Analista SOA',
          org: 'Humano Seguros',
          place: 'Híbrido · Santo Domingo, República Dominicana',
          summary:
            'Diseña e implementa soluciones SOA para integrar sistemas internos y externos, trabaja con equipos de desarrollo y participa en estándares de servicios. Esta etapa incluye arquitectura e integración de servicios.',
        },
        {
          id: 'idoppril',
          kind: 'work',
          years: '2022 — 2025',
          title: 'Full-stack Developer',
          org: 'IDOPPRIL',
          place: 'Santo Domingo, República Dominicana',
          summary:
            'Desarrollo y mantenimiento de aplicaciones empresariales con .NET Core y SQL Server. Implementación de funcionalidades, optimización de procesos existentes y colaboración en la migración de sistemas legacy.',
        },
        {
          id: 'ev',
          kind: 'work',
          years: '2021 — 2022',
          title: 'Desarrollador freelance',
          org: 'EV Technology',
          place: 'Remoto',
          summary:
            'Soluciones web, APIs REST y PostgreSQL, con interfaces responsivas. Así está descrito en el sitio anterior. No se publican clientes ni cifras.',
        },
        {
          id: 'unicaribe',
          kind: 'study',
          years: '2022 — 2024',
          title: 'Ingeniería en Software',
          org: 'Universidad del Caribe (UNICARIBE)',
          place: 'Santo Domingo, República Dominicana',
          summary:
            'Formación en desarrollo de software, arquitectura de sistemas y gestión de proyectos.',
        },
        {
          id: 'itla',
          kind: 'study',
          years: '2019 — 2022',
          title: 'Tecnólogo en Desarrollo de Software',
          org: 'Instituto Tecnológico de Las Américas (ITLA)',
          place: 'Santo Domingo, República Dominicana',
          summary:
            'Especialización en desarrollo web, bases de datos y programación orientada a objetos.',
        },
      ],
    },
    lab: {
      index: '06  /  Laboratorio',
      title: 'Un cobro, tres procesadores, una sola clave.',
      lede:
        'Simulación de frontend con datos ficticios. Muestra cómo un enrutador elige el primer procesador que todavía puede responder, y por qué el reintento viaja con la misma clave.',
      fiction: 'Northline, Harbor y Meridian no existen. No es la arquitectura de ningún empleador.',
      how: 'Marca un procesador como caído y vuelve a enviar. El cobro pasa al siguiente que siga en pie. La clave no cambia hasta que pidas una nueva.',
      keyLabel: 'Clave idempotente',
      newKey: 'Nueva clave',
      send: 'Enviar cobro de prueba',
      changeState: 'Cambiar estado',
      orderLabel: 'Orden de intento',
      latency: 'Latencia ilustrativa',
      states: {
        up: 'Operativo',
        degraded: 'Degradado',
        down: 'Caído',
      },
      processors: {
        northline: { name: 'Northline', note: 'Primer intento' },
        harbor: { name: 'Harbor', note: 'Segundo intento' },
        meridian: { name: 'Meridian', note: 'Tercer intento' },
      },
      idle: 'Aún no hay un cobro. Elige el estado de cada procesador y envía la prueba.',
      accepted: (name, ms, key) =>
        `Aceptado en ${name}. ${ms} ms ilustrativos. Clave ${key}.`,
      slow: (name, ms, key) =>
        `Aceptado con demora en ${name}. ${ms} ms ilustrativos. Clave ${key}.`,
      rejected: (key) =>
        `Rechazado. Ningún procesador disponible. La clave ${key} se conserva para un reintento seguro.`,
      skip: (name) => `${name} está caído. Se omite.`,
      took: (name, mode) =>
        mode === 'slow'
          ? `${name} responde degradado. Se acepta una sola vez y se informa la demora.`
          : `${name} responde. Se acepta una sola vez.`,
      sameKey: 'Un segundo envío usa la misma clave. Por eso un reintento no se interpreta como otro cobro.',
    },
    contact: {
      index: '07  /  Contacto',
      title: 'Si hay un sistema que integrar, conversemos.',
      lede:
        'Escríbeme para hablar de backend, integraciones o una vacante donde ese oficio importe. Respondo al correo que dejes en el formulario.',
      emailLabel: 'Correo',
      githubLabel: 'GitHub',
      placeLabel: 'Lugar',
      place: 'Santo Domingo, República Dominicana',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@correo.com',
      messagePlaceholder: 'Qué sistema, qué equipo o qué pregunta.',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      success: 'Mensaje enviado. Te responderé a ese correo.',
      failure: 'No se pudo enviar. Escribe directo a rickymonterojobs07@gmail.com.',
      errors: {
        name: 'Escribe un nombre de al menos 2 caracteres.',
        email: 'Escribe un correo válido.',
        message: 'El mensaje necesita al menos 12 caracteres.',
      },
    },
    footer: {
      credit: 'Ingeniería de software',
      note: 'Los casos empresariales de esta página están anonimizados.',
    },
  },
  en: {
    meta: {
      title: 'Ricky Montero Terrero · Software engineer',
      description:
        'Portfolio of Ricky Montero Terrero, a software engineer in the Dominican Republic. Backend, architecture, and enterprise system integration.',
    },
    lang: { label: 'Language', es: 'ES', en: 'EN' },
    nav: [
      { id: 'profile', label: 'Profile' },
      { id: 'practice', label: 'Practice' },
      { id: 'work', label: 'Work' },
      { id: 'trajectory', label: 'Trajectory' },
      { id: 'lab', label: 'Lab' },
      { id: 'contact', label: 'Contact' },
    ],
    menu: { open: 'Open menu', close: 'Close menu' },
    brand: 'Ricky Montero, home',
    hero: {
      index: '01  /  Engineering the invisible',
      name: 'Ricky Montero Terrero',
      role: 'Software engineer · Santo Domingo',
      titleLead: 'The architecture',
      titleEmphasis: 'you never see.',
      lede:
        'I design backends, integrations, and the agreements between systems so an enterprise platform still answers when one piece fails.',
      primary: 'See the work',
      secondary: 'See the trajectory',
      tertiary: 'Write',
      facts: [
        { label: 'Backend', value: 'APIs and services' },
        { label: 'Integration', value: 'Channels and core systems' },
        { label: 'Operations', value: 'Data, delivery, and failure' },
      ],
      mapLabel: 'Illustrative model of a distributed system',
      mapHint: 'Select a node. This diagram is not a real system.',
      labLink: 'Try failover in the lab',
      nodes: {
        channel: {
          kind: 'Channel',
          title: 'Client',
          body: 'A person or a neighboring system asks for something. The channel should not know which database or payment processor is behind the answer.',
        },
        api: {
          kind: 'Contract',
          title: 'API',
          body: 'The contract states what can be asked and what will be returned. SOAP or REST, the boundary of the service has to be explicit.',
        },
        services: {
          kind: 'Orchestration',
          title: 'Services',
          body: 'This is where the order is decided: validate, call the core, publish an event. If a dependency does not answer, that decision should already be written down.',
        },
        events: {
          kind: 'Async',
          title: 'Events',
          body: 'Not every step needs an immediate reply. An event lets another service continue the work without blocking the channel.',
        },
        data: {
          kind: 'State',
          title: 'Data',
          body: 'State lives somewhere: SQL Server, Oracle, or MongoDB. The service allowed to change it should be the only one that knows that detail.',
        },
      },
    },
    about: {
      index: '02  /  Profile',
      title: 'From enterprise software to the systems that connect it.',
      portraitAlt: 'Portrait of Ricky Montero Terrero',
      portraitCaption: 'Santo Domingo, Dominican Republic',
      paragraphs: [
        'I build the stretch a user never walks: API contracts, service orchestration, and integration with systems that were already there before the screen.',
        'The work started in enterprise applications, with .NET and relational databases. It then moved toward service architecture: how a channel talks to a core, how a SOAP flow lives next to a REST flow, and what is already decided when a dependency does not answer. That work is now at Humano Seguros, as an SOA analyst.',
        'Operations belong to the same practice. Containers, pipelines, static analysis, and observability keep a system maintainable. Coding assistants sit in that flow: they speed up the building and do not replace the design decision.',
      ],
    },
    practice: {
      index: '03  /  Practice',
      title: 'What I know how to leave standing.',
      lede: 'Capabilities grouped by the kind of system, not by a wall of logos. There are no percentages. That is not how this work is measured.',
      groups: [
        {
          id: 'backend',
          title: 'Backend and APIs',
          thesis: 'Services with a clear contract, one responsibility, and a predictable way to fail.',
          tools: ['C#', '.NET', 'ASP.NET Core', 'REST', 'Clean Architecture', 'CQRS', 'MediatR', 'Node.js', 'Express'],
        },
        {
          id: 'integration',
          title: 'Enterprise integration',
          thesis: 'Let channels, services, and core systems understand each other without sharing their insides.',
          tools: ['Oracle SOA Suite 12c', 'SOAP', 'REST', 'Microservices', 'Payments', 'Event-driven architecture'],
        },
        {
          id: 'platform',
          title: 'Delivery and operations',
          thesis: 'A system is also its pipeline, its container, and the signal that says something has degraded.',
          tools: ['Docker', 'Kubernetes', 'Azure DevOps', 'CI/CD', 'SonarQube', 'Observability'],
        },
        {
          id: 'data',
          title: 'Data',
          thesis: 'Choose where state lives and which service is allowed to change it.',
          tools: ['SQL Server', 'Oracle Database', 'MongoDB', 'PostgreSQL', 'Entity Framework'],
        },
        {
          id: 'ai',
          title: 'Assisted building',
          thesis: 'Use agents and assistants to cover more code, with judgment still on the human side.',
          tools: ['Cursor', 'GitHub Copilot', 'AWS Kiro', 'MCP', 'Coding agents'],
        },
      ],
    },
    work: {
      index: '04  /  Selected work',
      title: 'One repository you can open. Three cases that cannot be shown from the inside.',
      lede: 'Personal work links to GitHub. Enterprise experience is anonymized: no clients, no figures, and no internal architecture.',
      context: 'Context',
      challenge: 'Challenge',
      approach: 'Approach',
      result: 'Outcome',
      stack: 'Technologies',
      items: [
        {
          id: 'posts-api',
          kind: 'Personal · verifiable',
          title: 'Posts API',
          repo: 'NodejsExpressAuth',
          context:
            'Public repository with a REST API to create, read, update, and delete posts. The README describes it with Node.js, Express, and MongoDB.',
          challenge:
            'Ship a usable CRUD, require authentication when creating and updating, and document the endpoints.',
          approach:
            'The published code organizes routes, controllers, and models. package.json includes Express, Mongoose, JWT, Joi, Helmet, and Swagger.',
          result:
            'No usage metrics are published. The README mentions Render-hosted docs; they are not linked because they did not respond during this review.',
          tools: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Joi', 'Helmet', 'Swagger'],
          links: [
            { label: 'Repository', href: 'https://github.com/rickyjobs07/NodejsExpressAuth' },
          ],
        },
        {
          id: 'core-integration',
          kind: 'Enterprise experience · anonymized',
          title: 'Integrating channels with core systems',
          context:
            'Enterprise platforms take requests from newer channels and have to resolve them in systems that are already in production.',
          challenge:
            'Translate an external request into a contract the core understands, without leaking the internal model outward.',
          approach:
            'At this altitude the work is about contracts: a boundary per service, SOAP and REST side by side, and an explicit owner for the transformation. The real topology is not published here.',
          result: 'A quantitative outcome is pending confirmation.',
          pending: 'Scope, any systems that can be named, and any measurable outcome still need confirmation.',
          tools: ['SOA', 'SOAP', 'REST', 'Service integration'],
          links: [],
        },
        {
          id: 'payments',
          kind: 'Enterprise experience · anonymized',
          title: 'Continuity when a charge does not answer',
          context:
            'A payment flow depends on external processors. One of them can degrade or stop answering.',
          challenge:
            'Choose the next step without charging twice and without hiding the failure behind a blind retry.',
          approach:
            'The criterion, described here only in the abstract, is to order the processors, set a timeout, and keep an idempotency key. The lab on this page shows that idea with fictional names.',
          result: 'A quantitative outcome is pending confirmation.',
          pending: 'No providers, volumes, or real incidents are published.',
          tools: ['Integration', 'Payments', 'APIs', 'Designing for failure'],
          links: [],
        },
        {
          id: 'dotnet',
          kind: 'Enterprise experience · anonymized',
          title: 'Modernizing .NET applications',
          context:
            'At IDOPPRIL, the previous site describes building and maintaining enterprise applications with .NET Core and SQL Server, including collaboration on legacy migrations.',
          challenge:
            'Add new capability without stopping what already runs, and without treating a migration as a one-day replacement.',
          approach:
            'The public account stays inside that frame: .NET applications, SQL Server, and a migration done in collaboration. This entry has no modules, diagrams, or metrics.',
          result: 'A quantitative outcome is pending confirmation.',
          pending: 'A case that can be told with more precision, and without internal data, is still pending.',
          tools: ['.NET Core', 'SQL Server', 'Enterprise applications'],
          links: [],
        },
      ],
    },
    trajectory: {
      index: '05  /  Trajectory',
      title: 'Where that judgment was formed.',
      lede: 'Dates and titles come from the published site. The role at Humano Seguros is the current one.',
      workLabel: 'Work',
      studyLabel: 'Education',
      roles: [
        {
          id: 'humano',
          kind: 'work',
          years: '2025 — present',
          title: 'SOA Analyst',
          org: 'Humano Seguros',
          place: 'Hybrid · Santo Domingo, Dominican Republic',
          summary:
            'Designs and implements SOA solutions that integrate internal and external systems, works with development teams, and takes part in service standards. This chapter includes architecture and service integration.',
        },
        {
          id: 'idoppril',
          kind: 'work',
          years: '2022 — 2025',
          title: 'Full-stack Developer',
          org: 'IDOPPRIL',
          place: 'Santo Domingo, Dominican Republic',
          summary:
            'Built and maintained enterprise applications with .NET Core and SQL Server. Shipped features, improved existing processes, and collaborated on legacy migrations.',
        },
        {
          id: 'ev',
          kind: 'work',
          years: '2021 — 2022',
          title: 'Freelance developer',
          org: 'EV Technology',
          place: 'Remote',
          summary:
            'Web solutions, REST APIs, and PostgreSQL, with responsive interfaces. That is how the previous site describes it. No clients or figures are published.',
        },
        {
          id: 'unicaribe',
          kind: 'study',
          years: '2022 — 2024',
          title: 'Software Engineering',
          org: 'Universidad del Caribe (UNICARIBE)',
          place: 'Santo Domingo, Dominican Republic',
          summary: 'Studies in software development, systems architecture, and project management.',
        },
        {
          id: 'itla',
          kind: 'study',
          years: '2019 — 2022',
          title: 'Software Development Technologist',
          org: 'Instituto Tecnológico de Las Américas (ITLA)',
          place: 'Santo Domingo, Dominican Republic',
          summary: 'Focus on web development, databases, and object-oriented programming.',
        },
      ],
    },
    lab: {
      index: '06  /  Lab',
      title: 'One charge, three processors, a single key.',
      lede:
        'A frontend simulation with fictional data. It shows how a router picks the first processor that can still answer, and why a retry travels with the same key.',
      fiction: 'Northline, Harbor, and Meridian are not real. This is not any employer’s architecture.',
      how: 'Mark a processor as down and send again. The charge moves to the next one still standing. The key stays until you ask for a new one.',
      keyLabel: 'Idempotency key',
      newKey: 'New key',
      send: 'Send a test charge',
      changeState: 'Change state',
      orderLabel: 'Attempt order',
      latency: 'Illustrative latency',
      states: {
        up: 'Up',
        degraded: 'Degraded',
        down: 'Down',
      },
      processors: {
        northline: { name: 'Northline', note: 'First attempt' },
        harbor: { name: 'Harbor', note: 'Second attempt' },
        meridian: { name: 'Meridian', note: 'Third attempt' },
      },
      idle: 'No charge yet. Set each processor and send the test.',
      accepted: (name, ms, key) => `Accepted at ${name}. Illustrative ${ms} ms. Key ${key}.`,
      slow: (name, ms, key) => `Accepted with delay at ${name}. Illustrative ${ms} ms. Key ${key}.`,
      rejected: (key) => `Rejected. No processor available. Key ${key} is kept for a safe retry.`,
      skip: (name) => `${name} is down. Skipped.`,
      took: (name, mode) =>
        mode === 'slow'
          ? `${name} answers in a degraded state. Accepted once, and the delay is reported.`
          : `${name} answers. Accepted once.`,
      sameKey: 'A second send uses the same key. That is why a retry is not another charge.',
    },
    contact: {
      index: '07  /  Contact',
      title: 'If there is a system to integrate, let’s talk.',
      lede:
        'Write about backend work, integrations, or a role where that practice matters. I reply to the email you leave in the form.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      placeLabel: 'Location',
      place: 'Santo Domingo, Dominican Republic',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Which system, which team, or which question.',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Message sent. I will reply to that email.',
      failure: 'The message could not be sent. Write directly to rickymonterojobs07@gmail.com.',
      errors: {
        name: 'Enter a name of at least 2 characters.',
        email: 'Enter a valid email.',
        message: 'The message needs at least 12 characters.',
      },
    },
    footer: {
      credit: 'Software engineering',
      note: 'The enterprise cases on this page are anonymized.',
    },
  },
};

export const contactLinks = {
  email: 'rickymonterojobs07@gmail.com',
  github: 'https://github.com/rickyjobs07',
  githubLabel: 'github.com/rickyjobs07',
  site: 'https://rickymontero.com/',
};
