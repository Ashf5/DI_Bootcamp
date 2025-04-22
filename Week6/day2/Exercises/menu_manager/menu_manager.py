from menu_item import MenuItem 
import psycopg2   # type: ignore


class MenuManager:

    @classmethod 
    def get_by_name(cls, cursor, item_name):
        query = f"""
        SELECT * FROM Menu_Items WHERE item_name = '{item_name}'
        """
        cursor.execute(query)
        try:
            return cursor.fetchall()[0]
        except IndexError:
            return None

    @classmethod
    def all_items(cls, cursor):
        query = f"""
        SELECT * FROM Menu_Items
        """
        cursor.execute(query)
        return cursor.fetchall()







    



if __name__ == "__main__":
    try:
        with open('/Users/fried/postgres_password/password.txt') as f:
            password = f.read()
    except:
        print("Error getting password, please enter your own.")
    HOSTNAME = 'localhost'
    USERNAME = 'postgres'
    PASSWORD = password
    DATABASE = 'Menu'
    connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
    cursor = connection.cursor()

    # item = MenuItem('pizza', 9)
    # item.save(connection, cursor)
    # item.update(connection, cursor)
    # item.delete(connection, cursor)


    print(MenuManager.all_items(cursor))


    connection.close()