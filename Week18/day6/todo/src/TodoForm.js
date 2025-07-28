
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/actions";

function TodoForm() {
    let inputRef = useRef();
    let dispatch = useDispatch()

    return (
            <form>
                <input type="text" name="todo" placeholder="Enter Task" ref={inputRef} />
                <input type="submit" value='Add Task' onClick={(e) => {e.preventDefault();dispatch(addTodo(inputRef.current.value))}}/>
            </form>
    )
}

export default TodoForm;