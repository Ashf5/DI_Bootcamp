
import List from './List';
import React, { useState } from 'react';

export type Book = {
    id: number;
    title: string;
    author: string;
}

const BookList:React.FC = () => {
    const [books, addBooks] = useState<Book[]>([{id:1, title: 'Harry Potter', 'author': 'JK Rowling'}]);

    const addBook = () => {
        addBooks([...books, {id: books.length + 1, title: "The hunger games", author: "who knows"}])
    }

    return (
        <>
            <List<Book> items={books} renderItem = {(item) => <>{item.title} {item.author}</>}/>
            <button onClick={addBook}>Add Book</button>
        </>
        
    )
}

export default BookList;
