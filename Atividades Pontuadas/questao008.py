import os
os.system("clear")

#ENTRADA 

cor = str(input("G - Green\nB - Blue\nY - Yellow\nR - Red\nInforme a cor que deseja: ")).upper()

match cor:
    case "G":
        print("Esse CD custa R$ 10,00")
    case "B":
        print("Esse CD custa R$ 20,00")
    case "Y":
        print("Esse CD custa R$ 30,00")
    case "R":
        print("Esse CD custa R$ 40,00")
    case _:
        print("Opção Inválida.")