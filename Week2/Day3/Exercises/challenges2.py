
# exercise 1
# loop 1
for i in range(1, 6, 2):
    space = " " * ((5 - i) // 2)
    string = f"{space}{'*' * i}{space}"
    print(string)

print("\n")

# loop 2 
for i in range(1, 6):
    space = " " * (5 - i)
    print(f"{space}{'*' * i}")
    


# loop 3 

for i in range(1, 6):
    print("*" * i)
for i in range(0, 5):
    space = " " * i 
    print(f"{space}{'*' * (5 -i)}")



# exercise 2 

# this code will sort the list by going through from begining finding the lowest numbers and moving them to the left

my_list = [2, 24, 12, 354, 233]  # create a list
for i in range(len(my_list) - 1): # create a range with all index numbers of the list and loop over it
    minimum = i  # get current index 
    for j in range( i + 1, len(my_list)): # loop over all the remaining elements
        if(my_list[j] < my_list[minimum]):  # if a farther number lower than the current minimum
            minimum = j # set minimum to that lower number
            if(minimum != i):  # if found a lower number
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]  # trade places 
print(my_list)