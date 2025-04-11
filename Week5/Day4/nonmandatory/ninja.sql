SELECT first_name, last_name FROM customers ORDER BY last_name DESC LIMIT 2;

DELETE FROM purchases WHERE customer_id = (SELECT id FROM customers WHERE first_name='Scott' AND last_name='Scott');
SELECT id FROM customers WHERE first_name='Scott' AND last_name='Scott'
-- He still exists, just deleted his purchases.

SELECT first_name, last_name, item_id FROM customers LEFT JOIN purchases ON customers.id = purchases.customer_id;
-- You can't get scott's order, it was deleted.
SELECT first_name, last_name, item_id FROM customers INNER JOIN purchases ON customers.id = purchases.customer_id;
