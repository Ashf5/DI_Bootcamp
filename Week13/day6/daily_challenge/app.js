
import express from 'express';
import {router} from './routers/trivia.js';

const server = express();
server.listen(5000, () => console.log('server listening on port 5000'));

server.use(router);