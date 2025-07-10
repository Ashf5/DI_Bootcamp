import { useState } from "react";

function Events() {
    const [isToggleOn, setToggle] = useState('On');

    const clickMe = () => alert('I was clicked');

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            alert(`The Enter key was pressed, your input is: ${e.target.value}`);
        }
    }

    const toggleButton = () => isToggleOn === 'On' ? setToggle('Off') : setToggle('On');
    

    return (
        <div>
            <button onClick={clickMe}>Click Me!</button>
            <input type='text' placeholder="Press the ENTER key!" onKeyDown={(e) => handleKeyDown(e)}/>
            <button onClick={toggleButton}>{isToggleOn}</button>
            
        </div>
        
    )
}

export default Events;