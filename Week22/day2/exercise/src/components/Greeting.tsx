import type { ReactElement } from "react";

interface greetingProps {
    name: string;
    messageCount: number;
}

function Greeting ({name, messageCount}: greetingProps):ReactElement {
    return <>
        <h3>Hello, {name}</h3>
        <p>You have {messageCount} messages</p>
    </>
}

export default Greeting;