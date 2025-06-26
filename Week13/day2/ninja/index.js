
import { Command } from 'commander';
import { greetPerson } from './commands/greet.js';
import { getRandomJoke } from './commands/fetch.js';
import { readGivenFile } from './commands/read.js';


const program = new Command();

program.command('greet <name>').description('Outputs a nice greeting for the given name').action((name) => greetPerson(name));
program.command('fetch-joke').description('Outputs a random joke').action(getRandomJoke);
program.command('read-file <filePath>').description('Reads a text file and outputs to console').action((filePath) => readGivenFile(filePath));

program.parse(process.argv);