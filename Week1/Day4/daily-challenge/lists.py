
# challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))
list_multiples = []
count = number
for i in range(length):
    list_multiples.append(count)
    count += number
print(list_multiples)


# challenge 2
word = input("Enter a word: ")
word = list(word)
word.reverse()
for letter in word:
    letter_count = word.count(letter)
    if letter_count > 1:
        for i in range(letter_count -1):
            word.remove(letter)
word.reverse()
print("".join(word))

