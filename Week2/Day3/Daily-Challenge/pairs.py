
import time
import random
import bisect

# version 1 prints out every number and will have doubles


def algo1(list_of_numbers, target_number):
    """
    prints all matches and prints time. Has doubles
    """
    start = time.time()

    # loop through list numbers
    length_list = len(list_of_numbers)
    for index, num in enumerate(list_of_numbers):
        for i in range(index + 1, length_list):
            if num + list_of_numbers[i] == target_number:
                print(
                    f"{num} + {list_of_numbers[i]} equals {target_number} at index {index} and index {i}")
    return time.time() - start


# version 2 only prints out unique and is faster


def algo2(list_of_numbers, target_number):
    """
    Takes about 1.5 seconds. Prints out all the matches, only unique. Then prints count and how long it took
    """

    found = 0

    # loop through list numbers
    start = time.time()
    tried = set()
    length_list = len(list_of_numbers)
    for index, num in enumerate(list_of_numbers):
        # if already used the number continue to next iteration
        if num in tried or num - target_number in tried:
            continue
        if num > target_number:
            continue
        for i in range(index + 1, length_list):
            if num + list_of_numbers[i] == target_number:
                print(
                    f"{num} + {list_of_numbers[i]} equals {target_number} at index {index} and index {i}")
                tried.add(num)
                tried.add(list_of_numbers[i])
                found += 1

                break
    print(f"found {found} matches")
    return time.time() - start


# uses binary search. This function is the quickest
def algo3(list_of_numbers, target_number):
    """
    Uses binary search, takes about 8th of a second. Prints out all the matches, only unique. Then prints count and how long it took
    """
    found = 0

    # make a sorted unique list
    start = time.time()

    # take care of corner case if target / 2 is twice in the list
    if target_number % 2 == 0 and list_of_numbers.count(target_number // 2) > 1:
        print(f"{target_number // 2} and {target_number // 2} equals {target_number}")
        found += 1

    list_of_numbers = list(set(list_of_numbers))
    list_of_numbers.sort()
    length_list = len(list_of_numbers)
    for index, num in enumerate(list_of_numbers):
        if num > target_number:
            break

        # use binary search
        looking_for = target_number - num
        pos_index = bisect.bisect_left(list_of_numbers, looking_for)
        if list_of_numbers[pos_index] == looking_for:
            print(
                f"{num} and {looking_for} = {target_number}. Found at index {index} and {pos_index}")
            list_of_numbers.pop(index)

            found += 1
    print(f"found {found} matches")
    return time.time() - start


list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728
# a1 = algo1(list_of_number, target_number)
# print(a1)
# a2 = algo2(list_of_numbers, target_number)
# print(a2)
a3 = algo3(list_of_numbers, target_number)
print(a3)
