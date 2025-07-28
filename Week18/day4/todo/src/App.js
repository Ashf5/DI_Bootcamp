import logo from './logo.svg';
import './App.css';
import { useReducer, useRef } from 'react';
import TaskList from './TaskList';
import Sort from './Sort';


function TaskReducer(state, action) {

  let id;
  switch(action.type){
    case 'addTask':
      return [...state, {task: action.payload.task, completed: false, id: state.length === 0 ? 0 : state[state.length -1].id + 1, show: true}];
    case 'removeTask':
      id = action.payload.id;
      return state.filter(item => item.id !== id);
    case 'editTask':
      id = action.payload.id;
      let newTasks = state.filter(item => item.id !== id);
      newTasks.push({task: action.payload.task, completed: false, id});
      return newTasks;
    case 'completeTask':
      return state.map(item => item.id === action.payload.id ? {...item, completed: true} : item);
    case 'showAll':
      return state.map(item => ({...item, show: true}))
    case 'showCompleted':
      return state.map(item => item.completed ? {...item, show: true} : {...item, show: false});
    case 'showActive':
      return state.map(item => item.completed ? {...item, show: false} : {...item, show: true});
    default:
      return state;
  }

}



function App() {
  let [state, dispatch] = useReducer(TaskReducer, [])
  let inputRef = useRef();
  return (
    <div className="App">
      <input type='text' ref={inputRef}/><input type='submit' onClick={() => dispatch({type: 'addTask', payload: {task: inputRef.current.value}})}/>
      <TaskList state={state} dispatch={dispatch}/>
      <Sort dispatch={dispatch}/>
    </div>
  );
}

export default App;
