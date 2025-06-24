
import fs from 'fs';

function readDirectory(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.log(err);
        }else {
            console.log('Files:', files);
            
        }
    })
}

readDirectory('./');