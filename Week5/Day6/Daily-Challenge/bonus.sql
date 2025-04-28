CREATE TABLE product_orders (
	order_id INTEGER,
	customer VARCHAR(50),
	item_id INTEGER,
	FOREIGN KEY (item_id) REFERENCES items(id)
);

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	item_name VARCHAR(50),
	price INTEGER
	
);

INSERT INTO items (item_name, price) VALUES ('cucumber', 5), ('apple', 10)

INSERT INTO product_orders (order_id, customer, item_id) VALUES (1, 'ASHER', 1), (1, 'ASHER', 2)




CREATE OR REPLACE FUNCTION calculate_order_total(order_num INTEGER)
RETURNS INTEGER 
language plpgsql 
as
$$ 
declare total INTEGER;
BEGIN 
SELECT SUM(price) INTO total FROM items INNER JOIN product_orders ON items.id=product_orders.item_id WHERE order_id = order_num;
RETURN total;
END;
$$

SELECT calculate_order_total(1)