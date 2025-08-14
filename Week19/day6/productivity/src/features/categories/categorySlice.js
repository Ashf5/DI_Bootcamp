
import {createSlice} from '@reduxjs/toolkit';

let initialState = [
  { id: 1, name: "Work" },
  { id: 2, name: "Personal" }
]


const categorySlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        addCategory: (state, action) => {
            let {name} = action.payload;
            state.push({id: state[state.length -1].id + 1, name});
        },
        editCategory: (state, action) => {
            let {id, name} = action.payload;
            return state.map(category => category.id !== id ? category : {id, name});
        },
        deleteCategory: (state, action) => {
            return state.filter(category => category.id !== action.payload.id);
        }
    }
})

export default categorySlice.reducer;
export const {addCategory, editCategory, deleteCategory} = categorySlice.actions;