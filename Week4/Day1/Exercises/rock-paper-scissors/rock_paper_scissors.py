
from game import Game


def get_user_menu_choice():
    user_choice = input("1: Play a new game\n2: Show scores\n3: Quit\n")
    try:
        choice = int(user_choice)
        if choice < 1 or choice > 3:
            raise ValueError
    except ValueError:
        print("Invalid choice")
        raise ValueError
    return choice


def print_results(results):
    print(
        f"You won {results['win']} games, lost {results['lose']} games, and drew {results['draw']} games")


def main():
    results = {"win": 0, "lose": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == 1:
            g = Game()
            result = g.play()
            results[result] += 1
        elif choice == 2:
            print_results(results)
        else:
            print_results(results)
            return


if __name__ == "__main__":
    main()
