
import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express();

app.listen(5000, () => console.log('Listening on port 5000'));

app.get('/posts', (req, res) => {
    fetchPosts().then(data => {
        if (data) {
            console.log('Data successfully sent');
            
            res.status(200).json(data);
        }else {
            res.status(500).json({msg: 'Error fetching data'});
        }
    });
})