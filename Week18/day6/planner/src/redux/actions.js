export const ADD_TASK = 'add_task';
export const EDIT_TASK = 'edit_task';
export const TOGGLE_TASK = 'toggle_task'
export const DELETE_TASK = 'delete_task';
export const UPDATE_DATE = 'update_date';


export const addTask = (date, task) => ({type: ADD_TASK, payload: {date, task}});
export const editTask = (id, task) => ({type: EDIT_TASK, payload: {id, task}});
export const toggleTask = (id) => ({type: TOGGLE_TASK, payload: {id}});
export const deleteTask = (id) => ({type: DELETE_TASK, payload:{id}});

export const updateDate = (date) => ({type: UPDATE_DATE, payload: {date}});