# This Cypher encrypts to every upper case and lower case alphabet to the 15th position.
# It leaves every digit, symbol, special character and space the same

# Collect user input text to be encrypted
shift = 0
text = "This  is my Cypher encryption algorithm & I l0ve it 2 mucH '100%'"

# Define the function that will encrypt the text input
def encode(x, y):
    encrypted = ""

    # Define the uppercase and lower case space range of alphabets from the universal ASCII  character set in dictionaries
    upper = {ascii:chr(ascii) for ascii in range(65,91)}
    lower = {ascii:chr(ascii) for ascii in range(97,123)}

    # Extract all alphabets into lists to ensure each of the 26 alphabets is represented in upper case and lower case
    caps =  list(upper.values())
    lows =  list(lower.values())


    for i in x:
        if chr(ord(i)) in caps:
            shifted =  (caps.index(i) + y) % 26
            encrypted += caps[shifted]
        elif chr(ord(i)) in lows:
            shifted =  (lows.index(i) + y) % 26
            encrypted += lows[shifted]
        else:
            encrypted += i

    return encrypted

# Function call with text input and shift value
print(encode(text,shift))