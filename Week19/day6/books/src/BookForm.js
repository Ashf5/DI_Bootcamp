
import { addBook } from "./features/book/BookSlice";
import { useDispatch } from "react-redux";


function BookForm() {

    let dispatch = useDispatch();

    return (
        <div>
            <h3>Add Book</h3>
            <form>
            <input type="text" name="title" placeholder="Book Title" />
            <input type="text" name="author" placeholder="Enter Author" />
            <input type="text" name="genre" placeholder="Enter Genre (Horror, Fantasy, Science Fiction, Other)" />
            <input type="submit" value="Add Book" onClick={(e) => {
                e.preventDefault();
                dispatch(addBook({title: e.target.form.title.value, author: e.target.form.author.value, genre: e.target.form.genre.value}));
            }}/>
        </form>
        <br />
        </div>
        
    )
}

export default BookForm;