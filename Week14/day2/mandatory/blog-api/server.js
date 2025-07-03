
import express from 'express';
await import ('./models/postModel.js');
import {router} from './routes/blogRoutes.js';



let app = express();
app.use(express.json());
app.use(router);
app.listen(3000, () => console.log('listening on port 3000'));




