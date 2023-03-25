# Type a long string and change every other charcter to capital

alphabets = "abcdefghijklmnopqrstuvwxyz"

# print(alphabets[0::2].upper())
alphabets_lenth = len(alphabets)-1

for i in range(0, len(alphabets)):
    if i%2 == 0:
        print(alphabets[i])
    else:
        print(alphabets[i].upper())
