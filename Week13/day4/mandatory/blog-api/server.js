
import express from 'express';

const app = express();

app.listen(3000, () => console.log('Server running on port 3000'));
app.use(express.json());


let data = [
    {id:1, title: 'blog on express', content: 'Express is awesome!'},
    {id:2, title: 'blog on node', content: 'Node is great for backend!'},
    {id:3, title: 'blog on javascript', content: 'JavaScript is versatile!'},
    {id:4, title: 'blog on react', content: 'React is a powerful library!'},
    {id:5, title: 'blog on vue', content: 'Vue is easy to learn!'},
    {id:6, title: 'blog on angular', content: 'Angular is a complete framework!'},
    {id:7, title: 'blog on python', content: 'Python is great for data science!'},
    {id:8, title: 'blog on ruby', content: 'Ruby is elegant and expressive!'},
    {id:9, title: 'blog on java', content: 'Java is widely used in enterprise!'},
    {id:10, title: 'blog on c#', content: 'C# is powerful for Windows applications!'},
    {id:11, title: 'blog on php', content: 'PHP is popular for web development!'},
    {id:12, title: 'blog on go', content: 'Go is efficient for concurrent programming!'},
    {id:13, title: 'blog on swift', content: 'Swift is great for iOS development!'},
    {id:14, title: 'blog on kotlin', content: 'Kotlin is modern and concise!'},
    {id:15, title: 'blog on typescript', content: 'TypeScript adds type safety to JavaScript!'},
    {id:16, title: 'blog on rust', content: 'Rust is safe and fast!'},
    {id:17, title: 'blog on dart', content: 'Dart is great for Flutter development!'},
    {id:18, title: 'blog on scala', content: 'Scala combines functional and object-oriented programming!'},
    {id:19, title: 'blog on elixir', content: 'Elixir is great for concurrent applications!'},
    {id:20, title: 'blog on clojure', content: 'Clojure is a modern Lisp!'}
]


app.get('/posts', (req, res) => {
    res.json(data);
});


app.get('/posts/:id', (req, res) => {
    let id = req.params.id;
    let idNum = Number(id);
    if(isNaN(idNum)){
        res.status(400).json({'msg': 'improper request'});
        return;
    }

    let post = data.find(item => item.id === idNum);
    if (!post) {
        res.status(404).json({'msg': 'post not found'});
        return;
    }
    res.json(post);
});


app.post('/posts', (req, res) => {
    let { title, content} = req.body;
    if (!title || !content) {
        res.status(400).json({'msg': 'improper data received.'});
        return;
    }
    let id = data[data.length -1].id + 1;
    data.push({id, title, content});

    
    res.status(201).json({'msg': 'created', "new":{id, title, content}});
});


app.put('/posts/:id', (req, res) => {
    let idNum = Number(req.params.id);
    if (!idNum) {
        res.status(401).json({'msg': 'Improper Endpoint parameter'});
        return;
    }
    let post = data.find(post => post.id === idNum);
    if (!post) {
        res.status(404).json({'msg': 'Post not found'});
        return;
    }
    let { title, content} = req.body;
    if (!title || !content) {
        res.status(401).json({'msg': 'Improper data received, title and content are mandatory'});
        return;
    }
    post = {idNum, title, content};
    res.json({'msg': 'updated'});
});

app.delete('/posts/:id', (req, res) => {
    let idNum = Number(req.params.id);
    if (!idNum) {
        res.status(401).json({'msg': 'Improper Endpoint parameter'});
        return;
    }

    let index = data.findIndex(item => item.id === idNum);
    
    if (index === -1) {
        res.status(404).json({'msg': 'post not found'});
        return;
    }
    data.splice(index, 1);
    res.json({msg: 'deleted'});
});

app.use((req, res, next) => {
  res.status(404).json({ msg: 'Not Found' });
});
