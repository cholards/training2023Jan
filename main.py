
try: # Exception handling for values that the user enters
        value_one = input("Enter first value \n> ")
        value_two = input("Enter second value \n> ")
        one = float(value_one)
        two = float(value_two)
        
        # Prompt for user to choose operator
        operator = input("Enter operator (+, -, x or /) \n \n> ")
        print(f'{value_one, operator, value_two}')
        print (one / two)
except Exception:
        print("Please insert a valid whole or decimal number and begin again")
