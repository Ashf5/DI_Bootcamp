
import Garage from './Garage.js';
import { useState } from 'react';


function Car(props) {
    const [color, setColor] = useState('red');
    return (
        <div>
            <h1>This car is {props.props.model}</h1>
            <h1>This car is {color}</h1>
            <Garage size="small" />
        </div>
        
    )
}

export default Car;