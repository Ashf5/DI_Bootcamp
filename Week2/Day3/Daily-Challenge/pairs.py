
import time



import random

# version 1 prints out every number and will have doubles
def algo1():
    start = time.time()
    list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

    target_number   = 3728

    # loop through list numbers
    length_list = len(list_of_numbers)
    for index, num in enumerate(list_of_numbers):
        for i in range(index + 1, length_list):
            if num + list_of_numbers[i] == target_number:
                print(f"{num} + {list_of_numbers[i]} equals {target_number } at index {index} and index {i}")
    return time.time() - start


# version 2 only prints out unique and is faster


def algo2():
    list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

    target_number   = 3728

    # loop through list numbers
    start = time.time()
    tried = set()
    length_list = len(list_of_numbers)
    for index, num in enumerate(list_of_numbers):
        if index in tried:
            continue
        for i in range(index + 1, length_list):
            if num + list_of_numbers[i] == target_number:
                print(f"{num} + {list_of_numbers[i]} equals {target_number } at index {index} and index {i}")
                tried.add(num)
                tried.add(list_of_numbers[i])

                break

    return time.time() - start


a1 = algo1()
a2 = algo2()

print(f"The first algorithm took {a1} seconds. The second took {a2} seconds")