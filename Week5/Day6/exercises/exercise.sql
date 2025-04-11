-- Exercise 1
SELECT name FROM language;

SELECT film.title, film.description, language.name FROM film INNER JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name FROM film RIGHT JOIN language ON film.language_id = language.language_id;

CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

INSERT INTO new_film (name) VALUES('Deadpool'), ('Harry Potter and The Prisoner Of Azkaban');

CREATE TABLE customer_review (
	review_id SERIAL NOT NULL PRIMARY KEY,
	film_id INTEGER,
	language_id INTEGER,
	title VARCHAR(75),
	review_text TEXT,
	last_update DATE,
	FOREIGN KEY(film_id) REFERENCES new_film(id) ON DELETE CASCADE,
	FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE SET NULL
);

INSERT INTO customer_review (film_id, language_id, title, review_text, last_update) 

VALUES (1, 2, 'Upset about the bad language and violence', 'Never mind, I need a text generator. Who has time for all this? To watch a three hour movie!',
	'12/12/2025'),
	(2, 1, 'A boring movie', 'Sorry to insult all the Harry Potter fans. But what is going on?! This is so boring!!!', '01/03/2024')


DELETE FROM new_film WHERE name = 'Deadpool';
SELECT * FROM customer_review;


-- Exercise 2 

UPDATE film SET language_id = 2 WHERE title = 'Chamber Italian';
UPDATE film SET language_id = 3 WHERE title = 'Airport Pollock';

DROP TABLE customer_review;

-- It's not clear how to figure out how to get the movies not returned yet. I just got the names of movies that aren't in the inventory list

SELECT COUNT(*) FROM film WHERE film_id NOT IN (SELECT DISTINCT film_id FROM inventory);

SELECT title, rental_rate FROM film WHERE film_id NOT IN (SELECT DISTINCT film_id FROM inventory) ORDER BY rental_rate DESC LIMIT 30;


SELECT * FROM film WHERE description LIKE '%Sumo%' AND description LIKE '%Wrestle%' AND film_id IN (
    SELECT film_id FROM film_actor WHERE actor_id = (SELECT actor_id FROM actor WHERE first_name = 'Penelope' AND last_name = 'Monroe')

);

SELECT * FROM film WHERE length < 60 AND rating = 'R' AND description LIKE '%Documentary%';


SELECT * FROM film WHERE film_id IN (
	select film_id FROM inventory WHERE inventory_id IN (
		SELECT inventory_id FROM rental WHERE customer_id = (SELECT customer_id from customer WHERE first_name = 'Matthew' and last_name = 'Mahan') AND return_date >= '2005-07-28' AND return_date <= '2005-08-01'
	)
) AND rental_rate > 4;


-- For some reason when I sort by DESC it doesn't really work but when I take out it finds four options.
SELECT * FROM film WHERE (title LIKE '%Boat%' OR description LIKE '%Boat%') AND film_id IN (
	SELECT film_id FROM inventory WHERE inventory_id IN (
		SELECT inventory_id FROM rental WHERE customer_id = (SELECT customer_id from customer WHERE first_name = 'Matthew' and last_name = 'Mahan')
	)
	ORDER BY replacement_cost DESC LIMIT 1
);

