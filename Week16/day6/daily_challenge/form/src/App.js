
import Form from './InputForm.js';
import ProccessedForm from './ProccessedForm.js';
import { useState } from 'react';
import './App.css';

function App() {
  let [state, changeState] = useState({lactoseFree: 'No', nutsFree: 'No', vegan: 'No'});

  const handleFormChange = (e) => {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        changeState(prevState => ({...prevState, [e.target.value]: 'Yes'}));
        return;
      }else {
        changeState(prevState => ({...prevState, [e.target.value]: 'No'}));
        return;
      }
    }
    changeState(prevState => ({...prevState, [e.target.name] : e.target.value}));
  }

  return (
    <div>
      <Form change={handleFormChange}/>
      <ProccessedForm {...state} />
    </div>
  );
}

export default App;
