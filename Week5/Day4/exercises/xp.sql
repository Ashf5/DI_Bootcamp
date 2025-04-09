
-- Exercise 1
SELECT * FROM items ORDER BY price;
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
SELECT first_name, last_name FROM customers ORDER BY first_name LIMIT 3;
SELECT last_name FROM customers ORDER BY last_name DESC;

-- Exercise 2 
SELECT * FROM customer;
SELECT (first_name, last_name) AS full_name FROM customer;
SELECT DISTINCT create_date FROM customer;
SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

SELECT address, phone FROM address WHERE district='Texas';
SELECT * FROM film WHERE film_id IN (15, 150);
SELECT  film_id, title, description, length, rental_rate FROM film WHERE title = 'Deadpool';
SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'De%';
SELECT title, rental_rate, description FROM film ORDER BY rental_rate LIMIT 10;
SELECT title, rental_rate, description FROM film ORDER BY rental_rate LIMIT 10 OFFSET 10;
SELECT first_name, last_name, amount, payment_date FROM customer INNER JOIN payment ON payment.customer_id = customer.customer_id ORDER BY customer.customer_id;

SELECT * FROM film WHERE film_id NOT in (SELECT film_id FROM inventory);
SELECT city, country FROM city INNER JOIN country ON city.country_id = country.country_id;
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, payment.staff_id FROM customer INNER JOIN payment ON payment.customer_id = customer.customer_id ORDER BY staff_id;
