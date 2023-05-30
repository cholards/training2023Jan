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

# Function adds the "un" prefix to any input text
def add_prefix_un(word):
    return 'un' + word

# print(add_prefix_un("happy"))




###### TASK 2 #####

# function takes in a list and prefixes all words with the first item in list
def make_word_groups(vocab_words):
    
    # Select the first item on the list and assign to a variable "prefix"
    prefix = vocab_words[0]
    
    # Exclude the first item and assign all other items to a variable
    rest_of_words = vocab_words[1:]
    
    # Create new list and assign the prefix word as first item
    new_words = [prefix]
    
    # Loop over the list of the other words and append to
    # the new list while concatenating with prefix-item
    for word in rest_of_words:
        new_words.append(prefix+word)
    
    # Final output to present the new wordsß joined with the "::" character
    nu_words = " :: ".join(new_words)

    return nu_words


# print(make_word_groups(['en', 'close', 'joy', 'lighten']))




###### TASK 3 #####

# Takes in a word as input and returns the root word without
# the "ness" suffix where necessary
def remove_suffix_ness(word):
    # Define a variable for the new word to  be created and assign empty string
    nu_word = ""
    
    # Create condition to use in determining if the word ends with
    # a "y" or not using the fifth character from the end
    if word[-5] == "i":
        # Remove the "ness" and add a "y"
        nu_word = word[:-5] + "y"
    else:
        # Remove the "ness"
        nu_word = word[:-4]

    return nu_word

# print(remove_suffix_ness("sadness"))
# print(remove_suffix_ness("heaviness"))




###### TASK 4 #####

# Function takes a sentence and an index and returns extracted adjective as a verb
def adjective_to_verb(word, pos):
    
    # Split the words in the sentence at the spaces
    x = word.split(" ")
    # Use the index position argument to extract the word to to return and concatenate with "en"
    nu_word = x[pos] + 'en'
    
    # Strip any fullstops from the word to be returned
    nu_word = nu_word.replace('.','')
    
    return nu_word


# print(adjective_to_verb('I need to make that bright.', -1 ))