

class Human:
    possible_blood = ["A", "B", "AB", "O"]
    
    def __init__(self, id_number, name, age, priority, blood_type):
        self.family = []
        self.id_number = id_number 
        self.name = name
        self.age = age
        self.priority = priority
        if blood_type in Human.possible_blood:
            self.blood_type = blood_type 
        else:
            raise ValueError("Please enter a valid blood type")
        
    def __str__(self):
        return f"{self.name}, {self.age}, {self.priority}"
    
    def add_family_member(self, person):
        self.family.append(person)
        person.family.append(self)
        
        

class Queue:
    def __init__(self):
        self.humans = []

    def add_person(self, person):
        if person.priority or person.age >= 60:
            self.humans.insert(0, person)
            print("Added to the beginning of the queue")
        else:
            self.humans.append(person)
            print("Added to the end of the queue")

    def find_in_queue(self, person):
        for num, human in enumerate(self.humans):
            if person is human:
                return num
            
    def swap(self, person1, person2):
        index1 = self.find_in_queue(person1)
        index2 = self.find_in_queue(person2)
        self.humans[index1], self.humans[index2] = self.humans[index2], self.humans[index1]

    def get_next(self):
        if len(self.humans) > 0:
            return self.humans.pop(0)
    

    def get_next_blood_type(self, blood_type):
        for num, human in enumerate(self.humans):
            if human.blood_type == blood_type:
                return self.humans.pop(num)
            

    def sort_by_age(self):
        new_list = []
        # first get all the priority 
        for num, human in enumerate(self.humans):
            if human.priority:
                new_list.append(self.humans.pop(num))

        self.humans.sort(key=lambda human: human.age, reverse=True)
        new_list += self.humans 
        self.humans = new_list 

    def rearrange_queue(self):
        for num, human in enumerate(self.humans):
            try:
                if self.humans[num + 1] in human.family:
                    for h in range(num + 2, len(self.humans)):
                        if self.humans[h] not in human.family:
                            self.humans[num + 1], self.humans[h] = self.humans[h], self.humans[num + 1]
                            break
            except IndexError:
                break
            

    


human1 = Human("878", "asher", 18, False, "O")
human2 = Human("8787", "malka", 18, False, "A")
human3 = Human("787", "yitzy", 176, False, "AB")
human4 = Human("437", "mordy", 42, False, "B")
human5 = Human("2333", "Liz", 49, True, "A")
human1.add_family_member(human2)
human5.add_family_member(human1)

queue = Queue()
queue.add_person(human1)
queue.add_person(human2)
queue.add_person(human3)
queue.add_person(human4)
queue.add_person(human5)

queue.rearrange_queue()
for item in queue.humans:
    print(item)
