
import Router from 'express';
import { getBooks, getBook, addBook, updateBook, deleteBook } from '../controllers/books.js';

export const router = Router();

router.get('/books', getBooks);

router.get('/books/:id', getBook);

router.post('/books', addBook);

router.put('/books/:id', updateBook);

router.delete('/books/:id', deleteBook);

