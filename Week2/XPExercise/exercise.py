from random import randint


# exercise 1
def display_message():
    print("Hi, I am learning python and javascript!")

display_message()


# exercise 2
def favorite_book(title:str):
    print(f"One of my favorite books is {title}")


favorite_book("Harry Potter")


# exercise 3
def describe_city(city:str, country="Israel"):
    print(f"{city} is in {country}")

describe_city("Tel Aviv")


# exercise 4
def compare_random(num:int):
    random_number = randint(1, 100)
    if num == random_number:
        print("Success! The numbers match!")
    else:
        print(f"Sorry the numbers {num} and {random_number} don't match")

compare_random(55)


# exercise 5
def make_shirt(size="Large", text="I love python"):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt("Medium", text="I love javascript")


# exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians:list):
    for magician in magicians:
        print(magician)

def make_great(magicians:list):
    for i in range(len(magicians)):
        magicians[i] += " the Great"


make_great(magician_names)
show_magicians(magician_names)


# exercise 7

def get_random_temp(season:str)->int:
    if season == "winter":
        return randint(-10, 16)
    elif season == "summer":
        return randint(30, 40)
    else:
        return randint(10, 30)

def main():
    temp = get_random_temp("winter")
    print(f"The temperature right now is {temp} degrees Celsius")

    if temp > 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp > 16:
        print("Quite chilly! Don’t forget your coat")
    elif temp > 24:
        print("Might be a drop cool, maybe wear a sweater")
    elif temp > 32:
        print("Beautiful spring weather outside!")
    else:
        print("It's really hot outside, don't forget sunscreen")


main()


# exercise 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def play_game():
    wrong = 0
    wrong_data = []
    for item in data:
        user_answer = input(item["question"] + " ")
        if user_answer != item["answer"]:
            wrong += 1
            wrong_data.append({"question": item["question"], "user_answer": user_answer, "answer": item["answer"]})  

    
    print(f"You got {len(data) - wrong} right, and {wrong} wrong")
    
    # display the correct answers
    print("What you got wrong:")
    for item in wrong_data:
        print(item["question"])
        print(f"Your answer: {item['user_answer']}")
        print(f"Correct answer: {item['answer']}")
    
    if wrong > 3:
        print("Please play again")


play_game()