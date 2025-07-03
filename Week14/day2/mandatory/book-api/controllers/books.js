
import { fetchBooks, fetchBook, addBookData, updateBookData, deleteBookData } from "../models/booksData.js";

export async function getBooks(req, res) {
    try {
        let books = await fetchBooks();
        res.status(200).json(books)
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error fetching the data'});
    }
}

export async function getBook(req, res) {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({msg: 'invalid id given'});
        return;
    }

    try {
        let book = await fetchBook(id);
        if ((book.length === 0)) {
            res.status(404).json({msg: 'Book not found'});
            return 
        }
        res.status(200).json(book);
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error fetching the book'});
    }

}

export async function addBook(req, res) {
    let {title, author, publishedyear} = req.body;
    if(!title || !author || !publishedyear) {
        res.status(400).json({msg: 'missing data in body.'});
        return;
    }
    try{
        let createdBook = await addBookData(title, author, publishedyear);
        res.status(201).json(createdBook);
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error creating new book'});
    }
    
}


export async function updateBook(req, res) {
    let id = Number(req.params.id);
    let {title, author, publishedyear} = req.body;

    if (!id || !title || !author || !publishedyear) {
        res.status(400).json({msg: 'improper request, recheck data.'})
    }

    try {
        let updatedBook = await updateBookData(id, title, author, publishedyear);
        if (updatedBook.length === 0) {
            res.status(404).json({msg: 'book not found'});
        }
        res.status(201).json(updatedBook);
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error updating database'});
    }
}

export async function deleteBook(req, res) {
    let id = Number(req.params.id);
    if (!id) {
        res.status(400).json({msg: 'invalid id given'});
        return;
    }
    try {
        let deletedBook = await deleteBookData(id);
        if (deletedBook.length === 0) {
            res.status(404).json({msg: 'book not found'});
            return;
        }
        res.status(200).json(deletedBook);
    }catch(e) {
        console.log(e);
        res.status(500).json({msg: 'error deleting book'});
    }
}
    

