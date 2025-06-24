
import fs from 'fs';

export function readFileData(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            throw new Error('Error reading the file, check the file path.')
        }else {
            console.log(data);
            
        }
    })
}