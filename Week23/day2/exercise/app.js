
import express from 'express'
import { router } from './routes/router.js';
import cookieParser from 'cookie-parser';

let app = express()

app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);