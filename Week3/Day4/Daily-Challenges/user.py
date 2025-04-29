
li = []
for _ in range(5):
    name = input("Enter your name: ")
    age = input("Enter your age: ")
    score = input("Enter your score: ")
    li.append((name, age, score))

sorted_list = sorted(li, key=lambda x: (x[0], x[1], x[2]))
print(sorted_list)