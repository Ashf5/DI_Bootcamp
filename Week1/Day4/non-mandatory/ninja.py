from math import sqrt 


# exercise 1
user_nums = input("Enter numbers seperated by a comma: ").split(",")
solutions = []
for num in user_nums:
    answer = sqrt((2 * 50 * int(num)) / 30)
    solutions.append(int(answer))
for solution in solutions:
    print(solution, end=",")


# exercise 2
list_nums = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
for num in list_nums:
    print(num, end= " ")
print("\n")

new_list = sorted(list_nums)
new_list.reverse()
print(new_list)
print(sum(list_nums))
print([num for num in list_nums if num > 50])
print([num for num in list_nums if num < 10])
print([num * num for num in list_nums])
new_list = list(set(list_nums))
print(new_list, f"There are {len(new_list)} numbers in the list")
avg = sum(list_nums) / 10
print(avg)
print(max(list_nums))
print(min(list_nums))


# exercise 3
paragraph = "The history of Israel covers an area of the Southern Levant also known as Canaan, Palestine or the Holy Land, which is the geographical location of the modern states of Israel and Palestine. From a prehistory as part of the critical Levantine corridor, which witnessed waves of early humans out of Africa, to the emergence of Natufian culture c. 10th millennium BCE, the region entered the Bronze Age c. 2,000 BCE with the development of Canaanite civilization, before being vassalized by Egypt in the Late Bronze Age. In the Iron Age, the kingdoms of Israel and Judah were established, entities that were central to the origins of the Jewish and Samaritan peoples as well as the Abrahamic faith tradition.[1][2][3][4][5][6] This has given rise to Judaism, Samaritanism, Christianity, Islam, Druzism, Baha'ism, and a variety of other religious movements. Throughout the course of human history, the Land of Israel has seen many conflicts and come under the sway or control of various polities and, as a result, it has historically hosted a wide variety of ethnic groups."

len_paragraph = paragraph.split()
unique = len(set(len_paragraph))
print(f"This paragraph has {len(paragraph)} letters and {len(len_paragraph)} words of which there are {unique} unique words.")

# exercise 4
user_input = input("Enter some text")
frequency = {}
for word in user_input.split():
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

for word in frequency.keys():
    print(f"{word}: {frequency[word]}")