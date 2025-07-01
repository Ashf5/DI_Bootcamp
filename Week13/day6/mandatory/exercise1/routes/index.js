
import express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('My homepage');
});

router.get('/about', (req, res) => {
    res.send('About me page');
})