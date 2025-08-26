import os
os.system("clear")

nota_um = float(input('Informe sua primeira nota: '))
nota_dois = float(input('Informe sua segunda nota: '))

media = (nota_um + nota_dois) / 2

if media >= 6:
    print("APROVADO, PARABÉNS!!!")
elif media < 4:
    print("REPROVADO, TENTE PRÓXIMO ANO.")
elif media >= 4:
    print("RECUPERAÇÃO.")
