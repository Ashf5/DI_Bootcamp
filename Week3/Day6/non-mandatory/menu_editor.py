
from menu_manager import MenuManager 

def load_manager():
    """
    This function returns a MenuManager object.
    """
    return MenuManager()

def show_user_menu(menu):

    # Display Menu 
    while True:
        choice = input("1: Add Item to menu\n2: Remove item from menu\n3: Display Menu\n4: Quit\n")
        try:
            choice = int(choice)
            if choice < 1 or choice > 4:
                raise ValueError 
        except:
            print("Invalid Choice, please Enter a valid choice")
            continue 
            
        if choice == 1:
            add_item_to_menu(menu)
        elif choice == 2:
            remove_item_from_menu(menu)
        elif choice == 3:
            show_restaurant_menu(menu)
        else:
            menu.save_to_file()
            return

def add_item_to_menu(menu):
    item = input("Please enter item name: ")
    price = input("Please enter price (int): ")
    try:
        price = int(price)
    except ValueError:
        print("Invalid price, please enter an integer.")
        return
    menu.add_item(item, price)
    print("Item was added successfully")


def remove_item_from_menu(menu):
    item = input("Enter the item you would like to delete: ")
    deleted = menu.remove_item(item)
    if deleted:
        print("Item successfully deleted")
    else:
        print("Sorry there was an error")


def show_restaurant_menu(menu):
    menu_data = menu.json_data 
    for item in menu_data["items"]:
        print(f"{item['name']}: {item['price']}")



menu = load_manager()
show_user_menu(menu)
