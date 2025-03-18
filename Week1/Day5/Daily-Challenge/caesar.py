
choice = input("Enter 1 to encrypt, 2 to decrypt: ")
if choice == "1":
    text = input("Enter text you would like to encrypt: ")
    shift = input("Enter the amount of places you would like to shift by: ")
    cypher_text = ""
    for letter in text:
        cypher_text += chr(ord(letter) + int(shift))

    print(cypher_text)


else:
    text = input("Enter text you would like to decipher: ")
    shift = input("Enter the amount of places you would like to shift by: ")
    cypher_text = ""
    for letter in text:
        cypher_text += chr(ord(letter) - int(shift))

    print(cypher_text)