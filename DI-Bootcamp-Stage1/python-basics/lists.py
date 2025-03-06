li = [ i for i in range(1, 5)]
for item in li:
    print(item)

for item in li:
    print(item * 20)

li = ["Elie", "Tim", "Matt"]
new_list = []
for i in li:
    new_list.append(i[0])
print(new_list)

li = [ i for i in range(1,7)]
new_list = []
for i in li:
    if i % 2 == 0:
        new_list.append(i)

print(new_list)


li1 = [i for i in range(1,5)]
li2 = [i for i in range(3, 7)]
new_list = []
for i in li2:
    if i in li1:
        new_list.append(i)
print(new_list)

li = ["Elie", "Tim", "Matt"]
new_list = []
for i in li:
    new_list.append("".join(reversed(i)).lower())
print(new_list)

a = "first"
b = "third"
new_list = []
for i in a:
    if i in b:
        new_list.append(i)
print(new_list)

li = [i for i in range(1, 101)]
divisible = []
for i in li:
    if i % 12 == 0:
        divisible.append(i)
print(divisible)

s = "amazing"
vowels = ["a", "i", "e", "o", "u"]
li = []
for i in s:
    if i not in vowels:
        li.append(i)
print(li)

li = []
for i in range(3):
    li.append([j for j in range(3)])
print(li)

li = []
for i in range(10):
    li.append([j for j in range(10)])
print(li)
