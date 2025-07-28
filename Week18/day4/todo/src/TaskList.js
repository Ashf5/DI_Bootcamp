import { useRef } from "react";

function TaskList ({state, dispatch}){

    let formRef = useRef();
    let inputRef = useRef();
    let idRef = useRef();

    function makeVisible(e, id){
        formRef.current.style.visibility = 'visible';
        idRef.current = id;
    }

    function editTask(e) {
        e.preventDefault();
        let payload = {
            id: idRef.current,
            task: inputRef.current.value
        }

        formRef.current.style.visibility = 'hidden';
        dispatch({type:'editTask', payload:{...payload}});

    }

    return (
        <div>
            {state.filter(item => item.show === true)
            .map(item => {
                return(
                <div key={item.id}>
                    <h3>{item.task}</h3>
                    <p>Completed: {String(item.completed)}</p>

                    <button onClick={() => dispatch({type:'completeTask', payload: {id: item.id}})}>Mark Completed</button>

                    <button onClick={() => dispatch({type:'removeTask', payload: {id: item.id}})}>Delete</button>

                    <button onClick={(e) => makeVisible(e, item.id)}>Edit</button>

                </div>)
            })}
            <form  className='editForm' ref={formRef}>
                <input type="text" name="edit" placeholder="Enter updated task" ref={inputRef}/>
                <input type="submit" value='Update task' onClick={editTask}/>
            </form>
        </div>
    )
       
}

export default TaskList;
