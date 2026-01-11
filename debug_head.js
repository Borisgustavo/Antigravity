
import fs from 'fs';
const content = fs.readFileSync('constants.tsx', 'utf8');
fs.writeFileSync('head_constants.txt', content.substring(0, 500));
console.log("Dumped head of constants.tsx");
