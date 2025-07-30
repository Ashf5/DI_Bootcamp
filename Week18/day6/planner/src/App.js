import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  return (
    <div className="App">
      <TaskList/>
      <br />
      <h3>Create Tasks</h3>
      <TaskForm/>
    </div>
  );
}

export default App;
