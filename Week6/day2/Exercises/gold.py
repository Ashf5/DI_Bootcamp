
user_dict = {
    "asher": "123",
    "mo": "456",
    "larry": "789"
}
while True:
    user_input = input("Enter exit, or login: ")
    if user_input == "exit":
        break 
    elif user_input == 'login': 
        username = input("Enter your username: ")
        password = input("Enter your password: ")
        if username in user_dict:
            if user_dict[username] == password:
                print("you are now logged in.")
                logged_in = username 
            else:
                print("Incorrect password")
        else:
            user_input = input("Would you like to sign in? y/n")
            if user_input == "y":
                while True:
                    username = input("Enter username: ")
                    if username in user_dict:
                        print("Username already in use. Put in a different one")
                        continue 
                    password = input("Enter password: ")
                    user_dict[username] = password 
                    break
                    
