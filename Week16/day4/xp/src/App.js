
import './App.css';
import Car from './Components/Car.js'
import Events from './Components/Events.js';
import Phone from './Components/Phone.js';
import Color from './Components/Color.js';


const carinfo = {name: "Ford", model: "Mustang"};
function App() {
  return (
    <div>
      < Car props = {carinfo} />
      
      < Events />

      < Phone />

      <Color />
    </div>
    
  );
}

export default App;
