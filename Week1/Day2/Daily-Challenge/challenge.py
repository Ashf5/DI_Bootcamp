# Daily Challenge

from random import shuffle
import string

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



    user_sentence = list(user_sentence)
    shuffle(user_sentence)
    user_sentence = "".join(user_sentence)
    print(user_sentence)
