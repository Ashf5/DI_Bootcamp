
from random import choice
import json


# exercise 1

def get_words_from_file()->tuple:
    with open("words.txt", "r") as f:
        word_tuple = tuple(word.strip() for word in f.readlines())
        return word_tuple

def get_random_sentence(length):
    sentence = ""
    words = get_words_from_file()
    for _ in range(length):
        sentence += choice(words).lower() + " "
    return sentence 

def main():
    print("This program takes in a length for a sentence. You enter a number between 2 and 20 and a random sentence of that length will be generated and printed.")
    length = input("Enter a length between 2 and 20: ")
    try:
        length = int(length)
    except ValueError:
        print("Invalid input!")
        raise ValueError 

    if length < 2 or length > 20:
        print("You didn't enter a valid number (must be between 2 and 20)")
        raise ValueError 

    print(get_random_sentence(length))


main()


# exercise 2

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

salary_json = json.loads(sampleJson)
print(salary_json["company"]["employee"]["payable"]["salary"])
salary_json["company"]["employee"]["birthdate"] = None 

with open("salary.json", "w") as f:
    json.dump(salary_json, f, indent=2)
