import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import SignOut from './SignOut';

import { useSelector } from 'react-redux';

function App() {
  let authenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <div className="App">
      {!authenticated && <SignIn />}
      {authenticated && <SignOut />}
    </div>
  );
}

export default App;
