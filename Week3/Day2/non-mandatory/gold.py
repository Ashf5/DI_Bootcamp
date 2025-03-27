
# exercise 1



class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self._authenticated = False
        self.balance = balance 

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self._authenticated = True 
            print(f"Welcome {self.username}")


    def deposit(self, amount):
        if not self._authenticated:
            raise Exception("You must sign in")
        if amount <= 0:
            raise ValueError
        self.balance += amount 
        print("Deposit Successful")
        return self 

    def withdraw(self, amount):
        if not self._authenticated:
            raise Exception("You must sign in")
        if amount <= 0:
            raise ValueError
        self.balance -= amount 
        print("Money Withdrawn")
        return self 

    


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self._authenticated = False
        self.minimum_balance = minimum_balance 

    def withdraw(self, amount):
        if not self._authenticated:
            raise Exception("You must sign in")
        if self.balance - amount >= self.minimum_balance:
            self.balance -= amount 
            print("Money Withdrawn")
        else:
            raise ValueError("Not enough money. Sorry")
        return self





account = MinimumBalanceAccount("asher", "123", 100, 10)
account.authenticate("asher", "123")
account.withdraw(25)
# account.withdraw(70)

