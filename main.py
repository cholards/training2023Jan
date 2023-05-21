

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
    shift = 15
    def shifted(index, shift):
        if index > 26:
            index = (index % 26)
    
    new_index = index + shift
            
    return chr(new_index)


text = 'kolade is great.'

to_turple = text.split(" ")

for alph in text:
    print(encode(alph))
