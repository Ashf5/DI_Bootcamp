
# exercise 1

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = dict()
for student in student_grades:
    student_averages[student] = sum(student_grades[student]) // len(student_grades[student])

print(student_averages)

student_letter_grades = dict()
for student, grade in student_averages.items():
    if grade >= 90:
        student_letter_grades[student] = "A"
    elif grade >= 80:
        student_letter_grades[student] = "B"
    elif grade >= 70:
        student_letter_grades[student] = "C"
    elif grade >= 60:
        student_letter_grades[student] = "D"
    else:
        student_letter_grades[student] = "F"

print(student_letter_grades)

# get class average
class_avg = sum(student_averages.values()) // len(student_grades)
print(class_avg)

for key, value in student_averages.items():
    print(f"{key}'s average grade is {value} which is a grade of {student_letter_grades[key]}")


# exercise 2
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

sum = 0
for item in sales_data:
    sum += item["price"]
print(sum)

customer_spending = dict()
for item in sales_data:
    if item["customer_id"] in customer_spending:
        customer_spending[item["customer_id"]] += item["price"]
    else:
        customer_spending[item["customer_id"]] = item["price"]

print(customer_spending)


for item in sales_data:
    item["total_price"] = item["price"] * item["quantity"]

print(sales_data)


high_value = [item for item in sales_data if item["total_price"] > 500]
print(high_value)

loyal_customers = dict()
for item in sales_data:
    if item["customer_id"] in loyal_customers:
        loyal_customers[item["customer_id"]] += 1
    else:
        loyal_customers[item["customer_id"]] = 1
        
loyal_customers = [customer for customer in loyal_customers if loyal_customers[customer] > 1 ]
print(loyal_customers)