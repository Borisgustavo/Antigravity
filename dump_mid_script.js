
import fs from 'fs';
const lines = fs.readFileSync('constants.tsx', 'utf8').split('\n');
const chunk = lines.slice(200, 310).join('\n');
fs.writeFileSync('dump_mid.txt', chunk);
