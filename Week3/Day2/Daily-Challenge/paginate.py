
from math import ceil

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items
        self.page_size = int(page_size) 
        self._total_pages = ceil(len(self.items) / self.page_size)
        self.current_page = 1
    
    def get_visible_items(self):
        start = (self.current_page - 1) * self.page_size
        visible = self.items[start: start + self.page_size]
        print(visible)
        return self

    def prev_page(self):
        self.current_page -= 1 
        if self.current_page < 1:
            self.current_page = 1
        return self

    def next_page(self):
        self.current_page += 1 
        if self.current_page > self._total_pages:
            self.current_page = self._total_pages 
        return self

    def first_page(self):
        self.current_page = 1 
        return self 

    def last_page(self):
        self.current_page = self._total_pages 
        return self

    def go_to_page(self, page_num):
        if page_num > self._total_pages:
            self.current_page = self._total_pages 
        elif page_num < 1:
            self.current_page = 1  
        else:
            self.current_page = page_num 
        return self

    



alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
p.get_visible_items().next_page().get_visible_items()
p.last_page().get_visible_items()
p.go_to_page(10).get_visible_items()