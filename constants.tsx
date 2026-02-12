
import { NewsItem, ToolItem, TimelineEvent, DirectoryVoice } from './types';

export const NEWS_MOCKS: NewsItem[] = [
  {
    id: 'claude-opus-4-6',
    title: 'Anthropic lanza Claude Opus 4.6 con "Agent Teams" y contexto de 1M',
    excerpt: 'Nueva versión insignia con 1 millón de tokens de contexto, capacidad de codificación superior y orquestación de equipos de agentes.',
    content: 'Anthropic presentó Claude Opus 4.6 el 5 de febrero de 2026. Este modelo redefine la colaboración hombre-IA con su capacidad de gestionar "equipos de agentes" especializados y un contexto masivo, superando a GPT-5.2 en benchmarks clave de codificación y razonamiento complejo.',
    category: 'Modelos',
    source: 'Anthropic',
    imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-02-05',
    isFeatured: true,
    externalUrl: 'https://www.anthropic.com/news'
  },
  {
    id: 'gpt-5-3-codex',
    title: 'OpenAI responde con GPT-5.3 Codex: El primer modelo nativo para agentes de código',
    excerpt: 'Diseñado específicamente para ingeniería de software autónoma, GPT-5.3 Codex promete un 25% más de velocidad y capacidades de depuración automática.',
    category: 'Modelos',
    source: 'OpenAI',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-02-05',
    externalUrl: 'https://openai.com/index/gpt-5-3-codex/',
    content: `OpenAI ha dado un golpe sobre la mesa con GPT-5.3 Codex, una iteración diseñada desde cero para la ingeniería de software autónoma. A diferencia de sus predecesores, que eran generalistas con buenas capacidades de código, Codex 5.3 entiende la arquitectura de sistemas completos, gestiona dependencias complejas y puede refactorizar bases de código legacy con una tasa de error inferior al 2%.

    Las pruebas preliminares muestran que puede actuar como un ingeniero senior en tareas de mantenimiento y como un arquitecto junior en diseño de sistemas. La integración nativa con GitHub Copilot Workspace promete flujos de trabajo donde el humano supervisa y la IA ejecuta la implementación detallada.`
  },
  {
    id: 'deepseek-r1',
    title: 'DeepSeek R1 sacude la industria: Razonamiento de nivel GPT a una fracción del costo',
    excerpt: 'El modelo chino demuestra que la eficiencia es el nuevo campo de batalla, igualando el rendimiento de modelos occidentales en matemáticas y código con mucha menos computación.',
    category: 'Modelos',
    source: 'DeepSeek',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-01-20',
    externalUrl: 'https://www.deepseek.com/',
    content: `La eficiencia es el nuevo "Santo Grial" de la IA, y DeepSeek R1 lo ha demostrado con creces. Este modelo, entrenado con un presupuesto de computación significativamente menor que sus contrapartes occidentales, ha logrado igualar el rendimiento de GPT-4 en tareas de razonamiento matemático y generación de código.

    Su arquitectura "Mixture-of-Experts" (MoE) altamente optimizada permite correr inferencia a una fracción del costo, democratizando el acceso a inteligencia de nivel superior. Esto plantea un serio desafío a los modelos cerrados y caros, sugiriendo un futuro donde la inteligencia de alta calidad sea un commodity accesible para cualquier desarrollador.`
  },
  {
    id: 'google-commerce-protocol',
    title: 'Google lanza Universal Commerce Protocol para agentes de compras autónomos',
    excerpt: 'Google transforma la búsqueda en una capa de ejecución para el comercio, permitiendo que agentes de IA completen compras de principio a fin.',
    category: 'Empresas',
    source: 'Google',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-01-15',
    externalUrl: 'https://blog.google/products/shopping/',
    content: `Google está transformando fundamentalmente la búsqueda comercial con su nuevo Universal Commerce Protocol. Ya no se trata solo de encontrar productos, sino de permitir que agentes de IA negocien, comparen y compren en nombre del usuario.

    Este protocolo estandariza la forma en que los agentes interactúan con las tiendas online, eliminando la fricción de los carritos de compra y los formularios de pago. Para los retailers, esto significa que sus inventarios ahora son legibles por máquinas, abriendo un nuevo canal de ventas directo a la IA.`
  },
  {
    id: 'gemini-personal-intelligence',
    title: 'Gemini ahora se integra profundamente con tus apps de Google (Gmail, Fotos, YouTube)',
    excerpt: 'Nueva actualización "Personal Intelligence" permite a Gemini conectar puntos entre tus datos personales de forma segura para una asistencia ultra-personalizada.',
    category: 'Modelos',
    source: 'Google',
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-01-10',
    externalUrl: 'https://blog.google/products/gemini/',
    content: `La prometida integración de "Personal Intelligence" en Gemini finalmente está aquí. Google ha conectado su modelo más potente con el vasto ecosistema de datos personales del usuario: correos, documentos, fotos y videos de YouTube.

    Ahora puedes pedirle a Gemini que "encuentre la factura de la reparación del coche del año pasado y la compare con el presupuesto actual", o que "cree un itinerario de viaje basado en los videos de viajes que he guardado en YouTube". Todo esto ocurre dentro de un enclave seguro donde los datos personales nunca se utilizan para entrenar el modelo general.`
  },
  {
    id: 'snowflake-openai',
    title: 'Snowflake y OpenAI firman alianza de US$200M para llevar IA a los datos empresariales',
    excerpt: 'Acuerdo estratégico para integrar modelos de OpenAI directamente en la nube de datos de Snowflake, facilitando la creación de apps corporativas seguras.',
    category: 'Empresas',
    source: 'Snowflake',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-02-02',
    externalUrl: 'https://www.snowflake.com/blog/',
    content: `La alianza entre Snowflake y OpenAI marca un hito en la adopción empresarial de la IA. Con una inversión de 200 millones de dólares, ambas compañías buscan resolver el mayor obstáculo para las corporaciones: cómo usar sus datos privados con LLMs potentes sin comprometer la seguridad.

    La integración permitirá ejecutar modelos de OpenAI directamente dentro del perímetro de seguridad de Snowflake Data Cloud. Esto significa que los datos nunca salen de la gobernanza de la empresa, permitiendo aplicaciones de RAG (Retrieval-Augmented Generation) masivas y seguras para finanzas, salud y legal.`
  },
  {
    id: 'chatgpt-ads-go',
    title: 'ChatGPT introduce publicidad y nuevo plan "Go" de US$8/mes',
    excerpt: 'OpenAI diversifica sus ingresos con un nivel intermedio más económico y la introducción de anuncios en los planes gratuitos.',
    category: 'Empresas',
    source: 'The Verge',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-01-12',
    externalUrl: 'https://www.theverge.com/',
    content: `En un movimiento que muchos analistas predijeron, OpenAI ha diversificado su modelo de negocio introduciendo el plan "ChatGPT Go" por $8 al mes, y una capa gratuita soportada por publicidad.

    Esta estrategia busca capturar el mercado masivo que encuentra excesivo el precio de $20/mes del plan Plus, pero que necesita más capacidad que la versión gratuita básica. Los anuncios, según OpenAI, serán "no intrusivos y contextualmente relevantes", apareciendo en la barra lateral o como sugerencias patrocinadas al final de las respuestas, similar al modelo de búsqueda tradicional.`
  }
];

export const TOOLS_MOCKS: ToolItem[] = [
  {
    id: 'gemini-updates',
    name: 'Google Gemini',
    description: 'Notas de lanzamiento oficiales y nuevas capacidades del ecosistema multimodal de Google.',
    category: 'LLM / Multimodal',
    icon: 'brightness_auto',
    url: 'https://gemini.google.com/updates',
    verified: true
  },
  {
    id: 'claude-anthropic',
    name: 'Anthropic Claude',
    description: 'Novedades de la familia Claude y avances en seguridad (Constitutional AI).',
    category: 'LLM / Seguridad',
    icon: 'psychology',
    url: 'https://www.anthropic.com/news',
    verified: true
  }
];

export const TIMELINE_MOCKS: TimelineEvent[] = [
  {
    id: 'foundation-era',
    date: '1945 – 1956',
    title: 'Fundamentos y Sueños',
    description: 'Se sientan las bases matemáticas. Alan Turing propone el "Juego de Imitación" (1950) cuestionando si las máquinas pueden pensar. La inteligencia se evalúa por comportamiento observable.',
    category: 'Nacimiento',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
    icon: 'history'
  },
  {
    id: 'symbolic-ia',
    date: '1956 – 1973',
    title: 'IA Simbólica y Optimismo',
    description: 'El Dartmouth Workshop (1956) acuña el término AI. Dominio del enfoque simbólico: reglas lógicas "SI-ENTONCES". Éxitos en ajedrez temprano y teoremas, pero choque con la ambigüedad del mundo real.',
    category: 'Optimismo',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
    icon: 'account_tree'
  },
  {
    id: 'first-winter',
    date: '1974 – 1980',
    title: 'Primer "Invierno" de la IA',
    description: 'Caída de financiamiento por promesas no cumplidas en traducción automática y robótica. El informe Lighthill recomienda recortar fondos ante la excesiva complejidad del mundo real para la época.',
    category: 'Invierno',
    imageUrl: 'https://images.unsplash.com/photo-1603732551658-5fabbaff8453?auto=format&fit=crop&q=80&w=800',
    icon: 'ac_unit'
  },
  {
    id: 'expert-systems',
    date: '1980 – 1987',
    title: 'Sistemas Expertos',
    description: 'Renacimiento práctico. Programas basados en bases de conocimiento para diagnósticos médicos y fallas industriales. Éxito empresarial pero difícil de escalar por la fragilidad de las reglas manuales.',
    category: 'Empresarial',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    icon: 'groups'
  },
  {
    id: 'second-winter-stats',
    date: '1987 – 2009',
    title: '2º Invierno + Giro Estadístico',
    description: 'Transición de "programar reglas" a "aprender de datos". Aparece Backpropagation (1986). Los modelos probabilísticos y SVM dominan el Machine Learning temprano antes de la era Deep.',
    category: 'Invierno',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    icon: 'query_stats'
  },
  {
    id: 'deep-learning-takeoff',
    date: '2010 – 2016',
    title: 'Deep Learning Despega',
    description: 'Convergencia de GPUs potentes y Big Data. AlexNet (2012) revoluciona la visión. AlphaGo (2016) vence al campeón mundial de Go, demostrando el poder del aprendizaje por refuerzo profundo.',
    category: 'Explosión',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800',
    icon: 'model_training'
  },
  {
    id: 'transformer-revolution',
    date: '2017 – 2021',
    title: 'Transformers y Modelos Fundacionales',
    description: 'Nace el Transformer (2017): "Attention is all you need". Capacidad de procesar relaciones masivas en texto. Nace el paradigma de entrenar un modelo gigante y adaptarlo (fine-tuning).',
    category: 'Paradigma',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    icon: 'psychology'
  },
  {
    id: 'generative-ai-era',
    date: '2022 – 2025',
    title: 'IA Generativa para Todos',
    description: 'La IA pasa de predecir a crear: chat, imagen, video. ChatGPT democratiza el acceso. Integración multimodal y agentes autónomos. Inicio de la regulación global a gran escala.',
    category: 'Actualidad',
    imageUrl: 'https://images.unsplash.com/photo-1678382156212-f1400266850d?auto=format&fit=crop&q=80&w=800',
    icon: 'auto_awesome'
  }
];

export const DIRECTORY_MOCKS: DirectoryVoice[] = [
  {
    id: 'dotcsv',
    name: 'DotCSV',
    realName: 'Carlos Santana Vega',
    description: 'Considerado el principal divulgador de IA en español. Análisis profundo desde avances técnicos hasta impacto social.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    tag: 'REFERENTE',
    url: 'https://www.youtube.com/@DotCSV',
    type: 'divulgador',
    latestVideo: {
      title: 'EXPECTATIVAS vs. REALIDAD: Analizando Mis Predicciones de IA 2025',
      url: 'https://www.youtube.com/@DotCSV/videos'
    }
  },
  {
    id: 'alejavirivera',
    name: 'Alejavi Rivera',
    description: 'IA accesible de forma práctica y directa. Casos de uso reales y aplicaciones cotidianas para entender la tecnología sin tecnicismos complejos.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@alejavirivera',
    type: 'divulgador',
    latestVideo: {
      title: 'Gemini 3 just blew out web animations! And this you can do.',
      url: 'https://www.youtube.com/@alejavirivera/videos'
    }
  },
  {
    id: 'nicocmw',
    name: 'Nico CMW',
    description: 'Expertise en automatización y agentes de IA. Tutoriales profundos sobre RAG, n8n y creación de sistemas autónomos para negocios y productividad.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@nicocmw',
    type: 'divulgador',
    latestVideo: {
      title: 'Tutorial DeepSeek R1: Crea tu propio Agente Local 100% Privado',
      url: 'https://www.youtube.com/@nicocmw/videos'
    }
  },
  {
    id: 'xaviermitjana',
    name: 'Xavier Mitjana',
    description: 'Laboratorio de IA. Tutoriales, reviews y demostraciones de herramientas aplicadas a la creatividad, generación de vídeo y arte con inteligencia artificial.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@XavierMitjana',
    type: 'divulgador',
    latestVideo: {
      title: 'Probando Sora 2: ¿Adiós a los actores reales? Análisis completo',
      url: 'https://www.youtube.com/@XavierMitjana/videos'
    }
  },
  {
    id: 'lainteligenciaartificial',
    name: 'La Inteligencia Artificial',
    realName: 'Jon Hernández',
    description: 'Divulgación de IA y podcast con expertos. Análisis de herramientas y reflexiones profundas sobre el impacto de la tecnología en la sociedad y el trabajo.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@la_inteligencia_artificial',
    type: 'divulgador',
    latestVideo: {
      title: 'El Futuro del Trabajo en 2026: Informe Exclusivo de OpenAI',
      url: 'https://www.youtube.com/@la_inteligencia_artificial/videos'
    }
  },
  {
    id: 'donebylaura',
    name: 'Done by Laura',
    description: 'Creatividad y herramientas de IA. Tutoriales sobre cómo viralizar contenido, uso de herramientas de video IA y trucos prácticos para creadores.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@donebyLaura',
    type: 'divulgador',
    latestVideo: {
      title: 'Cómo crear contenido automático con GPT-5.3 (Flujo 1 clic)',
      url: 'https://www.youtube.com/@donebyLaura/videos'
    }
  },
  {
    id: 'miguebaenaia',
    name: 'Migue Baena IA',
    description: 'Automatización con IA y servicios. Tutoriales sobre herramientas, creación de influencers virtuales y optimización de flujos de trabajo profesionales.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@MigueBaenaIA',
    type: 'divulgador',
    latestVideo: {
      title: 'Agentes Autónomos: Automatiza tu Agencia en 2026',
      url: 'https://www.youtube.com/@MigueBaenaIA/videos'
    }
  },
  {
    id: 'gustavoentrala',
    name: 'Gustavo Entrala',
    description: 'Estrategia y futuro. Ayuda a marcas y directivos a diseñar su futuro con IA. Análisis de tendencias, cultura de innovación y el impacto de los agentes de IA en los negocios.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@gustavo-entrala',
    type: 'divulgador',
    latestVideo: {
      title: 'Apple Intelligence: La verdadera revolución silenciosa (iPhone 17)',
      url: 'https://www.youtube.com/@gustavo-entrala/videos'
    }
  },
  {
    id: 'ed-team',
    name: 'EDteam',
    description: 'Canal líder en educación de programación y tecnología en español.',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@EDteam',
    type: 'divulgador',
    latestVideo: {
      title: '¿Por qué NO debes aprender Prompt Engineering en 2026?',
      url: 'https://www.youtube.com/@EDteam/videos'
    }
  }
];

export const VIDEO_TOOLS_RANKING: ToolItem[] = [
  {
    id: 'runway',
    name: 'Runway',
    category: 'Video Generativo',
    icon: 'movie_filter',
    url: 'https://runwayml.com/',
    description: 'Suite creativa completa para generación y edición de video con IA.',
    bestFor: 'text-to-video “cinematográfico” + edición/generación en un mismo flujo.',
    reason: 'Suele liderar en calidad general y control creativo (modelos y herramientas de generación/edición).',
    verified: true
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    category: 'Video Comercial',
    icon: 'brush',
    url: 'https://www.adobe.com/products/firefly/features/ai-video-generator.html',
    description: 'Generación de video integrada en el ecosistema Adobe.',
    bestFor: 'contenido “comercial” y flujos con herramientas Adobe.',
    reason: 'Enfoque fuerte en uso comercial y ecosistema Creative Cloud.',
    verified: true
  },
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    category: 'Video Realista',
    icon: 'auto_awesome',
    url: 'https://lumalabs.ai/dream-machine',
    description: 'Generador de video de alta calidad y rapidez.',
    bestFor: 'videos realistas con movimiento “natural” desde texto/imagen.',
    reason: 'Muy orientado a resultados cinematográficos y creación rápida en web/iOS.',
    verified: true
  },
  {
    id: 'pika',
    name: 'Pika',
    category: 'Video Social',
    icon: 'animation',
    url: 'https://pika.art/',
    description: 'Plataforma ágil para creación de videos cortos.',
    bestFor: 'clips rápidos para redes, efectos creativos y experimentación.',
    reason: 'Plataforma “idea-to-video” muy ágil, con planes y funciones pensadas para creators.',
    verified: true
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    category: 'Avatares AI',
    icon: 'person_pin',
    url: 'https://www.synthesia.io/',
    description: 'Generación de video con avatares para empresas.',
    bestFor: 'videos con avatares (capacitaciones, onboarding, presentaciones) en muchos idiomas.',
    reason: 'Fuerte en “texto → video” con avatares/locuciones para uso empresarial.',
    verified: true
  }
];
