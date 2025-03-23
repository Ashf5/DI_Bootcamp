
# exercise 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


def find_oldest(*args):
    oldest = args[0]
    for cat in args:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

cat_1 = Cat("tony", 3)
cat_2 = Cat("puss", 5)
cat_3 = Cat("missy", 2)

oldest = find_oldest(cat_1, cat_2, cat_3)
print(f"The oldest cat is {oldest.name} and is {oldest.age} years old.")


# exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height 

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"{davids_dog.name}: height {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"{sarahs_dog.name}: height {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

if sarahs_dog.height > davids_dog.height:
    print(sarahs_dog.name)
else:
    print(davids_dog.name)



# exercise 3 

class Song:
    def __init__(self, lyrics:list):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for lyric in self.lyrics:
            print(lyric)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


# exercise 4 

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
        self.name = zoo_name 

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal):
        if animal in self.animals:
            self.animals.remove(animal)

    def sort_animals(self):
        sorted_animals = dict()
        for animal in sorted(self.animals):
            if animal[0] in sorted_animals:
                sorted_animals[animal[0]].append(animal)
            else:
                sorted_animals[animal[0]] = [animal,]
        return sorted_animals

    def get_groups(self):
        for letter, animals in self.sort_animals().items():
            print(f"{letter}: {animals}")
    


zoo = Zoo("new_york_zoo")
zoo.add_animal("Giraffe")
zoo.add_animal("Lion")
zoo.add_animal("Monkey")
zoo.add_animal("Cheeta")
zoo.add_animal("Leopard")
zoo.get_animals()
zoo.sell_animal("Monkey")
zoo.get_groups()