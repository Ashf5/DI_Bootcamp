
x = int(input('Enter the Number:')) 
sum = 0

# get all divisors
for i in range(x-1, 0, -1):
    if x % i == 0:
        sum += i

# check if sum of divisors is equal to original number
if sum == x:
    print(True)
else:
    print(False)