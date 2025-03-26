
# exercise 1 

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# class Siamese(Cat):
#     pass 

# cat1 = Bengal("Kitty", 3)
# cat2 = Chartreux("Buttercup", 5)
# cat3 = Siamese("Pip", 1)
# all_cats = [cat1, cat2, cat3]

# sara_pets = Pets(all_cats)
# sara_pets.walk()


# exercise 2 

class Dog:
    def __init__(self, name, age, weight):
        self.name = name 
        self.age = age 
        self.weight = weight  

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} wins the fight."
        else:
            return f"{other_dog.name} wins the fight"


dog1 = Dog("Pup", 2, 5)
dog2 = Dog("Spot", 5, 9)
dog3 = Dog("Fluffy", 1, 4)

# print(dog1.bark())
# print(dog2.run_speed())
# print(dog3.fight(dog2))


# for exercise 3 see exercise3.py


# exercise 4 

class Family:
    def __init__(self, members:list, last_name:str):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"congratulations on the birth of {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18 

    def family_presentation(self):
        print(f"The family name is {self.last_name}")
        for member in self.members:
            for k, v in member.items():
                print(f"{k}: {v}", end="\t")
            print("\n")

fried_family = Family([{'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}], "Fried")

# fried_family.born(name="Asher", age=23, gender="Male", is_child=True)
# print(fried_family.is_18("Asher"))
# fried_family.family_presentation()


# exercise 5 

class TheIncredibles(Family):

    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18 :
                    print(member["power"])
                else:
                    raise Exception("You are not 18")

    def incredible_presentation(self):
        print("Here is our powerful family **")
        super().family_presentation()

incredibles = TheIncredibles([{'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}], "Incredibles")

incredibles.incredible_presentation()
incredibles.born(name="Baby Jack", age=0, gender="male", is_child=True, power="Unknown Power")
incredibles.incredible_presentation()