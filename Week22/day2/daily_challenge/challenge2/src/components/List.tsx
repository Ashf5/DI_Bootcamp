
import type {ReactNode} from "react";

interface listProps<T extends {id: number}> {
    items: T[];
    renderItem: (item:T) => ReactNode; 
}

function List<T extends {id: number}>({items, renderItem}:listProps<T>) {

    return (
        <div>
            <ul>
                {items.map(item => {
                    return <li key={item.id}>{renderItem(item)}</li>
                })}
            </ul>
        </div>
    )
}

export default List;