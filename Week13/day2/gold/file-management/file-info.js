
import path from 'path';
import fs from 'fs';


export function displayStats(fileName) {
    let filePath = path.join('./data', fileName);
    if (fs.existsSync(filePath)) {
        let fileData = fs.statSync(filePath);
        let { size, ctimeMs } = {...fileData};
        console.log(`Exists!! Size: ${size}, Creation Time: ${ctimeMs}`);
        return;
    }
    console.log('File not found');
}
