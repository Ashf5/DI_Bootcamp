
function Sort({dispatch}) {
    return (
        <div>
            <button onClick={(e) => dispatch({type: 'showAll'})}>Show All</button>
            <button  onClick={(e) => dispatch({type: 'showCompleted'})}>Show Completed</button>
            <button  onClick={(e) => dispatch({type: 'showActive'})}>Show Active</button>
        </div>
    )
}

export default Sort;