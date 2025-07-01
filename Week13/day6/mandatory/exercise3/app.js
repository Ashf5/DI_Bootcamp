
import express from 'express';
import {router} from './routes/books.js';


const server = express();
server.listen(5000, () => console.log('Listening on port 5000'));

server.use(router);
