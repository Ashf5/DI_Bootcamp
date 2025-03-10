my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum"""
print(len(my_text))    

sentence_count = 0
while True:
    new_sentence = input("Enter longest sentence without letter A\n")
    if "a" in new_sentence:
        print("You lose!!")
        break
    else:
        new_sentence_count = len(new_sentence)
        if new_sentence_count > sentence_count:
            sentence_count = new_sentence_count
            print(f"Congrats!! You created a longer sentence. Your record is now {new_sentence_count}")
