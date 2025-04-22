import psycopg2 # type: ignore

class MenuItem:
    def __init__(self, item, price=5):
        self.item_name = item
        self.item_price = price 

    def save(self, conn, cursor):
        """
        Save self in the database.
        """
        query = f"""
        INSERT INTO Menu_Items (item_name, item_price) VALUES ('{self.item_name}', {self.item_price});
        """
        cursor.execute(query) 
        conn.commit()



    def delete(self, conn, cursor):
        """
        Deletes self from the database
        """
        query = f"""
            DELETE FROM Menu_Items WHERE item_name = '{self.item_name}'
        """
        cursor.execute(query)
        conn.commit()


    def update(self, conn, cursor):
        item_name = input("Enter what you want the item name to be or leave blank: ")
        if item_name == "":
            item_name = self.item_name
        item_price = input("Enter the updated price or leave blank: ")
        if item_price == "":
            item_price = self.item_price 
        try:
            item_price = int(item_price)
        except ValueError:
            print("Invalid value given")
            return -1
        

        query = f"""
        UPDATE Menu_Items SET item_name = '{item_name}', item_price = {item_price} WHERE item_name = '{self.item_name}' AND item_price = {self.item_price}
        """
        cursor.execute(query)
        conn.commit()
        self.item_name = item_name 
        self.item_price = item_price 
        return 0
        
