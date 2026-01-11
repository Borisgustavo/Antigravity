
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const anchor = "https://www.youtube.com/@EDteam/videos";
const anchorIndex = content.indexOf(anchor);

if (anchorIndex === -1) {
    console.error("Could not find EDteam anchor.");
    process.exit(1);
}

// Find the start of the object containing this url
// We'll search backwards for '{'
const objectStart = content.lastIndexOf('{', anchorIndex);
if (objectStart === -1) {
    console.error("Could not find object start.");
    process.exit(1);
}

// Now we replace everything from objectStart to the end of the file.
// We will reconstruct the EDteam object and the rest.

const goodPart = content.substring(0, objectStart);

const newTail = `{
      id: 'ed-team',
      name: 'EDteam',
      category: 'Programación',
      icon: 'code',
      url: 'https://www.youtube.com/@EDteam/videos',
      description: 'Canal líder en educación de programación y tecnología en español.',
      bestFor: 'aprender fundamentos de programación y tecnología.',
      reason: 'Explicaciones claras y profundas sobre tecnología y desarrollo.',
      verified: true,
      type: 'divulgador'
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
console.log("Successfully fixed constants.tsx via Absolute Rewrite.");
