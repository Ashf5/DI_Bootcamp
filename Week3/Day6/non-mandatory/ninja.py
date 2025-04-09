
import re
import json

# Exercise 1 

def add_menu_item(menu_string, price):

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




    
        
    