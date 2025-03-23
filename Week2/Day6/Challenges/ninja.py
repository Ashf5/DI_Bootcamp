
# exercise 1 

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number 
        self.call_history = [] 
        self.messages = []

    def call(self, other_phone, incoming=False):
        if incoming:
            call_log = f"{other_phone.phone_number} called {self.phone_number}" 
        else:
            call_log = f"{self.phone_number} called {other_phone.phone_number}" 
        self.call_history.append(call_log)

    def show_call_history(self):
        for listing in self.call_history:
            print(listing)

    def send_message(self, other_phone, message, incoming=False):
        if incoming:
            message_dict = {"to": self, "from": other_phone, "content": message}
        else:
            message_dict = {"to": other_phone, "from": self, "content": message}
        self.messages.append(message_dict)


    def show_outgoing_messages(self):
        for log in self.messages:
            if log["from"] == self:
                print(log) 

    def show_incoming_messages(self):
        for log in self.messages:
            if log["from"] != self:
                print(log)

    def show_messages_from(self, number):
        for message in self.messages:
            if message["from"].phone_number == number:
                print(message["content"]) 
    

my_phone = Phone("0515450200")
his_phone = Phone("0515490000")
my_phone.send_message(his_phone, "Hey there")
his_phone.send_message(my_phone, "What's up")
my_phone.send_message(his_phone, "Hey there", True)
my_phone.show_messages_from("0515490000")



        