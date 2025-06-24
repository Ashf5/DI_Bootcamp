
import { greet } from './greeting.js';
import { displayColorfulMessage } from './colorful-message.js';
import { readFileData } from './files/read-file.js';


console.log(greet('Asher'));
console.log(displayColorfulMessage());
readFileData('./files/file-data.txt');
