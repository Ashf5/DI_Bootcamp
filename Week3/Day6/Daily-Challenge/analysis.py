
class Text:
    def __init__(self, txt):
        self.txt = txt


    @classmethod
    def from_file(cls, file):
        try:
            with open(file, "r") as f:
                txt = f.read()
        except FileNotFoundError:
            print("File not found")
            return None 
        return cls(txt)
        


    def frequency(self, word):
        """
        Returns the frequency of the word in the text.
        If it's not found it returns None.
        """
        if word not in self.txt:
            return None 
        else:
            return f"The word {word} was found {self.txt.count(word)} times"

    def most_common(self):
        """
        This function returns a sentence saying the most common word in the text and the count.
        If there are two equal words, it returns the first.
        """
        word_count = dict()
        for word in self.txt.split():
            l_word = word.lower()
            if l_word in word_count:
                word_count[l_word] += 1
            else:
                word_count[l_word] = 1
        # get the highest value 
        highest = {"word": "word", "value": 0}
        for k, v in word_count.items():
            if v > highest["value"]:
                highest["word"] = k
                highest["value"] = v 

        return f"The most frequent word is \"{highest['word']}\" with a count of {highest['value']}"
    
    
    def unique(self):
        """
        This function returns a list of all the unique words in the text.
        """
        word_set = set(self.txt.split())
        return list(word_set)
                

class TextModification(Text):
    def remove_punc(self):
        """
        This function returns the text without any punctuation.
        """
        new_string = ""
        for letter in self.txt:
            if letter == " " or letter == "\n":
                new_string += letter 
            elif letter.isalnum():
                new_string += letter 

        return new_string
    
    def remove_stop(self):
        """
        This function returns the sentence without all the stop words.
        It also removes all extra whitespace.
        """
        # open file with stop words, downloaded from list from github
        with open("stop_words.txt", "r") as f:
            stops = [i.strip() for i in f.readlines()]
        
        # loop through string 
        new_string = ""
        for word in self.txt.split():
            # If there's punctuation, remove it.
            if not word.isalnum():
                word = word[:-1]
            if word.lower() in stops:
                continue 
            else:
                new_string += (word + " ")
        return new_string
    
    def remove_special(self):
        """
        This function removes all special characters and returns a new string.
        """

        special_characters = (
            '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', 
            ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
        )

        new_string = ""
        for letter in self.txt:
            if letter in special_characters:
                continue
            else:
                new_string += letter 
        return new_string


text = "A good book would sometimes cost as much as a good house."
text_obj = Text.from_file("the_stranger.txt")
print(text_obj.most_common())

text2 = TextModification(text)
print(text2.remove_special())