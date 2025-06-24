
import fs from 'fs';

export function readFile(file) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }else {
            console.log(data);
        }
    })
}

export function writeFile(file, data) {
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log(err);
        }else {
            console.log('write operation success!');
        }
    })
}