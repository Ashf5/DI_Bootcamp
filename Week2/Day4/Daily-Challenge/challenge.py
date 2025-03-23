
# challenge 1

user_input = input("Enter a comma seperated sequence of words: ")
sorted_list = [i for i in user_input.split(",")]
sorted_list.sort()
for word in sorted_list:
    print(word, end=",")

print("\n")

# challenge 2
sentence = input("Enter a sentence: ")
longest = ""
for word in sentence.split():
    if len(word) > len(longest):
        longest = word

print(longest)

