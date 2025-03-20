import random


def draw_word(word: str, string: str, guess: str) -> str:
    """
    Checks if the guess is in the word, and updates the guess string.
    Returns a tuple, the 1st item the guess string, the second is a bool True if there was a good guess, false if there wasn't.
    """

    if guess in word:
        string = list(string)
        for i in range(len(word)):
            if string[i] == "*" and word[i] == guess:
                string[i] = word[i]
        return "".join(string), True
    return string, False


def draw_hangman(guess_count):
    """
    This function takes in the amount of guesses and draws the hangman.
    """
    gallows = """
    _________
      |
      |
      |
    """

    print(gallows)
    hang = [
        "    |||     ",
        " ---", " ---",
        "    |||     ",
        "   /", "\\"
    ]

    if guess_count >= 1:
        print(hang[0])
        if guess_count >= 2:
            print(hang[1], end="  ")
            if guess_count >= 3:
                print(hang[2])
                if guess_count >= 4:
                    print(hang[3])
                    if guess_count >= 5:
                        print(hang[4], end="   ")
                        if guess_count >= 6:
                            print(hang[5])

    print("\n\n")


def play_game():
    """
    Run the game
    """

    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive',
                 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    word = random.choice(wordslist)
    print(word)
    string = "*" * len(word)

    # if there's a space in the word, change it to a dash
    if " " in word:
        string = list(string)
        string[word.find(" ")] = "-"
        string = "".join(string)
    guessed_letters = []

    guess_count = 0
    while guess_count < 6 and "*" in string:
        print(string)
        guess = input("Guess a letter: ").lower()
        # Check if user already guessed this letter
        if guess in guessed_letters:
            print(f"You already guessed the letter {guess}")
            continue

        guessed_letters.append(guess)
        string, updated = draw_word(word, string, guess)

        # If it wasn't a good guess, update the guess count
        if not updated:
            guess_count += 1
        draw_hangman(guess_count)

    if guess_count < 6:
        print(string)
        print("You Win!!")
    else:
        print("You lose!!!")


play_game()
