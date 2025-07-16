
import express from 'express';
import cors from 'cors';

const app = express();
app.listen(5000, () => console.log('Server listening on port 5000'));

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.status(200).send('Hello from Express');
} )


app.post('/api/world', (req, res) => {
    let {input} = req.body;

    if(!input) {
        res.status(400).send({msg: 'data not received. input field mandatory'});
        return;
    }
    console.log({post: input})
    res.status(201).send(`I received your POST request. This is what you sent me: ${input}`);
})
