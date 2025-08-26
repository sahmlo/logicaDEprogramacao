import os
os.system("clear")

#ENTRADA

combustivel = input("A - Álcool\nAté 25L, é 2% de desconto.\nAcima de 25L, é 4% de desconto.\n\nG - Gasolina\nAté 25L, é 3% de desconto.\nAcima de 25L, é 5% de desconto.\n\nInforme a opção escolhida: ").upper()
litros = int(input("Informe os litros: "))

alcool = 3.79
gasolina = 6.59
preco_alcool = litros * alcool
preco_gasolina = litros * gasolina

match combustivel:
    case "A":
        if litros <= 25:
            calculo_desconto = preco_alcool * 0.02
            total_pagar = preco_alcool - calculo_desconto
            print(f"O desconto foi de 2% R$ {calculo_desconto:.2f} - O valor total a pagar é R$ {total_pagar:.2f}")
        else:
           calculo_desconto2 = preco_alcool * 0.04
           total_pagar2 = preco_alcool - calculo_desconto2
           print(f"O desconto foi de 4% R$ {calculo_desconto2:.2f} - O valor total a pagar é R$ {total_pagar2:.2f}")
    case "G":
        if litros <= 25:
            calculo_desconto3 = preco_gasolina * 0.03
            total_pagar3 = preco_gasolina - calculo_desconto3
            print(f"O desconto foi de 3% R$ {calculo_desconto3:.2f} - O valor total a pagar é R$ {total_pagar3:.2f}")
        else:
           calculo_desconto4 = preco_alcool * 0.05
           total_pagar4 = preco_gasolina - calculo_desconto4
           print(f"O desconto foi de 5% R$ {calculo_desconto4:.2f} - O valor total a pagar é R$ {total_pagar4:.2f}")
    case _:
            print(f"Opção Inválida. Tente Novamente.")