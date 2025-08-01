import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { deleteTodo, editTodo } from './features/planner/PlannerSlice';

function TaskList() {

    const tasks = useSelector(state => state.planner.tasks);
    let startDate = new Date();
    startDate.setHours(0,0,0,0)
    let [date, setDate] = useState(startDate)


    return (
        <div>
            <Calendar value={date} onChange={setDate}/>
            <ul>
                {date && tasks.filter(task => task.date === date.toISOString()).map(task => <TaskCard key={task.id} task={task} />)}
            </ul>
            
        </div>
    )
}

function TaskCard({task}) {

    const dispatch = useDispatch()

    return (
        <li>
            {task.task}<br/>
            <button onClick={(e) => dispatch(deleteTodo({id:task.id}))}>Delete</button>
            <form>
                <input type='text' placeholder='Edit task' name='edit'/>
                <input type='submit' value='Edit' onClick={(e) => {
                    e.preventDefault();
                    dispatch(editTodo({id: task.id, task: e.target.form.edit.value}))
                }}/>
            </form>
            
        </li>
    )
}

export default TaskList;