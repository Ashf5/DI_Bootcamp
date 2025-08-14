import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./features/tasks/taskSlice";

function TaskForm() {
    let categories = useSelector(state => state.categories);
    let [selectedCategory, setCategory] = useState(categories[0].id);
    let dispatch = useDispatch();
    const handleChange = (e) => setCategory(e.target.value)

    return (
        <>
            <h3>Add New Task</h3>
            <form>
                <input type="text" name="task" placeholder="Enter Task" />
                <br />
                <select id='category' value={selectedCategory} onChange={handleChange}>
                    {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
                </select>
                <br />
                <input type="submit" value='Create Task' onClick={(e) => {
                    e.preventDefault();
                    dispatch(addTask({title: e.target.form.task.value, categoryId: selectedCategory}))
                }}/>
            </form>
        </>

    )
}

export default TaskForm;