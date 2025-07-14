
import { useState } from "react";

function BuggyCounter() {
    let [counter, setCounter] = useState(0);
    if (counter === 5) {
        throw new Error('I crashed!')
    }

    const updateCounter = () => {
        setCounter(counter + 1);
    }

    return (
        
        <div>
            <h3>{counter}</h3>
            <button onClick={updateCounter}>Counter</button>
        </div>
    )
}

export default BuggyCounter;