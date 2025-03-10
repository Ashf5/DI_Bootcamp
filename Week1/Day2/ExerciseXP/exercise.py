# Exercise 1
from msilib.schema import Error


print("Hello World\n" * 4)

# Exercise2
num = (99**3) * 8
print(num)

# Exercise 3
# False
# True
# False
# Error
# False


# Exercise 4
computer_brand = "HP Envy"
print(f"I have an {computer_brand} computer")

# Exercise 5
name = "Asher"
age = 23
shoe_size = 10
info = f"{name} loves walking in the great outdoors in size {shoe_size} shoes, for {age} years"
print(info)

# Exercise 6
a = 15
b = 6
if a > b:
    print("Hello World")


# Exercise 7
num = int(input("Enter a number"))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

# Exercise 8
my_name = "asher"
user_name = input("Please enter your name")
if user_name.lower() == my_name:
    print("Your name is Asher?!?")

# Exercise 9
height = int(input("Please enter your height in CM"))
if height > 145:
    print("You are tall enough to ride")
else:
    print("Sorry, you must grow a little before you can ride")
