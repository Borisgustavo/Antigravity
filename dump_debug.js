
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'constants.tsx');
try {
    const content = fs.readFileSync(filePath, 'binary'); // Read as binary to avoid encoding errors initially
    // Convert to string trying to sanitize
    // We'll just take the last 2000 chars
    const lastPart = content.slice(-2000);
    fs.writeFileSync('dump.txt', lastPart, 'utf8');
    console.log("Dumped last 2000 bytes to dump.txt");
} catch (e) {
    console.error(e);
}
