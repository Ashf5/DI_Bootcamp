from random import randint


# exercise 1

def get_age(year:int, month:int, day:int):
    current_date = (2025, 3, 19)
    age = current_date[0] - year
    if month > current_date[1]:
        return age - 1
    elif month == current_date[1]:
        if day <= current_date[2]:
            return age
        else:
            return age - 1
    else:
        return age



def can_retire(gender:str, date_of_birth:list):
    age = get_age(*date_of_birth)
    if gender == "f":
        return age >= 62
    else:
        return age >= 67


gender = input("enter gender m/f: ")
birthday = input("enter birthday (yyyy/mm/dd): ").split("/")
birthday = [int(item) for item in birthday]
above_age = can_retire(gender, birthday)
if above_age:
    print("You can retire")
else:
    print("You are not old enough")


# exercise 2
def return_sum(num:int)->int:
    li = []
    for i in range(1, 5):
        li.append(int(i * num))
    return sum(li)

num = input("Enter an integer: ")
print(return_sum(num))


# exercise 3

def throw_dice()->int:
    return randint(1, 6)


def throw_until_doubles()->int:
    attempts = 0
    while True:
        attempts += 1
        dice1 = throw_dice()
        dice2 = throw_dice()
        if dice1 == dice2:
            return attempts

def main():
    i = 0
    attempts = []
    while i < 100:
        attempts.append(throw_until_doubles())

        i += 1

    sum_attempts = sum(attempts)
    avg = round(sum_attempts / 100, 2)
    print(f"Total throws: {sum_attempts}")
    print(f"Average throws to reach doubles: {avg}")

main()