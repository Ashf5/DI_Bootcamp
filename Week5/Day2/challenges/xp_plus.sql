CREATE DATABASE bootcamp;

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	birth_date DATE
)


SET datestyle = 'DMY';

INSERT INTO students (first_name, last_name, birth_date) VALUES ('Marc', 'Benichou', '02/11/1998'), ('Yoan', 'Cohen', '03/12/2010'),
('Lea', 'Benichou', '27/07/1987'), ('Amelia', 'Dux', '07/04/1996'), ('David', 'Grez', '14/06/2003'), ('Omer', 'Simpson', '03/10/1980');

INSERT INTO students (first_name, last_name, birth_date) VALUES ('Asher', 'Fried', '06/08/2001');

SELECT * FROM students;

SELECT first_name, last_name FROM students;

SELECT first_name, last_name FROM students WHERE id=2;

SELECT first_name, last_name FROM students WHERE first_name='Marc' AND last_name='Benichou';

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%' OR first_name LIKE '%A%';

SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%';

SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

SELECT first_name, last_name FROM students WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) = 'a';

SELECT first_name, last_name FROM students WHERE id IN (1, 3);

SELECT first_name, last_name FROM students WHERE birth_date >= '01/01/2000';