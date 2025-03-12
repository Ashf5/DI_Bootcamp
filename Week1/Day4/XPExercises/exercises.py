# exercise 1

my_fav_numbers = {13, 7, 23, 99, 324}
my_fav_numbers.add(11)
my_fav_numbers.add(27)
# sets aren't ordered, so I assume that this is what is wanted
my_fav_numbers.remove(27)
friend_fav_numbers = {45, 32, 7, 13, 90, 45}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# Exercise 2 
# Answer: No, tuples are immutable

# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(f"There are {basket.count('Apples')} Apples")
basket.clear()
print(basket)

# Exercise 4
# The difference between a float and an integer, integer is a whole number while a float has a decimal point
li = []
for i in range(3, 11):
    if i % 2 == 0:
        li.append(i // 2)
    else:
        li.append(i / 2)
print(li)

# Another way 
list2 = []
i = 0.0
while i < 11:
    list2.append(i)
    i += 1
print(list2)


# Exercise 5
for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)


# Exercise 6
my_name = "Asher"
while True:
    user_name = input("Please enter your name: ")
    if user_name == my_name:
        break


# Exercise 7
user_fav = input("Please enter all your favorite fruits: ")
fav_fruits = user_fav.split()
fruit = input("Please enter a fruit: ")
if fruit in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")


# Exercise 8
toppings = []
while True:
    topping = input("Enter a pizza topping: ")
    if topping == "quit":
        break
    print("We'll add that topping to your pizza")
    toppings.append(topping)

print(toppings)
print(f"Your price is ${10 + (len(toppings) * 2.5)}0")


# Exercise 9
total_price = 0
family_ages = input("Enter the age of everyone in the family (Each age seperated by a space): ")
family_ages = family_ages.split()
for age in family_ages:
    a = int(age)
    if a < 3:
        continue
    elif a < 13:
        total_price += 10
    else:
        total_price += 15
print(f"Your total is ${total_price}")


teenagers = ["stan", "harry", "percy", "ron", "hermione"]
for teenager in teenagers:
    age = input(f"{teenager}, please enter your age: ")
    if int(age) > 15 and int(age) < 21:
        teenagers.remove(teenager)
print(teenagers)


# Exercise 10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
for i in range(len(sandwich_orders)):
    finished_sandwiches.append(sandwich_orders.pop(0))
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")