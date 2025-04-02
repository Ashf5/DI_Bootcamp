
from random import choice

class Game:
    def __init__(self):
        self.options = ["rock", "paper", "scissors"]

    def get_user_item(self):
        """
        This function accepts user input (rock, paper, or scissors) for the game and validates it.
        """
        while True:
            user_move = input("Please enter rock, paper, or scissors: ")
            if user_move not in self.options:
                print("Please enter a valid move: ")
                continue 
            else:
                return user_move 
            
    def get_computer_item(self):
        """
        Returns a random option for the computer moves.
        """
        return choice(self.options)
    

    def get_game_result(self, user_item, computer_item):
        """
        This function takes in what the user and the computer picked, and returns if the winner won, lossed, or drawed.
        """
        if user_item == "rock":
            if computer_item == "paper":
                return "lose"
            elif computer_item == "scissors":
                return "win"
        elif user_item == "paper":
            if computer_item == "rock":
                return "win"
            elif computer_item == "scissors":
                return "lose"
        elif user_item == "scissors":
            if computer_item == "rock":
                return "lose"
            elif computer_item == "paper":
                return "win"

        return "draw"
        
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You picked {user_item} Computer picked {computer_item}. You {result}!")
        return result





    