''' This program accepts number inputs. The inputs must be either \nwhole or decimals
it the computes the average of the inputs and displays the result rounded to 2 decimal places.
'''

print("\nPLEASE NOTE: All the numbers you enter will add-up until you enter \n \"-1\" \n")


# initialise all values to be used for calculations
user_input = 0
sum = 0
count = 0
average = 0


# Loop throungh inputs until user enters a valid number to add to the current value
while not user_input or user_input == "-1":  
    user_input = input("\nInput cannot be empty or \"-1\" \n> Enter a valid number\n> ") 

        # This portion of the code adds up each valid input and computes the average until user enters the breaking charcter (-1)
    while user_input != '-1':
        
        
        count = count + 1 # increments the count by 1 on each iteration
        
        sum = float(user_input) + float(sum) # Adds the last valid input to the computed sum of the previous inputs
        
        average = round((sum/count), 2) # Compute the average of inputes
        
        user_input = input("Enter another number or enter \"-1\" to finish\n> ") # Prompt user for next input
        
        if user_input == '-1':# Loop until breaking condition is met
            break
        
        
    print(f"\nYou suplied {str(count)} inputs\nThe average is {str(average)} \n")
    break
    

    