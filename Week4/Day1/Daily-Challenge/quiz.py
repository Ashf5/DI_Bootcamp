
# Part 1 

# What is a class?          A class is like a blueprint for objects.
# What is an instance?      An object that was instantiated from a class. (An instance of a class)
# What is encapsulation?    Making data only visible and usable inside it's class
# What is abstraction?      Taking away the logic that the end user doesn't have to worry about how it was done, just how to use it.
# What is inheritance?      Making a class inherit from a base class, where it accepts the functionality of the base class and can then add it's own
# What is multiple inheritance? When a class inherits from multiple classes
# What is polymorphism?  When the same function takes on different meaning and usage when used in different places.
# What is method resolution order or MRO?  The order that python uses to decide which methods and attributes it should use when a class has multiple inheritance 



# part 2
from random import shuffle


class Card:
    def __init__(self, suit, value):
        self.suit = suit 
        self.value = value 

    def __str__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        """
        Creates a full deck of cards
        """
        self.deck = []
        # make sure the deck has all 52 cards.
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = [str(num) for num in range(2, 11)] + ["A", "J", "Q", "K"]
        for suit in suits:
            for value in values:
                self.deck.append(Card(suit, value))

    def shuffle(self):
        """
        Shuffles a complete deck of cards. Prints an error message if there's missing cards.
        """
        if len(self.deck) != 52:
            print("Error, missing cards")
            return 
        else:
            shuffle(self.deck)
            print("shuffled")
    
    def deal(self):
        """
        Deals the first card and removes it from the deck
        """
        return self.deck.pop(0)

d = Deck()

d.shuffle()
for _ in range(5):
    print(d.deal())


