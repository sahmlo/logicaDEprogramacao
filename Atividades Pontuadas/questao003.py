import os
os.system("clear")

#Entrada

a = int(input("Infome o primeiro número: "))
b = int(input("Infome o segundo número: "))

if a == b:
    c = a + b
    print(f"{a} + {b} = {c}")
else:
    c = a * b
    print(f"{a} * {b} = {c}")