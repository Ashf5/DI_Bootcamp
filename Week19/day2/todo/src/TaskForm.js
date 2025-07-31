import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "./features/todo/todoSlice";

function TaskForm() {
    const inputRef = useRef();
    const dispatch = useDispatch()
    return (
        <form>
            <input type="text" placeholder="New Task" name='task' ref={inputRef}/>
            <input type="submit" value='create task' onClick={(e) => {
                e.preventDefault();
                dispatch(addTodo({task: inputRef.current.value}))
                }} />
        </form>
    )
}

export default TaskForm;