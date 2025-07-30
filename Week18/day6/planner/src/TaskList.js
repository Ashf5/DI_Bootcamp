import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useSelector, useDispatch} from 'react-redux';
import { toggleTask, updateDate, deleteTask, editTask } from './redux/actions';
import { useRef } from 'react';

function TaskList() {

    const tasks = useSelector(state => state.tasks);
    const currentDate = useSelector(state => state.currentDate);
    const dispatch = useDispatch();


    return (
        <div>
            <Calendar onChange={date => dispatch(updateDate(date))}/>
            <ul>
                {currentDate && tasks.filter(task => String(task.date) === String(currentDate)).map(task => <TaskCard key={task.id} task={task} />)}
            </ul>
            
        </div>
    )
}

function TaskCard({task}) {

    const dispatch = useDispatch()

    return (
        <li>
            {task.task}:   {String(task.completed)}<br/>
            <button onClick={(e) => dispatch(toggleTask(task.id))}>Mark Completed</button>
            <button onClick={(e) => dispatch(deleteTask(task.id))}>Delete</button>
            <form>
                <input type='text' placeholder='Edit task' name='edit'/>
                <input type='submit' value='Edit' onClick={(e) => {
                    e.preventDefault();
                    dispatch(editTask(task.id, e.target.form.edit.value));
                }}/>
            </form>
            
        </li>
    )
}

export default TaskList;