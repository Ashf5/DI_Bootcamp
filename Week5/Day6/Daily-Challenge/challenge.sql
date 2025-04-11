CREATE TABLE customer (
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
);

CREATE TABLE profile (
	profile_id SERIAL PRIMARY KEY,
	is_logged_in BOOLEAN DEFAULT FALSE,
	customer_id INTEGER,
	FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);


INSERT INTO customer (first_name, last_name) VALUES 
('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

INSERT INTO profile (is_logged_in, customer_id) VALUES 
(TRUE, 1), (FALSE, 2);

SELECT first_name FROM customer INNER JOIN profile ON customer.customer_id = profile.customer_id WHERE is_logged_in = TRUE ;

SELECT first_name, is_logged_in FROM customer FULL JOIN profile ON customer.customer_id = profile.customer_id;


SELECT COUNT(*) FROM customer FULL JOIN profile ON customer.customer_id = profile.customer_id WHERE NOT is_logged_in;


-- Part 2
CREATE TABLE book (
	book_id SERIAL PRIMARY KEY, 
	title VARCHAR(75) NOT NULL,
	author VARCHAR(75) NOT NULL
);

INSERT INTO book (title, author) VALUES 
('Alice in Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K. Rowling'),
('To kill a mockingbird', 'Harper Lee');

CREATE TABLE student (
	student_id SERIAL PRIMARY KEY,
	student_name VARCHAR(50) NOT NULL UNIQUE,
	age INTEGER CHECK (age < 16)
);

INSERT INTO student (student_name, age) VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);


CREATE TABLE library (
	book_fk_id INTEGER ,
	student_id INTEGER ,
	borrowed_date DATE,
	FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY (book_fk_id, student_id)
);


INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES 
((SELECT book_id FROM book WHERE title = 'Alice in Wonderland'),
(SELECT student_id FROM student WHERE student_name = 'John'), '02-15-2022'

);

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES 
((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
(SELECT student_id FROM student WHERE student_name = 'Bob'), '03-03-2021'

);

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES 
((SELECT book_id FROM book WHERE title = 'Alice in Wonderland'),
(SELECT student_id FROM student WHERE student_name = 'Lera'), '05-23-2021'

);

INSERT INTO library (book_fk_id, student_id, borrowed_date) VALUES 
((SELECT book_id FROM book WHERE title = 'Harry Potter'),
(SELECT student_id FROM student WHERE student_name = 'Bob'), '08-12-2021'

);

SELECT * FROM library;

SELECT student.student_name, book.title FROM (library INNER JOIN student ON library.student_id = student.student_id) INNER JOIN book ON library.book_fk_id = book.book_id; 

SELECT AVG(student.age) FROM student INNER JOIN library ON student.student_id = library.student_id WHERE library.book_fk_id = (SELECT book_id FROM book WHERE title = 'Alice in Wonderland');

DELETE FROM student WHERE student_name = 'Bob';
-- It deletes all the corresponding entries