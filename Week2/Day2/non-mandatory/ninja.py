
# exercise 1
def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        print(f"Hi {first_name} {middle_name} {last_name}")

    else:
        print(f"Hi {first_name} {last_name}")

get_full_name("Asher", "Fried", middle_name="a")


# exercise 2
# TODO
# pass. Don't have time to hard code all morse code values

# exercise 3
def box_printer(*args)->None:
    longest = 0
    for word in args:
        if len(word) > longest:
            longest = len(word)

    print("*" * (longest + 4))
    for word in args:
        print(f"* {word}{' ' * (longest + 1 - len(word))} *")


    print("*" * (longest + 4))


box_printer("hey", "there", "how", "are", "You", "doing")



# exercise 4
def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)
# the code sorts it by moving through list starting from beginining and keeps on moving the values to the left if the number to the left is smaller than in