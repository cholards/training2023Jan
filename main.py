profile_dict = {
    'name': 'Chris',
    'surname': 'Smith', 
    'age': 28, 
    'cell': '083 233 3242'
    }
print (profile_dict['surname']) # prints out 'Smith'
print (profile_dict.get('cell')) # prints out '083 233 3242'


keys = profile_dict.keys()
values = profile_dict.values()
print(keys)
print(values)