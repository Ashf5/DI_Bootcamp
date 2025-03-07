from utils import unzip_with_7z
from string import ascii_lowercase

zip_file_path = 'congrats.7z' # keep as is
dest_path = '.' # keep as is

find_me = '' # 2 letters are missing!
secret_password = find_me + 'bcmpda' 

# WRITE YOUR CODE BELOW
# ----------------------------------------

def try_code():

    letters1 = ascii_lowercase
    letters2 = ascii_lowercase
    for letter in letters1:
        for l in letters2:
            attempt = "".join([letter, l])
            
            cracked = unzip_with_7z(zip_file_path,dest_path, attempt)
            if cracked:
                print("Cracked")
                break

try_code()