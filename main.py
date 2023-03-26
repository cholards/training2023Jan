# Type a long string and change every other charcter to capital

alphabets = "abcdefghijklmnopqrstuvwxyz"

# print(alphabets[0::2].upper())
alphabets_lenth = len(alphabets)-1

for i in range(0, len(alphabets)):
    if i%2 == 0:
        print(alphabets[i])
    else:
       print(alphabets[i].upper())
        
my_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
double_list = [item * 2 for item in my_list]
print(double_list)


