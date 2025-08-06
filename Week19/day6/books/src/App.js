import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import BookForm from './BookForm';

function App() {
  return (
    <div className="App">
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
