import { useDispatch } from "react-redux";
import Calendar from "react-calendar";
import {useState } from "react";
import { addTodo } from "./features/planner/PlannerSlice";

function TaskForm() {
    const dispatch = useDispatch()
    let startDate = new Date();
    startDate.setHours(0,0,0,0)
    let [date, setDate] = useState(startDate);

    return (
        <form>
            <Calendar value={date} onChange={setDate}/>
            <input type="text" name='task' placeholder="Enter task" />
            <input type="submit" value='Create Task' onClick={(e) => {
                e.preventDefault();
                dispatch(addTodo({date: date.toISOString(), task: e.target.form.task.value}));
            }}/>
        </form>
    )
}

export default TaskForm;