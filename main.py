
# text = input("Enter the word to encrypt")
# shift = 0

# try:
#     shift = int(input("Enter the shift code"))
# except Exception as e:
#     while e:
#         print("Only an Integer is accepted")
#         shift = int(input("Enter the shift code"))


# def encode(input):
#     index = ord(input)
#  shift = 1


#     if not chr(index).isalpha():
#         shift = 0
#         new_index = index + shift
#     else:
#         if index >= 90 and index < 96:
#             new_index = index
#             new_index = index + shift
#             print(f"MY NEW INDEX IS {new_index}")
#         elif index >= 122 and index <= 127:
#             new_index = index - 25
#         # else:
#             # print(f"{input} is an Unknown character")


#     return (f"{input} index is {index}, ------- but transposed to {chr(new_index)} with index {new_index} ")
#     # return chr(new_index)


# text = 'This is a 3 boo-bob sentence!'
# text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
# text = "Z"
# lis = list(text)
# encrypted =""

# for l in lis:
#     encrypted += encode(l)

# print(encrypted)
# print(encode(text))

upper = {ascii:chr(ascii) for ascii in range(65,91)}
lower = {ascii:chr(ascii) for ascii in range(97,123)}
digit = {ascii:chr(ascii) for ascii in range(48,58)}


print (digit)

