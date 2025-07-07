import express from 'express';

import {router} from './routes/userRoutes.js';

const app = express();

app.listen(5000, () => console.log('listening on port 5000'));

app.use(express.static('public'));
app.use(express.json());
app.use(router);