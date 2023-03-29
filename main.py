# Type a long string and change every other charcter to capital

alphabets = "abcdefghijklmnopqrstuvwxyz"

# print(alphabets[0::2].upper())
alphabets_lenth = len(alphabets)-1

# for i in range(0, len(alphabets)):
#     if i%2 == 0:
#         print(alphabets[i])
#     else:
#        print(alphabets[i].upper())
        
# my_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
# double_list = [item * 2 for item in my_list]
# print(double_list)


my_dic = {"name": "Kolade", "surname": "Adelaiye", "age":22, "gender": "male"}

for keys, values in my_dic.items():
    print(f"{keys.upper()} : {values}")
    
print(my_dic.items())

import math

interest_type = ((input('''\n Investment \n 
- to calculate the amount of interest you'll earn on your investment bond \n 
- to calculate the amount you'll have to pay on a home loan \n \n 
                       
Enter either 'investment' or 'bond' from the menu above to proceed: \n> ''').upper()))

if interest_type == 'INVESTMENT' or interest_type == 'BOND':
    principal = int(input("Amount \n> "))
    rate = int(input("Percentage of Interest Rate(No need to add percentage sign (%)) \n> "))
    time = int(input("How many years? \n> "))
    interest = (input("Do you want Simple or compound interest? \n> ").lower())
    
    if interest == "simple":
            result = principal(1 + (rate/100) * time)
            print(result)
    elif interest == "compound":
        result = principal * math.pow((1 + (rate/100)),time)
        print(result)
    else:
        print(input("Please interest input can only be 'Simple' or 'Compound'"))  
else:
    print(f'Error!!! "{interest_type.capitalize()}" is not a valid interest type')
    
     
    
