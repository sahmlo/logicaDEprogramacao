import os
os.system("clear")

#Entrada

nome = input("Informe seu nome: ")
sexo = input("Informe o sexo (F ou M): ").upper()
estado_civil = input("Informe o estado civil: ")

if  sexo == "F" and estado_civil == "casada":
    ano_casada = input("Informe o ano de casada: ")
    print(f"{nome} , do sexo {sexo} , tem {ano_casada} anos de casada.")
    
else:
    print(f"{nome} , do sexo {sexo}.") 