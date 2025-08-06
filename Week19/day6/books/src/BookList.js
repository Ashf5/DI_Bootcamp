
import { createSelector } from '@reduxjs/toolkit';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { deleteBook } from './features/book/BookSlice';

const baseSelector = (state) => state.bookReducer;

let selectFantasy = createSelector(
    [baseSelector],
    (books) => books.filter(book => book.genre === 'Fantasy')
)

let selectScience = createSelector(
    [baseSelector],
    (books) => books.filter(book => book.genre === 'Science Fiction')
)

let selectHorror = createSelector(
    [baseSelector],
    (books) => books.filter(book => book.genre === 'Horror')
)




function BookList () {
    let [selectedGenre, setGenre] = useState('All');
    let books = useSelector(state => {
        if (selectedGenre === 'Horror') return selectHorror(state);
        if (selectedGenre === 'Science Fiction') return selectScience(state);
        if (selectedGenre === 'Fantasy') return selectFantasy(state);
        return state.bookReducer
    })

    return(
        <div>
            <div>
                <button onClick={() => setGenre('All')}>Show All</button>
                <button onClick={() => setGenre('Fantasy')}>Show Fantasy</button>
                <button onClick={() => setGenre('Science Fiction')}>Show Science Fiction</button>
                <button onClick={() => setGenre('Horror')}>Show Horror</button>
            </div>
            {books.map(book => <BookCard book={book} key={book.id}/>)}
        </div>
    )
}

function BookCard(book) {
    let {id, title, author, genre} = book.book;
    let dispatch = useDispatch()

    return (
        <div>
            <h5>{title}</h5>
            <p>{author}</p>
            <p>{genre}</p>
            <button onClick={() => dispatch(deleteBook({id:id}))}>Delete Book</button>
        </div>
    )
}

export default BookList;