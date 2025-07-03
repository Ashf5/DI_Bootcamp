
import { db } from '../config/db.js';


export async function fetchBooks() {
    let books = await db('books').select();
    return books;
}


export async function fetchBook(id) {
    let book = await db('books').select().where({ id: id });
    return book
}

export async function addBookData(title, author, publishedyear) {
    let book = await db('books').insert({title, author, publishedyear}, ['id', 'title', 'author', 'publishedyear']);
    return book;
}


export async function updateBookData(id, title, author, publishedyear) {
    let book = await db('books').where('id', id).update({title, author, publishedyear}, ['id', 'title', 'author', 'publishedyear']);
    return book;
}

export async function deleteBookData(id) {
    let deletedBook = await db('books').where('id', id).del(['id', 'title', 'author', 'publishedyear']);
    return deletedBook
}
