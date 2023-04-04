'''This is a program that allows the user to access two
different financial calculators: an investment calculator and a home loan
repayment calculator'''

import math # import math module

# Get input on interest type from user
interest_type = ((input('''\n Investment \n 
- to calculate the amount of interest you'll earn on your investment bond \n 
- to calculate the amount you'll have to pay on a home loan \n \n 

Enter either 'investment' or 'bond' from the menu above to proceed: \n> ''').upper())) # Input casting to upper is done to ensure consistency of input


# Condition if user inputs "Investment" or "Bond"
if interest_type == 'INVESTMENT': # Action to calculate investment if condition is met
    
    # Take inputs to calculate investment
    principal = int(input("Amount \n> "))
    rate = int(input("Percentage of Interest Rate(No need to add percentage sign (%)) \n> "))
    time = int(input("How many years? \n> "))
    interest = (input("Do you want Simple or Compound interest? \n> ").lower())
    
    
    
    # Nested conditional actions for simple and compound interest options
    if interest == "simple": # Action to calculate simple interest if condition is met
            result = principal * (1 + ((rate/100) * time))
            print(result)
    elif interest == "compound": # Action to calculate compound interest if condition is met
        result = principal * math.pow((1 + (rate/100)),time)
        print(round(result, 2))
    else: # Default action if user inputs neither 'Simple' or 'Compound'
        print(input("Interest input can only be 'Simple' or 'Compound'"))
        # End of nested conditional actions
        
        
        
elif interest_type == 'BOND': # Action to calculate bond if condition is met
    
    # Take inputs to calculate bond
    current_house_vaulue = int(input("Current House Value \n> "))
    interest_rate = int(input("Interest Rate(No need to add percentage sign (%)) \n> "))
    repayment_months = int(input("How many months you plan to take to repay the bond. ? \n> ")) 
    rate = (interest_rate/100)/12
    bond = (rate * current_house_vaulue)/(1 - (1 + rate) **(-repayment_months))
    print(round(bond,2))
    
    # Default action if user inputs neither 'Investment' or 'Bond'
else: 
    print(f'Error!!! "{interest_type.capitalize()}" is not a valid interest type')
    
     
    my_list = [1,2,3,4,5,7,8,9,10,11,12]
    
    for i in range(len(my_list)):
        print("Hellos")
        
        
        
        keys_list = ['A', 'B', 'C']
values_list = ['blue', 'red', 'bold']

#There are 3 ways to convert these two lists into a dictionary
#1- Using Python's zip, dict functionz
dict_method_1 = dict(zip(keys_list, values_list))

#2- Using the zip function with dictionary comprehensions
dict_method_2 = {key:value for key, value in zip(keys_list, values_list)}

#3- Using the zip function with a loop
items_tuples = zip(keys_list, values_list) 
dict_method_3 = {} 
for key, value in items_tuples: 
    if key in dict_method_3: 
        pass # To avoid repeating keys.
    else: 
        dict_method_3[key] = value
        
        
        
        def merge(*args, missing_val = None):
    #missing_val will be used when one of the smaller lists is shorter tham the others.
#Get the maximum length within the smaller lists.
  max_length = max([len(lst) for lst in args])
  outList = []
  for i in range(max_length):
    result.append([args[k][i] if i < len(args[k]) else missing_val for k in range(len(args))])
  return outList