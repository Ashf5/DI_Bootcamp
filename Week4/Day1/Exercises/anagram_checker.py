from collections import Counter


class AnagramChecker:
    def __init__(self):
        try:
            with open("sowpods.txt") as f:
                self.words = [word.strip() for word in f.readlines()]
        except FileNotFoundError:
            print("Error, file not found")
            raise FileNotFoundError

    def is_valid_word(self, word):
        if word.upper() in self.words:
            return True
        else:
            return False

    @staticmethod
    def is_anagram(word1, word2):
        return Counter(word1) == Counter(word2)

    def get_anagrams(self, word):
        anagrams = []
        for item in self.words:
            if AnagramChecker.is_anagram(item, word.upper()):
                # make sure it doesn't include itself as an anagram
                if item == word.upper():
                    continue

                anagrams.append(item)
        return anagrams
