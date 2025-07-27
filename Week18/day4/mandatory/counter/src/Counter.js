import { useRef, useState } from "react"

function Counter() {
    const inputRef = useRef();
    let [textLength, updateLength] = useState(0);

    const update = () => {
        updateLength(inputRef.current.value.length);
    }

    return(
        <div>
            <h3>{textLength}</h3>
            <input type="text" name='text-input' placeholder="enter text" ref={inputRef} onChange={update}/>
        </div>
    )
}

export default Counter;