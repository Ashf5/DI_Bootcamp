
class Farm:
    def __init__(self, name):
        self.name = name 
        self.animals = dict()

    def add_animal(self, animal, num=1):
        if animal in self.animals:
            self.animals[animal] += num
        else:
            self.animals[animal] = num 


    def get_info(self):
        string = ""
        for animal, num in self.animals.items():
            string += f"\n{animal} : {num}"
        string += "\n\tE-I-E-I-O"
        return string

    def get_animal_types(self):
        return sorted(list(self.animals.keys()))

    def get_short_info(self):
        string = f"{self.name}'s farm has "
        for num, animal in enumerate(self.get_animal_types()):
            if num == len(self.animals) - 1:
                string += f"and {animal}s."
            else:
                string += f"{animal}s, "
        return string





macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_short_info())