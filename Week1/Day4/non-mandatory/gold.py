from string import ascii_lowercase
from random import randint

# exercise 1
li1 = [i for i in range(1, 10)]
li2 = [i for i in range(1, 10)]

li1.extend(li2)
#print(li1)


# exercise 2
for i in range(1500, 2501):
    if i % 35 == 0:
        print(i)


# exercise 3
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Enter your name: ")
if user_name in names:
    print(names.index(user_name))


# exercise 4
li = []
for i in range(3):
    li.append(int(input("Enter a number: ")))
li.sort()
print(li[-1])


# exercise 5
letters = str(ascii_lowercase)
vowels = ["a", "e", "i", "o", "u"]
for letter in letters:
    if letter in vowels:
        type_letter = "vowel"
    else:
        type_letter = "consonant"
    print(f"The letter {letter} is a {type_letter}")


# exercise 6
words = input("Enter 7 words: ").split()
letter = input("Enter a letter: ")
for word in words:
    if letter in word:
        print(word.index(letter))
    else:
        print(f"The letter {letter} isn't in the word {word}")


# exercise 7
list_numbers = list(range(1, 1000001))
print(min(list_numbers))
print(max(list_numbers))
print(sum(list_numbers))


# exercise 8
user_nums = input("enter numbers seperated by a comma: ")
li = user_nums.split(',')
list_numbers = [int(i) for i in li]
tuple_nums = tuple(list_numbers)
print(list_numbers)
print(tuple_nums)


# exercise 9
num = randint(1,9)
guess = int(input("Enter a number 1 through 9: "))
if num == guess:
    print("Good job, you win!")
else:
    print("Better luck next time")