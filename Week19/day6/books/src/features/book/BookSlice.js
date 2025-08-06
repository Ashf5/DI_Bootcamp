
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: [
        { id: 1, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
        { id: 2, title: "Frankenstein", author: "Mary Shelley", genre: "Horror" },
        { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" }
    ],
    reducers: {
        addBook: (state, action) => {
            let {title, author, genre} = action.payload;
            let id = state[state.length - 1].id + 1;
            state.push({id, title, author, genre});
        },
        deleteBook: (state, action) => {
            return state.filter(book => book.id !== action.payload.id);
        }
    }

})

export default  bookSlice.reducer;
export const {addBook, deleteBook} = bookSlice.actions;