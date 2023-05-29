# # This Cypher encrypts to every upper case and lower case alphabet to the 15th position.
# # It leaves every digit, symbol, special character and space the same

# # Collect user input text to be encrypted
# shift = 15
# text = "This  is my Cypher encryption algorithm & I'm l0vin it 2 mucH '100%'"

# # Define the function that will encrypt the text input
# def encode(x, y):

#     # Define and empty string to be used for the encrypted text
#     encrypted = ""

#     # Define the uppercase and lower case space range of alphabets from the universal ASCII  character set in dictionaries
#     upper = {ascii:chr(ascii) for ascii in range(65,91)}
#     lower = {ascii:chr(ascii) for ascii in range(97,123)}

#     # Extract all alphabets into lists to ensure each of the 26 alphabets is represented in upper case and lower case
#     caps =  list(upper.values())
#     lows =  list(lower.values())

# # Loop over the input text input to apply the encryption algorithm
#     for i in x:
#         ######## THIS PART OF THE CODE DEFINES THE REAL LOGIC OF SHIFTING IF NECESSARY CRITERIA IS MET ########
#         # 1. Check if the input text is in the alphabets list before the shifted value is added
#         # 2. Using the modulus operator, ensure that the index of the list (26 Alphabets)is not exceeded
#         if chr(ord(i)) in caps:
#             shifted =  (caps.index(i) + y) % 26
#             encrypted += caps[shifted]
#         elif chr(ord(i)) in lows:
#             shifted =  (lows.index(i) + y) % 26
#             encrypted += lows[shifted]
#         # Default action if the input character in not an alphabet
#         else:
#             encrypted += i

#     return encrypted

# # Function call with text input and shift value
# print(encode(text,shift))



###### TASK 1 #####

def add_prefix_un(word):
    return 'un' + word

# print(add_prefix_un("happy"))


###### TASK 2 #####

def make_word_groups(vocab_words):
    prefix = vocab_words[0]
    rest_of_words = vocab_words[1:]
    new_words = [prefix]
    
    for word in rest_of_words:
        new_words.append(prefix+word)
    
    return " :: ".join(new_words)


# print(make_word_groups(['en', 'close', 'joy', 'lighten']))


###### TASK 3 #####

def remove_suffix_ness(word):
    nu_word = ""
    if word[-5] == "i":
        nu_word = word[:-5] + "y"
    else:
        nu_word = word[:-4]
    
    return nu_word
 
# print(remove_suffix_ness("sadness"))
# print(remove_suffix_ness("heaviness"))


###### TASK 4 #####

def adjective_to_verb(word, pos):
    x = word.split(" ")
    nu_word = x[pos] + 'en'
    
    return nu_word


print(adjective_to_verb('I need to make that bright.', -1 ))