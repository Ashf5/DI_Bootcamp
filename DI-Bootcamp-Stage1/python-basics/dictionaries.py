from string import ascii_uppercase

li = [("name", "Elie"), ("job", "Instructor")]
dictionary = dict(li)
print(dictionary)

li1 = ["CA", "NJ", "RI"]
li2 = ["California", "New Jersey", "Rhode Island"]
dictionary = dict(zip(li1, li2))
print(dictionary)

vowel_dict = {}
vowels = ["a", "e", "i", "o", "u"]
for vowel in vowels:
    vowel_dict[vowel] = 0
print(vowel_dict)

letters = list(ascii_uppercase)
letter_dict = {}
for i in range(len(letters)):
    letter_dict[i+1] = letters[i]
print(letter_dict)

phrase = "awesome sauce"
dictionary1 = {}
for vowel in vowels:
    dictionary1[vowel] = phrase.count(vowel)
print(dictionary1)