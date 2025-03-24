
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


# exercise 13
# def sum_over(sentence, num):
#     total_over = 0
#     for word in sentence.split():
#         if len(word) > num:
#             total_over += 1

#     print(total_over)

# sentence = "Do or do not there is no try"
# num=2
# sum_over(sentence, num)


# exercise 14 
# def dict_avg(dictionary):
#     print(sum(dictionary.values()) // len(dictionary))

# dict_avg({'a': 1,'b':2,'c':8,'d': 1})


# exercise 15

# def common_div(x, y):
#     # this function counts one as one of the divisors even though octopus for some reason doesn't
#     common = []
#     for num in range(1, min(x, y) + 1):
#         if x % num == 0 and y % num == 0:
#             common.append(num)

#     return common

# print(common_div(10, 20))


# exercise 16 
# def is_prime(num):
#     for i in range(2, int(sqrt(num))):
#         if num % i == 0:
#             return False 

#     return True

# print(is_prime(12))


# # exercise 17 
# def weird_print(li):
#     weird = []
#     for index, num in enumerate(li):
#         if index % 2 == 0 and num % 2 == 0:
#             weird.append(num)

#     return weird 

# print(weird_print([1,2,2,3,4,5]))



# exercise 18
# def type_count(**kwargs):
#     types = dict()
#     for item in kwargs.values():
#         item_type = str(type(item))
#         if item_type in types:
#             types[item_type] += 1 
#         else:
#             types[item_type] = 1 
#     return types 

# print(type_count(a=1, b='string', c=1.0, d=True, e=False))


# exercise 19 
# def split(word, delimiter=" "):
#     li = []
#     string = ""
#     for letter in word:
#         if letter == delimiter:
#             li.append(string)
#             string = ""
#         else:
#             string += letter 
#     return li 

# print(split("hey there how are you doing, how, else,", ","))


# exercise 20 
input_string = input("Enter password: ")
password = "*" * len(input_string)
print(password) 