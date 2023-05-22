
# text = input("Enter the word to encrypt")
# shift = 0

# try:
#     shift = int(input("Enter the shift code"))
# except Exception as e:
#     while e:
#         print("Only an Integer is accepted")
#         shift = int(input("Enter the shift code"))


def encode(input):
    index = ord(input)
    shift = 1
    new_index = index + shift

    # if chr(index) == " ":
    #     shift = 0
    #     new_index = index + shift
    if not chr(index).isalpha():
        shift = 0
        new_index = index + shift
    else:
        if new_index >= 90 and new_index < 97:
            new_index = 64 + shift


    # if index > 26:
    #     index = (index % 26)
    #     new_index = index + shift

    return (f"{input} index is {index}, ------- but transposed to {chr(new_index)} with index {new_index} ")
    #return chr(new_index)


text = 'Y'


# to_turple = text.split(" ")
# encrypted = ""


# for alph in text:
#     encrypted += encode(alph)
    
    
print(encode(text))
