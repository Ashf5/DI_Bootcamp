
import {useSelector, useDispatch} from 'react-redux';
import { toggleTodo, deleteTodo } from './features/todo/todoSlice';

function TaskList() {
    let tasks = useSelector(state => state.tasks.tasks);
    

    return (
        <ul>
            {tasks.map(task => {
                return <Task key={task.id} task={task} />
            })}
        </ul>
    )
}

function Task({task}) {
    let dispatch = useDispatch();
    return (
        <li>
            {task.task}
            <p>Completed: {String(task.completed)}</p>
            <button onClick={(e) => dispatch(toggleTodo({id: task.id}))}>Toggle</button>
            <button onClick={(e) => dispatch(deleteTodo({id: task.id}))}>Delete</button>
        </li>
    )
}

export default TaskList;