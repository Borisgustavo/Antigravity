
import { NewsItem, ToolItem, TimelineEvent, DirectoryVoice } from './types';

export const NEWS_MOCKS: NewsItem[] = [
  {
    id: 'openai-aws-deal',
    title: 'OpenAI firma acuerdo de nube con Amazon (AWS) por ~US$38.000M (7 años)',
    excerpt: 'OpenAI aseguró capacidad masiva de cómputo en AWS (incluyendo acceso a grandes volúmenes de GPUs) para escalar entrenamiento e inferencia a gran escala.',
    category: 'Empresas',
    source: 'Reuters',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2025-11-03',
    externalUrl: 'https://www.reuters.com/business/retail-consumer/openai-amazon-strike-38-billion-agreement-chatgpt-maker-use-aws-2025-11-03/'
  },
  {
    id: 'gpt-5-1',
    title: 'OpenAI lanza GPT-5.1 (upgrade de ChatGPT)',
    excerpt: 'Actualización de la serie GPT-5 con mejoras de conversación/razonamiento y despliegue en ChatGPT (Instant/Thinking).',
    category: 'Modelos',
    source: 'OpenAI',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2025-11-12',
    externalUrl: 'https://openai.com/index/gpt-5-1/'
  },
  {
    id: 'anthropic-espionage',
    title: 'Anthropic revela y "disrumpe" campaña de ciberespionaje altamente automatizada con IA',
    excerpt: 'Anthropic publicó un análisis donde afirma que atacantes usaron capacidades "agentic" para ejecutar gran parte de una campaña de intrusión de forma inusualmente autónoma.',
    category: 'Seguridad',
    source: 'Anthropic',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2025-11-13',
    externalUrl: 'https://www.anthropic.com/news/disrupting-AI-espionage'
  },
  {
    id: 'google-gemini-3',
    title: 'Google presenta Gemini 3 (modelo más avanzado de su familia)',
    excerpt: 'Google anunció Gemini 3 y su disponibilidad en productos (Gemini app/AI Studio/Vertex AI), reforzando el salto en razonamiento y multimodalidad.',
    content: 'Google presentó Gemini 3 el 18 de noviembre de 2025. Se consolida como el motor transversal de todo el ecosistema (consumo, enterprise, dev), elevando el estándar competitivo en modelos de propósito general.',
    category: 'Modelos',
    source: 'blog.google',
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2025-11-18',
    isFeatured: true,
    externalUrl: 'https://blog.google/products/gemini/gemini-3/'
  },
  {
    id: 'anthropic-azure-deal',
    title: 'Microsoft y Nvidia anuncian inversión en Anthropic + compromiso de ~US$30.000M en Azure',
    excerpt: 'Acuerdo estratégico para escalar Claude en Azure, con inversión planificada de Microsoft/Nvidia y un gran compromiso de compra de cómputo por parte de Anthropic.',
    category: 'Empresas',
    source: 'Reuters',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2025-11-18',
    externalUrl: 'https://www.reuters.com/technology/anthropic-commits-30-billion-microsoft-azure-compute-2025-11-18/'
  },
  {
    id: 'openai-gpt-5-2',
    title: 'OpenAI lanza GPT-5.2 (modelo "frontier" para trabajo profesional y agentes)',
    excerpt: 'OpenAI presentó GPT-5.2 como su modelo más avanzado para tareas profesionales y agentes de larga duración.',
    content: 'OpenAI publicó GPT-5.2 el 11 de diciembre de 2025, destacándolo como su modelo más capaz. Fue una respuesta directa a la presión competitiva, reforzando la carrera por modelos útiles para tareas reales como documentos largos y proyectos multipaso.',
    category: 'Modelos',
    source: 'OpenAI',
    imageUrl: '/images/gpt-5-2-cover.png',
    publishedAt: '2025-12-11',
    isFeatured: true,
    externalUrl: 'https://openai.com/index/introducing-gpt-5-2/'
  },
  {
    id: 'gemini-3-flash',
    title: 'Google lanza Gemini 3 Flash y lo vuelve modelo por defecto en la app',
    excerpt: 'Google amplió la familia Gemini 3 con Flash (optimizado en velocidad/costo) y lo puso como default en Gemini.',
    category: 'Modelos',
    source: 'blog.google',
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200',
    publishedAt: '2025-12-17',
    externalUrl: 'https://blog.google/products/gemini/gemini-3-flash/'
  },
  {
    id: 'gpt-5-2-codex',
    title: 'OpenAI lanza GPT-5.2-Codex (enfocado en ingeniería de software y ciberseguridad defensiva)',
    excerpt: 'Un modelo Codex más capaz y "agentic" para trabajo de programación de mayor alcance, con énfasis en seguridad.',
    category: 'Modelos',
    source: 'OpenAI',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2025-12-18',
    externalUrl: 'https://openai.com/index/introducing-gpt-5-2-codex/'
  },
  {
    id: 'openai-teen-protection',
    title: 'OpenAI refuerza protección para menores y avanza en "age prediction"',
    excerpt: 'OpenAI actualizó su Model Spec con principios U18; en paralelo se reportaron medidas para predecir/identificar usuarios menores y aplicar salvaguardas.',
    category: 'Regulación',
    source: 'OpenAI',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2025-12-18',
    externalUrl: 'https://openai.com/index/updating-model-spec-with-teen-protections/'
  },
  {
    id: 'nvidia-groq-deal',
    title: 'Nvidia firma acuerdo de licenciamiento con Groq y contrata talento clave (inferencia)',
    excerpt: 'Movimiento estratégico hacia inferencia (no adquisición total), con licenciamiento no exclusivo y fichaje de ejecutivos/ingenieros de Groq.',
    content: 'NVIDIA acordó un licenciamiento no exclusivo de la tecnología de Groq para acelerar inferencias de IA. Jonathan Ross y varios ingenieros clave pasan a las filas de NVIDIA, valorando la escala del talento en unos $20.000 millones.',
    category: 'Hardware',
    source: 'Business Insider',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800',
    publishedAt: '2025-12-25',
    isFeatured: true,
    externalUrl: 'https://www.businessinsider.com/nvidia-reaches-licensing-agreement-with-groq-hires-ai-top-talent-2025-12'
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
      url: 'https://www.youtube.com/@DotCSV/streams'
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
      title: 'NotebookLM sorprende en navidad con 4 Bombas GRATIS: Esto puedes hacer ahora',
      url: 'https://www.youtube.com/watch?v=0k7bJqK8Xj8' // Approximate ID or link to channel
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
      title: 'Cómo Crear Web en Minutos con IA (Tutorial de Gemini 3 + Vibe Coding)',
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
      title: 'GOOGLE turns GEMINI into the ULTIMATE ASSISTANT',
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
      title: 'La IA va a CAMBIAR TODO: EMPLEO, RIESGOS y FUTURO | Jon Hernández & René ZZ',
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
      title: 'Creo un canal de YouTube shorts con IA en 7 días',
      url: 'https://www.youtube.com/watch?v=SCK7NrhZl7Y'
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
      title: 'The 4 Gemini 3.0 features that are making people leave ChatGPT',
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
      title: 'Brain-computer interfaces: the breakthrough that connects the brain with machines',
      url: 'https://www.youtube.com/@gustavo-entrala/videos'
    }
  },
  {
    id: 'edteam',
    name: 'EDteam',
    description: 'Educación en tecnología y programación. Cursos de IA, desarrollo web y backend con un enfoque directo: "No te detengas".',
    category: 'YouTube',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
    url: 'https://www.youtube.com/@EDteam',
    type: 'divulgador',
    latestVideo: {
      title: '¿LA INTELIGENCIA ARTIFICIAL SUPERARÁ A LOS HUMANOS EN 2030?',
      url: 'https://www.youtube.com/@EDteam/videos'
    }
  }
];
