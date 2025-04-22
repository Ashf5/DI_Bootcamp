import psycopg2
import requests

link = "https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population"

data = requests.get(link)
json_data = data.json()

# Fill in postgres data
try:
    with open('/Users/fried/postgres_password/password.txt') as f:
        password = f.read()
except:
    print("Error getting password, please enter your own.")
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = password
DATABASE = 'HollyWood'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE )
cursor = connection.cursor()


# Get count to know which countries were already inserted
cursor.execute('SELECT COUNT(*) FROM countries')
num = cursor.fetchall()[0][0]


# get the data
for i in range(num, num + 10):
    country = json_data[i]['name']['common']
    capital = json_data[i]['capital'][0]
    flag = json_data[i]['flag']
    subregion = json_data[i]['subregion']
    population = json_data[i]['population']


    # insert into database 
    query = f"""
    INSERT INTO countries (name, capital, flag, subregion, population) VALUES ('{country}', '{capital}', '{flag}', '{subregion}', '{population}')
    """
    cursor.execute(query)
connection.commit()



connection.close()