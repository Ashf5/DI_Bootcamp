import psycopg2
from menu_manager import MenuManager
from menu_item import MenuItem

def show_user_menu(conn, cursor):
    while True:
        options = {'v', 'a', 'd', 'u', 's', 'q'}
        print('(V) View an item\n(A) Add an item\n(D) Delete an item\n(U) Update an item\n(S) Show the menu\n(Q) quit: ')
        choice = input().lower()
        if choice not in options:
            print("Invalid input")
            continue 

        if choice == 'v':
            query_item = input("Enter item you'd like to view: ")
            item = MenuManager.get_by_name(cursor, query_item)
            print(item)
        elif choice == 'a':
            add_item_to_menu(conn, cursor)
        elif choice == 'd':
            remove_item_from_menu(conn, cursor)
        elif choice == 'u':
            update_item_from_menu(conn, cursor) 
        elif choice == 's':
            show_restaurant_menu(cursor)
        else:
            return 

def get_valid_data():
    item_name = input("Enter the item name: ")
    item_price = input("Enter item price: ")
    try:
        item_price = int(item_price)
    except ValueError:
        print("Invalid entry, must be an integer")
        return None
    return item_name, item_price
    


def add_item_to_menu(conn, cursor):
    item_name, item_price = get_valid_data()
    
    item = MenuItem(item_name, item_price)
    item.save(conn, cursor)
    print("item was added successfully.")


def remove_item_from_menu(conn, cursor):
    item_name, item_price = get_valid_data()
    item = MenuItem(item_name, item_price) 
    try:
        item.delete(conn, cursor)
        print("Deleted")
    except:
        print("An error occured")

def update_item_from_menu(conn, cursor):
    item_name, item_price = get_valid_data()
    item = MenuItem(item_name, item_price) 
    if item.update(conn, cursor) == 0:
        print("Success")
    else:
        print("An error occured")

    
def show_restaurant_menu(cursor):
    items = MenuManager.all_items(cursor)
    for item in items:
        print(f"{item[1]}: ${item[2]}")
    

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
    show_user_menu(connection, cursor)
    connection.close()