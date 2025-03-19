
matrix_list = []
while True:
    matrix_string = input("Enter a matrix string or enter quit: ")
    if matrix_string == "quit":
        break
    else:
        matrix_list.append([i for i in matrix_string])

print(matrix_list)


message = ""
space = False
for i in range(len(matrix_list[0])):
    for j in range(len(matrix_list)):
        letter = matrix_list[j][i]
        if letter.isalpha():
            if space:
                message += " "
                space = False
            message += letter
        else:
            space = True

print(message)