
import {createSlice} from '@reduxjs/toolkit';


const plannerSlice = createSlice({
    name:'planner',
    initialState: {tasks: [], currentDate: null},
    reducers: {
        addTodo: (state, action) => {
            const {date, task} = action.payload;
            state.tasks.push({id: Date.now(), date, task})
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        editTodo: (state, action) => {
            state.tasks = state.tasks.map(todo => todo.id === action.payload.id ? {...todo, task: action.payload.task} : todo)
        },
        updateDate: (state, action) => {
            state.currentDate = action.payload.date
        }
    }
})

export const {addTodo, deleteTodo, editTodo, updateDate} = plannerSlice.actions;
export default plannerSlice.reducer;