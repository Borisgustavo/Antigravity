
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The marker where the file goes bad.
// It seems it happens after the 'chatgpt-canvas' object.
// We will look for the chatgpt-canvas entry and truncate after it, then append the new content.

const needle = `    {
      id: 'chatgpt-canvas',
      name: 'ChatGPT Canvas',
      category: 'Programación',
      icon: 'code',
      url: 'https://chat.openai.com/',
      description: 'Interfaz colaborativa para edición de código y escritura.',
      bestFor: 'proyectos de programación y redacción iterativa.',
      reason: 'Mejora significativa en la experiencia de usuario para tareas complejas.',
      verified: true
    },`;

const needleIndex = content.indexOf(needle);

if (needleIndex === -1) {
    console.error("Could not find the chatgpt-canvas entry.");
    process.exit(1);
}

// Keep content up to the end of the needle
const goodContent = content.substring(0, needleIndex + needle.length);

const newContent = `
    {
        id: 'grok-3',
        name: 'Grok 3',
        category: 'Modelos de Lenguaje',
        icon: 'psychology',
        url: 'https://x.ai/',
        description: 'Modelo con acceso a tiempo real y capacidades de razonamiento ampliadas.',
        bestFor: 'noticias en tiempo real y análisis de tendencias.',
        reason: 'Integración única con datos en tiempo real de X.',
        verified: true
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
`;

const finalContent = goodContent + newContent;

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Successfully fixed constants.tsx");
