import os
os.system("clear")

#Entrada

print("Escolha a opção de fruta \n1 - Morango\nAté 5Kg - nR$ 2,50 por Kg\nAcima de 5Kg - R$ 2,20 por Kg \n\n2 - Maça\nAté 5Kg - R$ 1,80 por Kg\nAcima de 5Kg - R$ 1,50 por Kg ")
fruta = int(input("\nDigite sua escolha (1 ou 2): "))

match fruta:
    case 1:
        quantidade_fruta = int(input("Escolha a quantidade comprada: "))
        preco_morango = quantidade_fruta * 2.50
        preco_morango2 = quantidade_fruta * 2.20
        desconto = (quantidade_fruta * 2.20) * 0.10
        if quantidade_fruta <= 5:
            print(f"O valor de {quantidade_fruta} KG de morango é R$ {preco_morango:.2f}")
        elif quantidade_fruta >= 10:
            print(f"O valor de {quantidade_fruta} KG de morango é R$ {quantidade_fruta-desconto:.2f}")
        elif quantidade_fruta > 5:
            print(f"O valor de {quantidade_fruta} KG de morango é R$ {preco_morango2:.2f}")

    case 2:
       quantidade_fruta = int(input("Escolha a quantidade comprada: "))
       preco_maca = quantidade_fruta * 1.80
       preco_maca2 = quantidade_fruta * 1.50
       desconto = (quantidade_fruta * 1.50) * 0.10
       if quantidade_fruta <= 5:
            print(f"O valor de {quantidade_fruta} KG de morango é R$ {preco_maca:.2f}")
       elif quantidade_fruta >= 10:
            print(f"O valor de {quantidade_fruta} KG de morango é R$ {quantidade_fruta-desconto:.2f}")
       elif quantidade_fruta > 5:
            print(f"O valor de {quantidade_fruta} KG de morango é R$ {preco_maca2:.2f}")