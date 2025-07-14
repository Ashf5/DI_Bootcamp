import logo from './logo.svg';
import './App.css';
import BuggyCounter from './BuggyCounter.js';
import ErrorBoundary from './ErrorBoundary.js';
import Color from './Color.js';

function App() {
  return (
    <div>
      <h1>Simulation 1</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 2</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 3</h1>
      <BuggyCounter />

      <Color />
    </div>


  );
}

export default App;
