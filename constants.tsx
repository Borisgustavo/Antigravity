
import { NewsItem, ToolItem, TimelineEvent, DirectoryVoice } from './types';

export const NEWS_MOCKS: NewsItem[] = [
  {
    id: 'openclaw-plataforma-ia-local',
    title: 'OpenClaw: La plataforma "local-first" que convierte tu dispositivo en un hub de IA multicanal',
    excerpt: 'OpenClaw lleva la IA a tus dispositivos con un Gateway propio que gestiona sesiones, herramientas y canales de chat (WhatsApp, Telegram, Slack, Discord y más) desde tu propio hardware.',
    content: `OpenClaw es una plataforma diseñada para quienes quieren operar un asistente de IA desde sus propios dispositivos, sin depender de la nube. Su arquitectura "local-first" se basa en un Gateway que actúa como plano de control: administra sesiones, canales, herramientas, eventos y expone una Control UI, WebChat y Dashboard accesibles desde el propio dispositivo.

**Gateway local: el centro de control**
El Gateway de OpenClaw es el núcleo de la plataforma. Desde él se administran sesiones, canales de comunicación, herramientas disponibles y eventos del sistema. Expone una interfaz de control (Control UI), un WebChat integrado y un Dashboard de métricas, todo funcionando en local.

**Bandeja multi-canal: responde donde tú ya chateas**
OpenClaw integra los principales canales de mensajería: WhatsApp, Telegram, Slack, Discord, Google Chat, Signal y Microsoft Teams. Además soporta extensiones como Matrix, Zalo, WebChat y apps para macOS, iOS y Android. La promesa es que puedes usar tu asistente de IA en la app donde ya tienes tu conversación, sin abrir otra interfaz.

**Enrutamiento multi-agente**
Una funcionalidad diferenciadora es la posibilidad de rutear canales, cuentas o peers a agentes aislados mediante workspaces y sesiones por agente. Esto permite separar contextos de manera limpia: por ejemplo, tener un agente para "trabajo" y otro para uso "personal", cada uno con su historial y configuración propios.

**Herramientas "first-class" y automatización**
OpenClaw trae herramientas integradas de primera clase: browser (navegador controlado por la IA), canvas, nodes (acciones del dispositivo), cron (tareas programadas), sessions y acciones específicas para canales como Discord o Slack. La automatización se puede disparar mediante cron/wakeups, webhooks o eventos como Gmail Pub/Sub.

**Skills (extensiones) y ClawHub**
La plataforma soporta un sistema de skills (bundled/managed/workspace) y un registry llamado ClawHub para descubrir e instalar skills adicionales cuando está habilitado. Es el equivalente a una "app store" de capacidades para tu asistente local.

**Voz y apps complementarias**
Para los que quieren ir más allá del texto, OpenClaw ofrece Voice Wake y Talk Mode (con integración de ElevenLabs) y apps complementarias que habilitan notificaciones, uso de cámara y screen recording según los permisos concedidos.

**Seguridad por defecto**
OpenClaw aplica un modelo de seguridad restrictivo: en varios canales el comportamiento predeterminado es DM pairing (dmPolicy="pairing"), lo que significa que desconocidos no pueden ejecutar acciones en tu asistente por defecto. La plataforma incluye una guía de auditoría de seguridad para revisar exposición de red, permisos de archivos, plugins y skills instalados.`,
    category: 'Herramientas',
    source: 'OpenClaw',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-02-28',
    isFeatured: true,
    externalUrl: 'https://github.com/openclaw'
  },
  {
    id: 'claude-opus-4-6',
    title: 'Anthropic lanza Claude Opus 4.6 con "Agent Teams" y contexto de 1M',
    excerpt: 'Nueva versión insignia con 1 millón de tokens de contexto, capacidad de codificación superior y orquestación de equipos de agentes.',
    content: 'Anthropic presentó Claude Opus 4.6 el 5 de febrero de 2026. Este modelo redefine la colaboración hombre-IA con su capacidad de gestionar "equipos de agentes" especializados y un contexto masivo, superando a GPT-5.2 en benchmarks clave de codificación y razonamiento complejo.',
    category: 'Modelos',
    source: 'Anthropic',
    imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2026-02-05',
    externalUrl: 'https://www.anthropic.com/news'
  },
  {
    id: 'openai-frontier',
    title: 'OpenAI lanza "Frontier": Gestión empresarial de agentes de IA',
    excerpt: 'Nueva plataforma para desplegar y gestionar flujos de trabajo de agentes autónomos en infraestructura empresarial existente.',
    category: 'Empresas',
    source: 'OpenAI',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-02-10',
    externalUrl: 'https://openai.com/blog',
    content: `OpenAI ha presentado Frontier, un servicio diseñado para ayudar a las empresas a integrar y gestionar agentes de IA dentro de sus operaciones. Esta plataforma busca cerrar la brecha entre los modelos de lenguaje y las aplicaciones empresariales reales, permitiendo una orquestación segura y escalable.

**Orquestación a escala empresarial**
La herramienta no solo proporciona la inteligencia de los modelos subyacentes, sino que ofrece controles granulares de roles, permisos y trazabilidad. Los administradores de TI ahora pueden visualizar en un dashboard único qué agentes están ejecutando qué tareas, limitando su acceso a bases de datos específicas mediante políticas de seguridad empresariales.

**Integración fluida con sistemas legados**
A diferencia de los asistentes de chat genéricos, Frontier está construido para consumir APIs corporativas. Conectores nativos para SAP, Salesforce, Oracle y herramientas de ITSM como ServiceNow vienen incluidos de fábrica. Esto permite que los agentes "Frontier" puedan resolver tickets de soporte técnico o actualizar registros en el CRM sin intervención humana.

**Alineamiento y gobernanza de datos**
Uno de los puntos clave de este lanzamiento es la garantía de OpenAI de que ningún dato procesado a través de Frontier será utilizado para entrenar sus modelos base. Además, la plataforma incluye "Guardianes de IA", modelos más pequeños dedicados exclusivamente a auditar las acciones de los agentes operativos para evitar "alucinaciones" peligrosas en entornos de producción.`
  },
  {
    id: 'google-antigravity-ide',
    title: 'Google entra al desarrollo nativo con Antigravity IDE',
    excerpt: 'Un entorno de desarrollo gratuito y potenciado por IA que maneja múltiples tareas de codificación simultáneamente.',
    category: 'Herramientas',
    source: 'Google',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-02-12',
    externalUrl: 'https://blog.google/technology/developers/',
    content: `Google desafía a los editores tradicionales con Antigravity IDE. Construido sobre arquitectura de vanguardia, este editor integra profundamente a Gemini para ofrecer asistencia de codificación "agentica", capaz de entender el contexto completo del proyecto y realizar refactorizaciones complejas de forma autónoma.

**El IDE como un programador par**
Mientras que herramientas como GitHub Copilot actuaban principalmente como auto-completadores avanzados, Antigravity IDE puede tomar un requerimiento en lenguaje natural (ej. "Refactoriza el módulo de autenticación para usar OAuth2 en vez de JWT local") y generar un plan de implementación a través de múltiples archivos.

**Contexto del proyecto a nivel de repositorio**
El IDE indexa localmente todo el repositorio de código, los logs de errores y la documentación del proyecto. Cuando el desarrollador hace una pregunta, Gemini formula respuestas analizando todas las dependencias cruzadas. Esto reduce drásticamente el tiempo empleado en buscar en qué parte de la base de código se inicializa un servicio.

**Integración multimodal y ejecución segura**
Al estar embebido en el entorno, Antigravity puede ejecutar comandos de terminal en un entorno aislado (sandbox) para compilar el código y probar si sus propias sugerencias resuelven los tests unitarios. Google afirma que esta capacidad de retroalimentación en bucle cerrado aumenta la tasa de éxito del código generado por IA en un 40% en proyectos complejos.`
  },
  {
    id: 'minimax-m2-5',
    title: 'MiniMax M2.5: Rendimiento de punta a una fracción del costo',
    excerpt: 'El nuevo modelo chino promete igualar el estado del arte con una eficiencia de costos sorprendente.',
    category: 'Modelos',
    source: 'MiniMax',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-02-15',
    externalUrl: 'https://www.minimax.io/',
    content: `MiniMax ha lanzado sus modelos M2.5 y M2.5 Lightning. Estos modelos destacan por ofrecer un rendimiento comparable a los líderes del mercado pero con una arquitectura optimizada que reduce drásticamente los costos de inferencia, haciéndolos ideales para aplicaciones de alto volumen.

**La era de los modelos "Dense-MoE" súper eficientes**
Basados en una arquitectura Mixture of Experts (MoE) altamente refinada, los modelos M2.5 solo activan el 2% de sus parámetros por cada token procesado. Esto significa que requieren significativamente menos energía computacional en paralelo, lo que se traduce directamente en un precio por millón de tokens hasta un 70% inferior al de GPT-4o.

**Rendimiento en Benchmarks**
A pesar de su bajo coste, el modelo insignia M2.5 ha logrado puntuaciones impresionantes en evaluaciones independientes como LMArena y HumanEval, igualando o superando ligeramente el rendimiento de modelos occidentales de la generación anterior en tareas de razonamiento lógico, matemáticas y generación de código en Python.

**Impacto en startups y adopción**
La agresiva estrategia de precios de MiniMax está obligando a todo el ecosistema a reevaluar sus márgenes. Para startups que dependen del uso masivo de APIs de lenguaje (por ejemplo, clasificación de textos a escala, o análisis de millones de reseñas diarias), el cambio hacia APIs compatibles como las de MiniMax representa la diferencia entre un producto rentable o insostenible a largo plazo.`
  },
  {
    id: 'snowflake-openai-partnership',
    title: 'Snowflake y OpenAI: IA segura para datos empresariales',
    excerpt: 'Alianza de $200 millones para permitir que los agentes de IA interactúen con datos gobernados de forma nativa.',
    category: 'Empresas',
    source: 'Snowflake',
    imageUrl: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-02-16',
    externalUrl: 'https://www.snowflake.com/news',
    content: `Snowflake y OpenAI han anunciado una asociación estratégica plurianual. El objetivo es integrar los modelos de OpenAI directamente en la Data Cloud de Snowflake, permitiendo a las empresas construir aplicaciones inteligentes que acceden a sus datos más sensibles sin comprometer la seguridad o la privacidad.

**Modelos en la misma infraestructura de los datos**
Históricamente, el principal freno para la adopción de LLMs en grandes corporaciones ha sido el miedo a exportar datos confidenciales a APIs externas. Con esta asociación, los modelos de OpenAI se ejecutarán dentro del perímetro de seguridad de red del cliente en Snowflake. La latencia de red se minimiza y el riesgo de fuga se mitiga.

**Funciones aceleradas por IA para analistas**
La alianza introduce capacidades nativas de SQL generativo ("text-to-SQL") profundamente calibradas para el dialecto específico de Snowflake. Los analistas de negocios ahora pueden consultar almacenes de datos masivos con preguntas en lenguaje natural, y la plataforma genera las consultas óptimas, respetando las políticas de control de acceso a nivel de fila y columna.

**Fine-Tuning con un clic**
Para corporaciones que requieren que los modelos entiendan su jerga comercial, Snowflake ofrece un conducto automatizado de Fine-Tuning. Utilizando los datos ya estructurados en sus almacenes, las empresas pueden entrenar adaptadores sobre los modelos base de OpenAI asegurando que respuestas futuras consideren el contexto propietario de la compañía sin compartir ese conocimiento con los modelos públicos.`
  },
  {
    id: 'deepseek-r1',
    title: 'DeepSeek R1 sigue impactando con eficiencia extrema',
    excerpt: 'El modelo continúa siendo un referente en razonamiento matemático y de código eficiente.',
    category: 'Modelos',
    source: 'DeepSeek',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2026-01-20',
    externalUrl: 'https://www.deepseek.com/',
    content: `Aunque lanzado a finales de enero, DeepSeek R1 sigue siendo noticia en febrero por su impacto continuo en la industria, forzando a otros actores a priorizar la eficiencia y los modelos de "razonamiento" accesibles.

**El "Momento Sputnik" de la IA Open Source**
El lanzamiento de R1 sacudió los mercados globales de tecnología (provocando incluso caídas temporales en las acciones de fabricantes de hardware). Al demostrar que un modelo de razonamiento abierto puede igualar a sistemas cerrados usando recursos de entrenamiento drásticamente inferiores, DeepSeek rompió la narrativa de que solo empresas con billones de dólares podían competir en la frontera de la IA.

**La técnica de "Reinforcement Learning" puro**
A diferencia de los enfoques occidentales que dependen en gran medida de caros datos etiquetados por humanos (RLHF), DeepSeek R1 descubrió que podía evolucionar comportamientos de razonamiento complejos (como escribir, reflexionar y reescribir) aplicando aprendizaje por refuerzo puro sobre un problema basado en reglas claras, como las matemáticas o el código.

**Impacto en la comunidad de desarrolladores**
La liberación de los pesos bajo una licencia abierta permisiva ha provocado una ola de innovaciones en herramientas locales. R1 ha sido destilado en versiones más pequeñas (como la gama de 7B, 8B y 14B) que los desarrolladores ahora ejecutan sin problemas en MacBooks convencionales usando herramientas nativas, democratizando totalmente el acceso a agentes con capacidad de reflexión profunda.`
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
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    icon: 'history'
  },
  {
    id: 'symbolic-ia',
    date: '1956 – 1973',
    title: 'IA Simbólica y Optimismo',
    description: 'El Dartmouth Workshop (1956) acuña el término AI. Dominio del enfoque simbólico: reglas lógicas "SI-ENTONCES". Éxitos en ajedrez temprano y teoremas, pero choque con la ambigüedad del mundo real.',
    category: 'Optimismo',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
    icon: 'account_tree'
  },
  {
    id: 'first-winter',
    date: '1974 – 1980',
    title: 'Primer "Invierno" de la IA',
    description: 'Caída de financiamiento por promesas no cumplidas en traducción automática y robótica. El informe Lighthill recomienda recortar fondos ante la excesiva complejidad del mundo real para la época.',
    category: 'Invierno',
    imageUrl: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=800',
    icon: 'ac_unit'
  },
  {
    id: 'expert-systems',
    date: '1980 – 1987',
    title: 'Sistemas Expertos',
    description: 'Renacimiento práctico. Programas basados en bases de conocimiento para diagnósticos médicos y fallas industriales. Éxito empresarial pero difícil de escalar por la fragilidad de las reglas manuales.',
    category: 'Empresarial',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800',
    icon: 'groups'
  },
  {
    id: 'second-winter-stats',
    date: '1987 – 2009',
    title: '2º Invierno + Giro Estadístico',
    description: 'Transición de "programar reglas" a "aprender de datos". Aparece Backpropagation (1986). Los modelos probabilísticos y SVM dominan el Machine Learning temprano antes de la era Deep.',
    category: 'Invierno',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
    icon: 'query_stats'
  },
  {
    id: 'deep-learning-takeoff',
    date: '2010 – 2016',
    title: 'Deep Learning Despega',
    description: 'Convergencia de GPUs potentes y Big Data. AlexNet (2012) revoluciona la visión. AlphaGo (2016) vence al campeón mundial de Go, demostrando el poder del aprendizaje por refuerzo profundo.',
    category: 'Explosión',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
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
    imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=800',
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
