
import requests  # type: ignore
import json
import urllib.parse


# exercise 2

url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
limited_url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10"

def return_emojis(url):
    result = requests.get(url)
    if result.status_code == 200:
        return result.json()


def return_tall(url):
    result = requests.get(url)
    if result.status_code == 200:
        json_data = result.json()

        items = []
        for item in json_data["data"]:
            if int(item["images"]["original"]["height"]) >= 100:
                items.append(item)
        return items
                
def fetch_ten(url):
    result = requests.get(url)
    if result.status_code == 200:
        json_data = result.json()

        items = []
        for item in json_data["data"]:
            items.append(item)
        return items



print(len(return_tall(url)))
print(len(fetch_ten(limited_url)))


# exercise 3

def search():
    query = input("Enter your search query: ")
    url = f"https://api.giphy.com/v1/gifs/search?{urllib.parse.urlencode({'q': query})}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    print(url)
    data = requests.get(url)
    json_data = data.json()
    if len(json_data['data']) == 0:
        url = "https://api.giphy.com/v1/gifs/trending/api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
        json_data = requests.get(url).json()
        return json_data
    return json_data


with open("emoji.json", "w") as f:
    json.dump(search(), f)