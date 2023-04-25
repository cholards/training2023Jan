
try: # Exception handling for values that the user enters
        value_one = input("Enter first value \n> ")
        value_two = input("Enter second value \n> ")
        one = float(value_one)
        two = float(value_two)
        
        if two != 0:
            # Prompt for user to choose operator
            operator = input("Enter operator (+, -, x or /) \n \n> ")
            print(f'{value_one, operator, value_two}')
            print (one / two)
        else:
            while two == 0 or two != int:
                value_two = input("Enter second value \n> ")
                two = float(value_two)
except Exception:
        print('''\nYou have entered and invalid input. Please run the program
again and ensure to insert a valid whole or decimal number \n\n''')
