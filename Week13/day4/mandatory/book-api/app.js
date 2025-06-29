
import express from 'express';


const app = express();
app.use(express.json());

let books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', publishedYear: 1951 },
    { id: 6, title: 'Brave New World', author: 'Aldous Huxley', publishedYear: 1932 },
    { id: 7, title: 'Fahrenheit 451', author: 'Ray Bradbury', publishedYear: 1953 }
];

app.listen(5000, () => console.log('listening on port 5000'));

app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});


app.get('/api/books/:id', (req, res) => {
    let idNum = Number(req.params.id);
    if (!idNum) {
        res.status(400).json({msg: 'Not a valid ID'});
        return;
    }
    let book = books.find(item => item.id === idNum);
    if (!book) {
        res.status(404).json({msg: 'Book not found'});
        return;
    }
    res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
    let {title, author, publishedYear} = req.body;
    if (!title || !author || !publishedYear) {
        res.status(400).json({msg: 'Improper data received.'});
        return;
    }
    let id = books[books.length -1].id + 1;
    books.push({id, title, author, publishedYear});
    res.status(201).json({id, title, author, publishedYear});
})