
# exercise 1
birthdays = {"Asher": "2003/02/03", "Moshe": "2005/01/22", "Joseph": "2017/08/12", "meira": "1997/12/30", "Eyal": "1999/02/02"}

# print("Welcome! You can look up the birthdays of the people in the list!")
# query = input("Enter the name you are looking for: ")
# print(birthdays[query])


# exercise 2

# for name in birthdays:
#     print(name)

# query = input("Enter the name you are looking for: ")
# if query not in birthdays:
#     print(f"Sorry, we don't have the birthday information for {query}")
# else:
#     print(birthdays[query])


# exercise 3

# new_user = input("Enter New name: ")
# new_birthday = input("Enter birthday yyyy/mm/dd: ")
# birthdays[new_user] = new_birthday
# query = input("Enter the birthday you are looking for: ")

# if query not in birthdays:
#      print(f"Sorry, we don't have the birthday information for {query}")
# else:
#     print(birthdays[query])



# exercise 4
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

for key, value in items.items():
    print(f"{key}s cost ${value}")

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

sum = 0
for item in items:
    sum += items[item]["price"] * items[item]["stock"]

print(f"Too buy everything in stock would cost ${sum}")