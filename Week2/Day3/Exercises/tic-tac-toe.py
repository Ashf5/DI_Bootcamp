
# Nested list to store all the positions
positions = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

posi = "998"
def draw_board(positions:list)->None:
    """
    This function prints the board.
    Returns None
    """

    board = f"""
    TIC TAC TOE
          1       2       3
      -------------------------
      *       |       |       *
    1 *   {positions[0][0]}   |   {positions[0][1]}   |   {positions[0][2]}   *
      *       |       |       *
      -------------------------
      *       |       |       *
    2 *   {positions[1][0]}   |   {positions[1][1]}   |   {positions[1][2]}   *
      *       |       |       *
      -------------------------
      *       |       |       *
    3 *   {positions[2][0]}   |   {positions[2][1]}   |   {positions[2][2]}   *
      *       |       |       *
      -------------------------
    """

    print(board)
    


def count_spaces(positions)->int:
    """
    This function takes in the positions list and returns an int containing the amount of open spots on the board.
    """
    space_count = 0
    for i in range(3):
        space_count += positions[i].count(" ")
    return space_count


def current_player(positions)->str:
    """
    This function takes in the positions list, returns who's turn it is in a string.
    Either X or O
    """
    # Check who's turn it is based on how many spaces taken
    
    space_count = count_spaces(positions)
    if space_count % 2 == 1:
        return "O"

    return "X"


def check_winner(positions):
    """
    This function checks if there's a winner. If yes it returns a string with either O, X, or Tie. If there's no winner it returns None
    """
    
    for i in range(3):
        # check horizontal
        if positions[i][0] != " " and positions[i][0] == positions[i][1] and positions[i][1] == positions[i][2]:
            return positions[i][0]

        # check vertical
        if positions[0][i] != " " and positions[0][i] == positions[1][i] and positions[1][i] == positions[2][i]:
            return positions[0][i]

        # Check diagnol
        if positions[0][0] != " " and positions[0][0] == positions[1][1] and positions[1][1] == positions[2][2]:
            return positions[0][0]
        elif positions[2][0] != " " and positions[2][0] == positions[1][1] and positions[1][1] == positions[0][2]:
            return positions[0][2]

    # check if Tie
    space_count = count_spaces(positions)
    if space_count == 0:
        return "Tie"

    else:
        return None
    


def play_game(positions):
    print("When it's your turn enter your position by row and column number")
    while True:
        draw_board(positions)
        player = current_player(positions)
        print(f"Player {player} Go!")
        row = input("Enter row number: ")
        column = input("Enter column number: ")
        # convert input to int (and minus 1 for the index) and make sure it's a valid int
        try:
            row = int(row) - 1
            column = int(column) - 1
        except ValueError:
            print("Please enter a valid number")
            continue

        try:
            if positions[row][column] != " ":
                print("Sorry, that space was taken")
                continue
            else:
                positions[row][column] = player
        except IndexError:
            print("You must enter a valid index number")
            continue





        # check if there's a winner
        winner = check_winner(positions)
        if winner:
            draw_board(positions)
            if winner == "Tie":
                print("Tie Game!")
                break
            else:
                print(f"player {winner} wins!!")
                break






play_game(positions)