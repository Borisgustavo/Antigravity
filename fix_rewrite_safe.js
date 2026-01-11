
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const anchor = "id: 'miguebaenaia',";
const anchorIndex = content.indexOf(anchor);

if (anchorIndex === -1) {
    console.error("Could not find anchor.");
    process.exit(1);
}

// Find the closing brace of miguebaenaia
// It likely has 'latestVideo' etc.
// We search for the next '},' that is followed by '{' or ']'?
// Actually, we can just search for the NEXT object start `{` which would be gustavoentrala (if it exists)
// But to be safe, we'll find the closing brace of the current object.
// We can count braces?
// Or assume standard formatting:
//     key: val
//   },

const closingBraceIndex = content.indexOf('  },', anchorIndex); // Assume 2 spaces indentation + brace
if (closingBraceIndex === -1) {
    console.error("Could not find closing brace for anchor.");
    process.exit(1);
}

const cutIndex = closingBraceIndex + 4; // },\n

const goodPart = content.substring(0, cutIndex);

const newTail = `
    {
      id: 'gustavoentrala',
      name: 'Gustavo Entrala',
      description: 'Estrategia y futuro. Ayuda a marcas y directivos a diseñar su futuro con IA. Análisis de tendencias, cultura de innovación y el impacto de los agentes de IA en los negocios.',
      category: 'YouTube',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
      url: 'https://www.youtube.com/@gustavo-entrala',
      type: 'divulgador',
      latestVideo: {
        title: 'Entrevista a Sam Altman',
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
        title: 'Último video de EDteam',
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
`;

const finalContent = goodPart + newTail;
fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Fixed constants.tsx safely.");
