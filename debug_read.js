
import fs from 'fs';
const lines = fs.readFileSync('constants.tsx', 'utf8').split('\n');
for (let i = 320; i < 350; i++) {
    if (lines[i] !== undefined) {
        console.log(`${i + 1}: ${JSON.stringify(lines[i])}`);
    }
}
