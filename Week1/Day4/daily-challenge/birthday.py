
birthday = input("Enter your birthday DD/MM/YYYY: ").split("/")[-1]
age = 2025 - int(birthday)

candles = age % 10
sides = 8 - candles // 2

print("     " + "_" * sides + "i" * candles + "_" * sides + "    ")
print("    |   :H:a:p:p:y:  |  ")
print("    |                |  ")
print("__________________________")
print("|^^^^^^^^^^^^^^^^^^^^^^^^^|")
print("|    :B:i:r:t:h:d:a:y:    |")
print("|                         |")
print("~~~~~~~~~~~~~~~~~~~~~~~~~~")