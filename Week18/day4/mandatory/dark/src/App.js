import './App.css';
import { createContext } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import UserForm from './UserForm';
import Dark from './Dark';

function App() {
  


  return (
    <ThemeProvider>
      <Dark />
    </ThemeProvider>

  );
}

export default App;
