
import express from 'express';
import {router} from './routes/bookRoutes.js'


let app = express();
app.use(express.json());
app.use('/api', router);


app.listen(5000, () => console.log('listening on port 5000'));

