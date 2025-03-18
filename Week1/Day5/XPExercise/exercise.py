
# exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dictionary = {key: value for key, value in zip(keys, values)}
print(dictionary)

# exercise 2

# for the bonus, comment out line 21 and uncomment these lines
# family = dict()
# while True:
#     member_name = input("Enter name or enter quit: ")
#     if member_name == "quit":
#         break
#     member_age = input("Enter age: ")
#     family[member_name] = int(member_age)


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0
for key in family:
    if family[key] < 3:
        continue
    elif family[key] < 13:
        total += 10
    else:
        total += 15

print(total)


brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"], 
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print(f"Zaras sells clothes for all these populations: {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]}, {brand['type_of_clothes'][2]}, and {brand['type_of_clothes'][3]}")

brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())


more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000,
}

brand.update(more_on_zara)
print(brand["number_stores"])


# exercise 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {value: key for key, value in enumerate(users)}
print(disney_users_A)

disney_users_B = {key: value for key, value in enumerate(users)}
print(disney_users_B)

disney_users_C = {value: key for key, value in enumerate(sorted(users))}
print(disney_users_C)

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {value: key for key, value in enumerate(users) if "i" in value}
print(disney_users_A)

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {value: key for key, value in enumerate(users) if value.startswith("M") or value.startswith("P")}
print(disney_users_A)