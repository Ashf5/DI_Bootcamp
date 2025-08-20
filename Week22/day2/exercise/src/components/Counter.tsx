import { useState, type MouseEvent } from "react";
import type { ReactElement } from "react";

function Counter():ReactElement {
    const [count, setCount] = useState<number>(0);
    const [lastAction, setLastAction] = useState<"increment" | "decrement" | null>(null)
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.textContent === '-') {
            setLastAction("decrement");
            setCount(count - 1);
        }else {
            setLastAction("increment");
            setCount(count + 1);
        }
            
    }

    return <>
        <h3>{count}</h3>
        <button onClick={handleClick}>-</button><button onClick={handleClick}>+</button>
        <h3>Last Action: {lastAction}</h3>
    </>

}

export default Counter;