
import fs from 'fs';

function copy() {
    fs.readFile('./source.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }else {
            fs.writeFile('./destination.txt', data, (err) => {
                if (err) console.log('Error writing', err);
        });
        }
    })
}

copy()
