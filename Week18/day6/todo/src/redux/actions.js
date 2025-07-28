export const ADD_TODO = 'add_todo';
export const TOGGLE_TODO = 'toggle_todo';
export const REMOVE_TODO = 'remove_todo';


export const addTodo = (text) => ({type: ADD_TODO, payload: text});
export const toggleTodo = (id) => ({type: TOGGLE_TODO, payload: id});
export const removeTodo = (id) => ({type: REMOVE_TODO, payload:id});