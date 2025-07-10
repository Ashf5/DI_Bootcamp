import { useState, useEffect } from "react";


function Color() {
    const [favoriteColor, setColor] = useState('red');
    useState(() => alert('useEffect reached'))

    const changeColor = () => setColor('blue');
    return (
        <div>
            <h1>My favorite color is <i>{favoriteColor}</i></h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
        
    )
}

export default Color;