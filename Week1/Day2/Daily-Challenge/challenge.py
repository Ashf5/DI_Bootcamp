# Daily Challenge

from random import shuffle
from types import new_class

user_sentence = input("Enter a 10 character string ")
if len(user_sentence) > 10:
    print("String too long")
elif len(user_sentence) < 10:
    print("string not long enough")
else:
    print(user_sentence[0])
    print(user_sentence[-1])

    for i in range(len(user_sentence) + 1):
        print(user_sentence[0:i])




shuffled = list(range(0, len(user_sentence)))
shuffle(shuffled)
new_string = ""
for i in shuffled:
    new_string += user_sentence[i]
print(new_string)
