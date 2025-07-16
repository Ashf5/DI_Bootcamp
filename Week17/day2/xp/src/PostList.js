
import data from './data1.json';

function PostList() {
    return (
        <div>
            <h1>Hi This is a title</h1>
            <Item title={data[0].title} content = {data[0].content} />
            <Item title={data[1].title} content = {data[1].content} />
        </div>
    )
}

function Item(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default PostList;