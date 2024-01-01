import os
from os import walk

# make sure no special chars in the name eg ()

mypath = "./baby/"
name = "baby"
files = []

for (dirpath, dirnames, filenames) in walk(mypath):
    files.extend(filenames)
    break

counter = 1
for i in files:
    current_file = os.path.join(mypath, i)
    new_file = os.path.join(mypath, f"{name}{counter}.jpeg")
    print(f"mv {current_file} {new_file}")
    os.system(f"mv {current_file} {new_file}")
    counter += 1
