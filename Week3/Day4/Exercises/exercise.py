
from random import choice 
from string import ascii_letters
import datetime

# exercise 1 

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"

    def __int__(self):
        return self.amount 
    

    def __repr__(self):
        return f"Currency: (currency={self.currency}, amount={self.amount})"

    def __add__(self, other):
        if isinstance(other, Currency):
            if other.currency != self.currency:
                raise TypeError(f"Cannot add between Currency Type {self.currency} and {other.currency}")
            return self.amount + other.amount
        return self.amount + other

    
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency Type {self.currency} and {other.currency}")
            else:
                self.amount += other.amount
        else:
            self.amount += other

        return self



    
cur1 = Currency("Shekel", 19)
cur2 = Currency("Dollars", 30)
cur3 = Currency("Shekel", 50)
cur1 += cur3
# print(cur1)



# exercise 2 See the other files in the folder 


# exercise 3 
new_string = ""
for _ in range(5):
    new_string += choice(ascii_letters)

print(new_string)


# exercise 4 
def display_date():
    print(datetime.date.today())

display_date()


# exercise 5 
def till_january():
    january = datetime.datetime(2026, 1, 1)
    print(january - datetime.datetime.now())

till_january()

# exercise 6

def minutes(year, month, day):
    today = datetime.datetime.now().timestamp()
    birthday = datetime.datetime(year=year, month=month, day=day).timestamp()
    # get how many seconds he lived
    age = today - birthday
    print(f"You have lived {age // 60} Minutes")

minutes(2001, 8, 6)


# exercise 7 
# I am not clear what exactly is language_code that I was supposed to generate.
from faker import Faker
users = []

def add_user(li):
    fake = Faker()
    name = fake.name()
    address = fake.address()
    # ??
    language_code = fake.text()

    li.append({"name": name, "address": address, "language_code": language_code})

add_user(users)
print(users)
