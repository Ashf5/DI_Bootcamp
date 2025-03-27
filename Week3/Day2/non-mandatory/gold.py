
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


class ATM:
    def __init__(self, account_list, try_limit):
        if any(not isinstance(item, BankAccount) for item in account_list):
            print("Not a item")
            raise ValueError("Contains non bank account")
        if try_limit <= 0:
            raise ValueError("Must have a positive try limit")
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            answer = input("Please enter\n1: Log In\n2: Exit")
            try:
                answer = int(answer)
            except ValueError:
                print("Please enter a number")
                continue
            if answer == 1:
                while self.current_tries < self.try_limit:
                    username = input("Enter username: ")
                    password = input("Enter password: ")
                    if not self.log_in(username, password):
                        print("Incorrect information")
                    else:
                        return
                print("You have reached the max attempts.")
                return
            else:
                break

    def log_in(self, username, password):
        """
        This function will return True if authentication was successful and False if wasn't.
        If authentication was successful it will coll show_account_menu and then return True.
        """
        for item in self.account_list:
            if item.username == username and item.password == password:
                self.show_account_menu(item)
                return True
        self.current_tries += 1
        return False

    def show_account_menu(self, account):
        while True:
            choice = input("1: Deposit\n2: Withdraw\n3: Exit")
            if choice == "1":
                amount = input("Enter your deposit amount: ")
                try:
                    amount = int(amount)
                except ValueError:
                    print("Enter a valid number")
                    continue
                account.deposit(amount)
            elif choice == "2":
                amount = input("Enter the amount you'd like to withdraw: ")
                try:
                    amount = int(amount)
                except ValueError:
                    print("Enter a valid number")
                    continue
                account.withdraw(amount)
            else:
                return


a = BankAccount("abc", "123", 30)

account = MinimumBalanceAccount("asher", "123", 100, 10)
account.authenticate("asher", "123")
account.withdraw(25)

account_list = [a, account]
atm = ATM(account_list, 5)
# account.withdraw(70)
