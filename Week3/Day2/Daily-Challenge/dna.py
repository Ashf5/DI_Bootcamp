from random import choice, random, randint, sample

class Flip:
    def flip(self):
        """
        returns true or false. %50 percent chance.
        """
        return choice([True, False])


class Mutate(Flip):
    def __init__(self, contents):
        self.contents = contents 

    def mutate(self):
        for item in self.contents:
            item.mutate() 


class Gene(Flip):
    def __init__(self):
        self.gene = int(self.flip())

    def mutate(self):
        self.gene = int(self.flip())

class Chromosome(Flip):
    def __init__(self):
        self.contents = [Gene() for _ in range(10)]
    def mutate(self):
        num_chromosomes = randint(1, 10)
        indices = sample(range(10), num_chromosomes)
        for i in indices:
            self.contents[i].mutate()

class Dna(Flip):
    def __init__(self):
        self.contents = [Chromosome() for _ in range(10)]
    def mutate(self):
        num_chromosomes = randint(1, 10)
        indices = sample(range(10), num_chromosomes)
        for i in indices:
            self.contents[i].mutate()

    def all_ones(self):
        """
        Returns True if all genes are 1 and else False. 
        """
        for item in self.contents:
            for gene in item.contents:
                if gene.gene == 0:
                    return False
        return True


class Organism:
    def __init__(self, dna, environment):
        self.dna = dna 
        self.environment = environment 
    
    def flip(self):
        if random() < self.environment:
            self.dna.mutate()





c = Dna()
org = Organism(c, 1.0)

count = 0
while True:
    count += 1
    org.flip()
    if c.all_ones():
        print(count)
        break
    if count % 1000000 == 0:
        print(count)
