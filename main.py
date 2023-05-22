
n = int(input("Enter number here: > "))

counter = 0
sum = 0


while range(counter, n):
    counter = counter + 1
    sum = sum + counter

print(sum)










# for x in range(0, counter):
#     sum = x + (x - 1)
#     counter = counter - 1
#     print(counter)








# # text = input("Enter the word to encrypt")
# # shift = 0

# # try:
# #     shift = int(input("Enter the shift code"))
# # except Exception as e:
# #     while e:
# #         print("Only an Integer is accepted")
# #         shift = int(input("Enter the shift code"))
    
# factor = 0


# def encode(input):
#     index = ord(input)
#     shift = 0
  
#     # if chr(index) == " ":
#     #     shift = 0
#     #     new_index = index + shift
#     # elif chr(index).isnumeric():
#     #     shift = 0
#     #     new_index = index + shift
#     # else:
#     #     if index > 26:
#     #         index = (index % 26)
#     #         new_index = index + shift
    
    
#     if index > 26:
#         index = (index % 26)
#         new_index = index + shift
        
        
#     return index
#     #return chr(new_index)


# text = 'Kolade is great'


# to_turple = text.split(" ")
# encrypted = ""


# for alph in text:
#     encrypted += encode(alph)
    
    
# print(encrypted)
