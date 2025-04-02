
import json
# Exercise 1 

class MenuManager:
    def __init__(self):
        try:
            with open("restaurant_menu.json", "r") as f:
                self.json_data = json.load(f)
        except FileNotFoundError:
            print("File not found")
            raise FileNotFoundError
        
    def add_item(self, name, price):
        """
        This function adds an item to the menu and returns the new menu.
        It does not write the new menu to the file.
        """
        self.json_data["items"].append({"name": name, "price": price})
        return self.json_data
    

    def remove_item(self, name):
        """
        This function takes in a name of a food, if it's in the menu it removes it and returns True, else returns False
        """
        for num, item in enumerate(self.json_data["items"]):
            if item["name"] == name:
                del self.json_data["items"][num]
                return True 
        return False
    
    def save_to_file(self):
        try:
            with open("restaurant_menu.json", "w") as f:
                json.dump(self.json_data, f)
        except FileNotFoundError:
            print("Error: File not found")
            raise FileNotFoundError
    
