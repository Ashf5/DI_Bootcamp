

interface Book {
    title:string;
    author:string;
    isbn:string;
    publishedYear: number;
    genre?: string;
}


class Library {
    protected books: Book[] = [];

    addBook(book:Book) {
        this.books.push(book);
    }

    getBookDetails(isbn:string):string {
        let book = this.books.find(book => book.isbn=isbn);
        if (!book) return 'Book not found';
        if (!book.genre) return `${book.title} | ${book.author} | ${book.publishedYear}`
        return `${book.title} | ${book.author} | ${book.publishedYear} | ${book.genre}`
    }
}

class DigitalLibrary extends Library {
    readonly website:string;
    constructor(website:string) {
        super()
        this.website = website;
    }

    listBooks() {
        let books = this.books.map(book => book.title);
        return books;
    }
    
}

let library = new DigitalLibrary('http://library.com');


library.addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt, David Thomas",
  isbn: "978-0201616224",
  publishedYear: 1999,
  genre: "Programming"
});

library.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "978-0132350884",
  publishedYear: 2008,
  genre: "Software Engineering"
});

library.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "978-0451524935",
  publishedYear: 1949,
  genre: "Dystopian"
});

library.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "978-0061120084",
  publishedYear: 1960,
  genre: "Classic"
});

library.addBook({
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  isbn: "978-0062316097",
  publishedYear: 2011,
  genre: "History"
});

// Show the books
console.log(library.listBooks());