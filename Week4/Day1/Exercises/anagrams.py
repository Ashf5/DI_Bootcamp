
from anagram_checker import AnagramChecker 

def menu():
    while True:
        choice = input("1: Enter a word\n2: Exit\n")
        try:
            choice = int(choice)
            if choice < 1 or choice > 2:
                raise ValueError
        except ValueError:
            print("Enter a valid choice")
            continue

        if choice == 1:
            user_word = input("Enter a word to see the anagrams: ")
            # verify only one word was put in 
            if len(user_word.split()) != 1:
                print("You may only Enter one word.")
                continue 
            if not user_word.isalpha():
                print("Please enter a valid word")
            user_word = user_word.strip()
            a = AnagramChecker()
            anagrams = a.get_anagrams(user_word)
            print(f"Your word {user_word} is a valid English word.")
            print(f"Anagrams for your word : {anagrams}")
        else:
            return 
        

menu()