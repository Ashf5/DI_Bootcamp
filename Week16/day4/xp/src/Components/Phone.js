
import { useState } from "react";

function Phone () {
    const [phoneData, updatePhone] = useState(
        {
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    })

    const changeColor = () => updatePhone(prevPhone => ({...prevPhone, color: 'red'}));

    return (
        <div>
            <h1>My phone is a {phoneData.brand}</h1>
            <h6>It is a {phoneData.color} {phoneData.model} from {phoneData.year}</h6>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}


export default Phone;