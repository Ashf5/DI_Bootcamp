import { useDispatch } from "react-redux";
import { addTask } from "./redux/actions";
import Calendar from "react-calendar";
import { useRef } from "react";

function TaskForm() {
    const dispatch = useDispatch()
    const calendarRef = useRef();

    return (
        <form>
            <Calendar ref={calendarRef}/>
            <input type="text" name='task' placeholder="Enter task" />
            <input type="submit" value='Create Task' onClick={(e) => {
                e.preventDefault();
                dispatch(addTask(calendarRef.current.value, e.target.form.task.value));
            }}/>
        </form>
    )
}

export default TaskForm;