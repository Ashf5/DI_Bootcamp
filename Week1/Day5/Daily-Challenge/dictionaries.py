
# challenge 1
word = input("Enter a word: ")
letter_dictionary = dict()
for i in range(len(word)):
    if word[i] in letter_dictionary:
        letter_dictionary[word[i]].append(i)
    else:
        letter_dictionary[word[i]] = [i,]
print(letter_dictionary)


# challenge 2
def return_dollar(item:str)->int:
    item_price = ""
    for letter in item:
        if letter.isnumeric():
            item_price += letter
    return int(item_price)

def can_afford(item:str, wallet:str)->bool:
    item = return_dollar(item)
    wallet = return_dollar(wallet)
    if item <= wallet:
        return True
    else:
        return False
    

affordable = []
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}


wallet = "$300"

for item in items_purchase:
    if can_afford(items_purchase[item], wallet):
        affordable.append(item)
if len(affordable) > 0:
    print(sorted(affordable))
else:
    print("Nothing")
affordable.clear()




items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

for item in items_purchase:
    if can_afford(items_purchase[item], wallet):
        affordable.append(item)
if len(affordable) > 0:
    print(sorted(affordable))
else:
    print("Nothing")
affordable.clear()

# In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# instead you can by the Spoon that is $2

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 

for item in items_purchase:
    if can_afford(items_purchase[item], wallet):
        affordable.append(item)
if len(affordable) > 0:
    print(sorted(affordable))
else:
    print("Nothing")
affordable.clear()
