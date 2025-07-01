import express from 'express';


const books = [{id: 1, title: 'Something', author: 'Mark Twain'}];

export const router = express.Router();

router.use(express.json());

router.get('/books', (req, res) => {
    res.status(200).json(books);
});


router.post('/books', (req, res) => {
    let {title, author} = req.body;
    if (!title || !author) {
        res.status(400).json({msg: 'missing parameters in the body.'});
        return;
    }

    let id = books[books.length -1].id + 1;
    books.push({id, title, author})
    res.status(201).json({msg: 'Created'});

});

router.put('/books/:id', (req, res) => {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({msg: 'Not a valid id'});
        return;
    }
    let book = books.find(book => book.id === id);
    if (book === -1) {
        res.status(404).json({msg: 'book not found'});
        return;
    }

    let {title, author} = req.body;
    if (!title || !author) {
        res.status(400).json({msg: 'missing parameters in the body'});
        return;
    } 

    book.title = title;
    book.author = author;
    res.json({msg: 'Book updated'});

    
})

router.delete('/books/:id', (req, res) => {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({msg: 'invalid id given'});
        return;
    }
    let index = books.findIndex(item => item.id === id);
    if (index === -1) {
        res.status(404).json({msg: 'book not found'});
        return;
    }
    books.splice(index, 1);
    res.json({msg: 'book deleted.'})
})