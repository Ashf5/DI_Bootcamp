import { useCallback, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { selectTasksByCategoryId } from "./features/tasks/taskSelectors";
import { addCategory } from "./features/categories/categorySlice";
import { deleteTask, toggleTask } from "./features/tasks/taskSlice";



function TaskList() {

    let [selectedCategory, updateCategory ] = useState(-1);

    let tasks = useSelector(selectedCategory === -1 ? state => state.tasks : selectTasksByCategoryId(selectedCategory))

    return (
        <div>
            <CategoryList handler={updateCategory} />
            {tasks.map(task => <TaskCard task = {task} key={task.id}/>)}
        </div>
    )
}

function TaskCard(task) {
    let dispatch = useDispatch();
    let {title, completed, id} = task.task;
    return (
        <div>
            <h3>{title}</h3>
            <p>Completed: {String(completed)}</p>
            <button onClick={() => dispatch(toggleTask(id))}>Mark Completed</button>
            <button onClick={() => dispatch(deleteTask(id))}>Delete Task</button>
        </div>
    )
}

function CategoryList({handler}) {
    let categories = useSelector(state => state.categories);
    let dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => handler(-1)}>All</button>
            {categories.map(category => {
                return <button onClick={()=> handler(category.id)}>{category.name}</button>
            })}
            <button onClick={() => {
                let newCategory = prompt("Enter new category");
                dispatch(addCategory({name:newCategory}));
            }}>Create New Category</button>
        </div>
    )
}

export default TaskList;