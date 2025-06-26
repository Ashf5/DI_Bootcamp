
import readline from 'readline';
import { makeWeatherRequest } from './weather.js';


export function promptForCity() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter city: '
    });
    rl.prompt();

    rl.on('line', (line) => {
        makeWeatherRequest(line);
        rl.close();
    });
}
