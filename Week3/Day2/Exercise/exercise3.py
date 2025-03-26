
# exercise 3 
from exercise import Dog 
from random import choice

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained 

    def trained(self):
        print(self.bark()) 
        self.trained = True 

    def play(self, *args):
        """
        This function takes in a few dog name as STRINGS. 
        The instructions aren't clear if should be taking in Dog instances or just the names
        """
        players = f"{self.name} {' '.join(args)} all play together"
        print(players)

    def do_a_trick(self):
        if self.trained:
            tricks = [" does a barrel roll", " stands on his back legs", " shakes your hand", " plays dead"]

            print(f"{self.name} {choice(tricks)}")
        else:
            print("Sorry, I'm not trained")


spot = PetDog("spot", 5, 6, True)
spot.do_a_trick()