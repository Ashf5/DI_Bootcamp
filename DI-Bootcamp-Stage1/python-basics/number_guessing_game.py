from random import randint 

def number_guessing_game():
    num = randint(1, 100)
    guess_count = 7
    for i in range(guess_count):
        guess = int(input("Enter your guess: "))
        if guess == num:
            print("Good Job!")
            return
        elif guess < num:
            print("Too Low!")
        else:
            print("Too High")
    print(f"Sorry, the number was {num}")
        
number_guessing_game()