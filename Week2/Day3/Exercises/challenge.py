
from random import shuffle
from math import sqrt

# exercise 1

# li = [i for i in range(10)]
# li.insert(10, 10)
# print(li)


# exercise 2
# sentence = input("Enter a sentence: ")
# print(sentence.count(" "))

# exercise 3
# sentence = input("Enter a sentence: ")
# upper = 0
# lower = 0
# for letter in sentence:
#     if letter.isalpha():
#         if letter.islower():
#             lower += 1
#         else:
#             upper += 1

# print(f"There is {upper} uppercase letters and {lower} lowercase letters")


# exercise 4

# def my_sum(li):
#     total = 0
#     for num in li:
#         total += num
#     print(total)

# li = [i for i in range(0, 100)]
# my_sum(li)


# exercise 5
# I'm assuming should find max without using the max function
# def find_max(li):
#     highest = 0
#     for num in li:
#         if num > highest:
#             highest = num

#     print(highest)

# li = [i for i in range(0, 100)]
# shuffle(li)
# find_max(li)


# exercise 6

# def factorial(num):
#     if num == 1:
#         return 1
#     return num * factorial(num-1)

# print(factorial(4))


# exercise 7
# def list_count(li, character):
#     count = 0
#     for c in li:
#         if c == character:
#             count += 1

#     print(count)

# list_count(['a', 'a', 'a', 'b'], 'a')


# exercise 8
# def norm(li):
#     sum_squared = 0
#     for num in li:
#         sum_squared += num * num

#     print(sqrt(sum_squared))

# norm([1, 2, 2])


# exercise 9
# def is_mono(li):
#     # check if sorted right
#     sorted_r = True 
#     sorted_rev = True

#     reg = sorted(li)
#     rev = sorted(li, reverse=True)
#     for i in range(len(li)):
#         if li[i] != reg[i]:
#             sorted_r = False
#         if li[i] != rev[i]:
#             sorted_rev = False
        
#         if not sorted_r and not sorted_rev:
#             return False 

#     return True

# print(is_mono([i for i in range(100)]))
# li = [i for i in range(100)]
# shuffle(li)
# print(is_mono(li))

# exercise 10

# def longest(li):
#     longest = ""
#     for word in li:
#         if len(word) > len(longest):
#             longest = word
#     print(longest)

# longest(['hi', 'there'])


# exercise 11
# def sep_list(li):
#     ints = []
#     strs = []
#     for item in li:
#         if type(item) == int:
#             ints.append(item)
#         else:
#             strs.append(item)
#     print(ints)
#     print(strs)

# li = [1, 2, "hi", 3, 4, "there"]
# sep_list(li)


# exercise 12
# def is_palindrome(word):
#     if word == "".join(reversed(word)):
#         return True 
#     return False 

# print(is_palindrome("radar"))