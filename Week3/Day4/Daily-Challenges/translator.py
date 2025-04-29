from googletrans import Translator

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
output_dict = dict()
translator = Translator()
for word in french_words:
    dt1 = translator.translate(word, src='fr', dest='en')
    output_dict[word] = dt1.text 
print(output_dict)