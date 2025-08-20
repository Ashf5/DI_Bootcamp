import type { ReactElement } from "react";

interface userProps {
    name?:string;
    age?:number;
    role?:string;
}

function UserCard({name = 'Asher', age = 24, role = 'software developer'}: userProps):ReactElement {
    return (<>
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{role}</p>
    </>)
}

export default UserCard;