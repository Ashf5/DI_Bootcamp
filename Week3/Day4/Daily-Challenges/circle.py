
from math import pi

class Circle:
    def __init__(self, radius):
        self.radius = radius
        self.diameter = radius * 2 

    # Print the attributes.
    def __str__(self):
        return f"This circle has a radius of {self.radius}, a diameter of {self.diameter}, and an area of {self.area()}"

    # Allow adding to circles together, return a new circle.
    # Not sure how I should add the two circles, by area or add the radius. I assume radius because that's how the Circle is initialized.
    def __add__(self, other):
        return Circle(self.radius + other.radius)

    # Overload the Boolean operators
    def __lt__(self, other):
        return self.radius < other.radius 
    def __gt__(self, other):
        return self.radius > other.radius 
    def __eq__(self, other):
        return self.radius == other.radius
    

    # compute the area
    def area(self):
        """
        Returns the area of the circle.
        """
        return pi * (self.radius ** 2)





circle = Circle(6)
circle2 = Circle(6)
circle3 = Circle(9)
li = [circle, circle2, circle3]
li.sort()
for i in li:
    print(i)