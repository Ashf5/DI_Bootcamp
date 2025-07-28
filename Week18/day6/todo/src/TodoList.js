import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "./redux/actions";


function TodoList() {
    let todos = useSelector(state => state.todos);
    let dispatch = useDispatch();

    return (
        <div>
            {todos.map(todo => {return (<div>
                <h3>{todo.todo}</h3>
                <p>Completed: {String(todo.completed)}</p>
                <button onClick={() => dispatch(toggleTodo(todo.id))}>Complete</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </div>)})}
        </div>
    )
}

export default TodoList;