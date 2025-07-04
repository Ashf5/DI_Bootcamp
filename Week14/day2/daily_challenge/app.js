
import express from 'express';
import {router} from './routes/userRoutes.js';


const app = express();
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('listening on server 5000'));