import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {tasks: []},
    reducers: {
        addTodo: (state, action) => {
            console.log(state.tasks)
            state.tasks.push({id: Date.now(), task: action.payload.task, completed: false});
        },
        toggleTodo: (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {...task, completed: !task.completed} : task);
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;