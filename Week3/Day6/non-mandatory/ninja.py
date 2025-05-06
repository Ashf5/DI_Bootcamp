
import re
import json

# Exercise 1 

def validate_menu_item(menu_string, price):

    match_str = r"^V\D*[e, E]\D*[e, E]"
    if not re.search(match_str, menu_string):
        return None

    connections = r"and|with|of|in|topped|And|With|Of|In|Topped"
    found = re.search(connections, menu_string)
    if found:
        if found[0][0].isupper():
            return None
        
    match_price = r"^\d\d.1$4"

    return menu_string, price


def print_hearts():
    heart = """
       ***    ***
      *****  *****
       **********
        ********
         ******
          ****
           **
    """
    print(heart)

    
def add_item():
    with open("menu.json", "r") as f:
        menu_data = json.load(f)
    menu_item = input("Enter a valentine's menu item: ")
    price = input("Enter the price: ")
    if validate_menu_item(menu_item, price):
        menu_data.append({"menu_item": menu_item, "price": price})
        with open("menu.json", "w") as f:
            json.dump(menu_data, f)
        print("Added")


def show_menu():
    with open("menu.json") as f:
        data = json.load(f)
        for item in data:
            print(f'{item["menu_item"]} : {item["price"]}')
    print_hearts()

def runner():
    with open("menu.json", "w") as f:
        json.dump([], f)
    while True:
        choice = input("1: Add Item\n2: Show menu\n3: Quit\n")
        try:
            choice = int(choice)
        except ValueError:
            print("Invalid input")
            continue
        if choice == 1:
            add_item()
        elif choice == 2:
            show_menu()
        else:
            return

if __name__ == "__main__":
    runner()
        
    