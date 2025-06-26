
import fs from 'fs';

export function readGivenFile(filePath) {
    try {
        fs.readFile(filePath, 'utf-8', (err, response) => {
            if (err) {
                throw new Error('Error reading file, check file path');
            }
            console.log(response);
            
        }) 
    }catch(err) {
        console.log(err);
    }
}
