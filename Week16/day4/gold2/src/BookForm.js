
import { useState } from "react";

function BookForm() {

    const [bookObj, setBook] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        let title = e.target.form.title.value;
        let author = e.target.form.author.value;
        let genre = e.target.form.genre.value;
        let yearPublished = e.target.form.year.value;

        let data = {title, author, genre, yearPublished};
        console.log(data)
        setBook(data);

    }

    return (
        <div>
            {bookObj.author && <p>data sent!</p>}
            <form>
                <label for='title'>Title: </label>
                <input type='text' name='title'/>
                <br />
                <label for='author'>Author: </label>
                <input type='text' name='author'/>
                <br />
                <label for='genre'>Genre: </label>
                <input type='text' name='genre'/>
                <br />
                <label for='year'>Year Published: </label>
                <input type='number' name='year'/>
                <br />
                <input type='submit' onClick={(e) => handleSubmit(e)}/>
            </form>
        </div>
    )
}

export default BookForm;