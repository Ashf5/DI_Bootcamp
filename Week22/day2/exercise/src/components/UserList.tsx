import { useEffect, useState, type ReactElement } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

function UserList(): ReactElement {
    const [loading, setLoading] = useState<boolean>(true)
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        const getData = async () => {
            try {
                let data = await fetch('https://jsonplaceholder.typicode.com/users');
                let jsonData = await data.json();
                setUsers(jsonData);
            }catch(Error) {
                console.log(Error)
            }finally {
                setLoading(false);
            }
            
        }
        getData()

    }, []);

    if (loading === true) {
        return <h3>Loading Users......</h3>;
    }
    return (
        <div>
            {users.map(item => <div key={item.id}>{item.name}: {item.email}</div>)}
        </div>
    )


}

export default UserList;