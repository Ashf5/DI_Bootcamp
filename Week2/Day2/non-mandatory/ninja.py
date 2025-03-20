
# exercise 1
def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        print(f"Hi {first_name} {middle_name} {last_name}")

    else:
        print(f"Hi {first_name} {last_name}")


get_full_name("Asher", "Fried", middle_name="a")


# exercise 2
def convert_to_morse(text):
    morse_code_dict = {
        'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',     'F': '..-.',
        'G': '--.',   'H': '....',  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
        'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',  'Q': '--.-',  'R': '.-.',
        'S': '...',   'T': '-',    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
        'Y': '-.--',  'Z': '--..',
        'a': '.-',    'b': '-...',  'c': '-.-.',  'd': '-..',   'e': '.',     'f': '..-.',
        'g': '--.',   'h': '....',  'i': '..',    'j': '.---',  'k': '-.-',   'l': '.-..',
        'm': '--',    'n': '-.',    'o': '---',   'p': '.--.',  'q': '--.-',  'r': '.-.',
        's': '...',   't': '-',    'u': '..-',   'v': '...-',  'w': '.--',   'x': '-..-',
        'y': '-.--',  'z': '--..'
    }
    coded = ""
    for letter in text:
        if letter == " ":
            coded += "/"
        else:
            coded += f"{morse_code_dict[letter]} "
    return coded


def convert_from_morse(text):
    reversed_morse_code_dict = {
        '.-': 'A',    '-...': 'B',  '-.-.': 'C',  '-..': 'D',   '.': 'E',     '..-.': 'F',
        '--.': 'G',   '....': 'H',  '..': 'I',    '.---': 'J',  '-.-': 'K',   '.-..': 'L',
        '--': 'M',    '-.': 'N',    '---': 'O',   '.--.': 'P',  '--.-': 'Q',  '.-.': 'R',
        '...': 'S',   '-': 'T',    '..-': 'U',   '...-': 'V',  '.--': 'W',   '-..-': 'X',
        '-.--': 'Y',  '--..': 'Z',
        '.-': 'a',    '-...': 'b',  '-.-.': 'c',  '-..': 'd',   '.': 'e',     '..-.': 'f',
        '--.': 'g',   '....': 'h',  '..': 'i',    '.---': 'j',  '-.-': 'k',   '.-..': 'l',
        '--': 'm',    '-.': 'n',    '---': 'o',   '.--.': 'p',  '--.-': 'q',  '.-.': 'r',
        '...': 's',   '-': 't',    '..-': 'u',   '...-': 'v',  '.--': 'w',   '-..-': 'x',
        '-.--': 'y',  '--..': 'z'
    }

    decoded = ""
    words = text.split("/")
    for word in words:
        letters = word.split()
        for letter in letters:
            decoded += reversed_morse_code_dict[letter]
        decoded += " "
    return decoded


text = input("Enter a string to encode to morse: ")
encoded = convert_to_morse(text)
decoded = convert_from_morse(encoded)
print(encoded)
print(decoded)


# exercise 3
def box_printer(*args) -> None:
    longest = 0
    for word in args:
        if len(word) > longest:
            longest = len(word)

    print("*" * (longest + 4))
    for word in args:
        print(f"* {word}{' ' * (longest + 1 - len(word))} *")

    print("*" * (longest + 4))


box_printer("hey", "there", "how", "are", "You", "doing")


# exercise 4
def insertion_sort(alist):
    for index in range(1, len(alist)):

        currentvalue = alist[index]
        position = index

        while position > 0 and alist[position-1] > currentvalue:
            alist[position] = alist[position-1]
            position = position-1

        alist[position] = currentvalue


alist = [54, 26, 93, 17, 77, 31, 44, 55, 20]
insertion_sort(alist)
print(alist)
# the code sorts it by moving through list starting from beginining and keeps on moving the values to the left if the number to the left is smaller than in
