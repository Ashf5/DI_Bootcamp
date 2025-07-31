import logo from './logo.svg';
import './App.css';
import TaskForm from './TaskForm.js';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
