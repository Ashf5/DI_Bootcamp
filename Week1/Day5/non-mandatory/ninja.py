
# exercise 1
cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars = cars.split(",")
print(len(cars))
cars.sort(reverse=True)
print(cars)

print(len([car for car in cars if "o" not in car]))
print(len([car for car in cars if "i" not in car]))

cars = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars = set(cars)
for car in cars:
    print(car, end=", ")
print("")

print(len(cars))