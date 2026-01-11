
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'constants.tsx');

// Try reading as UTF-16LE
let content;
try {
    content = fs.readFileSync(filePath, 'utf16le');
} catch (e) {
    console.error("Failed to read file:", e);
    process.exit(1);
}

// Check if it looks like valid code.
if (!content.includes('export const DIRECTORY_MOCKS')) {
    console.log("UTF-16LE read failed to produce expected content. Trying UTF-8.");
    content = fs.readFileSync(filePath, 'utf8');
}

// Now apply the fix logic: find last 'type:' and cut.
const lastTypeIndex = content.lastIndexOf("type:");

if (lastTypeIndex === -1) {
    console.error("Could not find any 'type:' property. Content preview:");
    console.log(content.slice(0, 200));
    process.exit(1);
}

// Find the closing brace
const afterType = content.substring(lastTypeIndex);
const closingBraceRelative = afterType.indexOf('}');
if (closingBraceRelative === -1) {
    console.error("Could not find closing brace.");
    process.exit(1);
}

const cutIndex = lastTypeIndex + closingBraceRelative + 1;
const goodPart = content.substring(0, cutIndex);

const newPart = `
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

const finalContent = goodPart + newPart;

// Write back as UTF-8
fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Successfully fixed encoding and content of constants.tsx");
