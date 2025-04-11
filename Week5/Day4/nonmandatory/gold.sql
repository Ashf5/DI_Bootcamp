
-- Exercise 1

SELECT DISTINCT rating, COUNT(*)FROM film GROUP BY rating;

SELECT * FROM film WHERE rating = 'G' OR rating = 'PG-13';

SELECT * FROM film WHERE (rating = 'G' OR rating = 'PG-13') AND length < 120 AND rental_rate < 3 ORDER BY title;

SELECT * FROM customer LIMIT 1;
UPDATE customer SET first_name = 'Asher', last_name = 'Fried', email= 'friedsbest@gmail.com' WHERE first_name = 'Jared' AND last_name = 'Ely';


UPDATE address SET address = '75 Lakeview st', phone = '989838939' WHERE address_id = (SELECT address_id FROM customer WHERE first_name = 'Asher' AND last_name = 'Fried')

-- Exercise 2 
UPDATE students SET birth_date = '1998-11-02' WHERE first_name = 'Marc' OR first_name = 'Lea';
UPDATE students SET last_name = 'Guez' WHERE last_name = 'Grez';
DELETE FROM students WHERE first_name = 'Lea';

SELECT COUNT(*) FROM students;
SELECT COUNT(*) FROM students WHERE birth_date > '2001-01-01';

ALTER TABLE students ADD COLUMN math_grade INTEGER;
UPDATE students SET math_grade = 80 WHERE id = 1;
UPDATE students SET math_grade = 90 WHERE id = 2 OR id = 4;
UPDATE students SET math_grade = 40 WHERE id = 6;

SELECT COUNT(*) FROM students WHERE math_grade > 83;

INSERT INTO students (first_name, last_name, birth_date, math_grade) VALUES 
('Omer', 'Simpson', (SELECT birth_date FROM students WHERE first_name='Omer' AND last_name='Simpson'), 70);

SELECT SUM(math_grade) FROM students;

-- Exercise 3

CREATE TABLE purchases (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER, 
	item_id INTEGER,
	quantity_purchased INTEGER
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES 
((SELECT id FROM customers WHERE first_name='Scott' AND last_name='Scott'), (SELECT id FROM items WHERE item='Fan'), 1)

INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES 
((SELECT id FROM customers WHERE first_name='Melanie' AND last_name='Johnson'), (SELECT id FROM items WHERE item='Large Desk'), 10)


INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES 
((SELECT id FROM customers WHERE first_name='Greg' AND last_name='Jones'), (SELECT id FROM items WHERE item='Small Desk'), 2)


SELECT * FROM purchases;
-- No because only see the keys 

SELECT * FROM purchases INNER JOIN customers ON purchases.customer_id = customers.id;

SELECT * FROM purchases WHERE customer_id = 5;

SELECT * FROM purchases INNER JOIN items ON purchases.item_id = items.id WHERE item= 'Small Desk' OR item = 'Large Desk';

SELECT first_name, last_name, item FROM (purchases INNER JOIN customers ON purchases.customer_id = customers.id) INNER JOIN items ON purchases.item_id = items.id;

INSERT INTO purchases (customer_id, quantity_purchased) VALUES (1, 10);
-- It inserts but wouldn't be accurate because doesn't mention the item.