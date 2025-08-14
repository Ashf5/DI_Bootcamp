
import {createSlice} from '@reduxjs/toolkit';

let initialState = [
  { id: 1, title: "Finish report", completed: false, categoryId: 1 },
  { id: 2, title: "Workout", completed: true, categoryId: 2 },
]


const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            let {title, categoryId} = action.payload;
            state.push({id: Date.now(), title, completed: false, categoryId});
        },
        editTask: (state, action) => {
            let {id, title, completed, categoryId} = action.payload;
            return state.map(task => task.id !== id ? task : {id, title, completed, categoryId});
        },
        toggleTask: (state, action) => {
            return state.map(task => task.id === action.payload.id ? {...task, completed: !task.completed} : task);
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        }
    }
})

export default taskSlice.reducer;
export const {addTask, editTask, toggleTask, deleteTask} = taskSlice.actions;