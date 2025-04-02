
import requests 
import time 

def download(url):
    start_time = time.time()
    data = requests.get(url)
    print(f"It took {time.time() - start_time} seconds to download")

download("https://www.ynetnews.com/category/3083")