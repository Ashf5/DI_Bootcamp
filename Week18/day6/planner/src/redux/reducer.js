
import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, DELETE_TASK, UPDATE_DATE } from "./actions"

let defDay = new Date()
defDay.setHours(0, 0, 0, 0)
const initialState = {
    tasks: [],
    currentDate:  defDay
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTasks = [...state.tasks];
            newTasks.push({id: Date.now(), task: action.payload.task, date: action.payload.date, completed: false});
            return {...state, tasks:newTasks}

        case EDIT_TASK:
            return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? {id:task.id, task: action.payload.task, date: task.date, completed: false} : task)};

        case TOGGLE_TASK:
            return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? {...task, completed: !task.completed} : task)};

        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload.id)};

        case UPDATE_DATE:
            return {...state, currentDate: action.payload.date}
        
        default:
            return state;
    }
}