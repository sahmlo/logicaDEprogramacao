import os
os.system("clear")

#ENTRADA

produto = input("Informe o produto: ")
quantidade = int(input("Informe a quantidade: "))
preco = float(input("Informe o preço: "))

total = quantidade * preco

#SOLICITANDO DADOS

if quantidade <= 5:
    desconto = total * 0.02
    print(f"\nFinalizando Compra: \nProduto: {produto} \nQuantidade: {quantidade} \nPreço: R$ {preco:.2f} \nTotal: R$ {total:.2f} \nDesconto: R$ {desconto:.2f} \nTotal à Pagar: R$ {total-desconto:.2f}")
elif quantidade <= 10:
    desconto = total * 0.03
    print(f"\nFinalizando Compra: \nProduto: {produto} \nQuantidade: {quantidade} \nPreço: R$ {preco:.2f} \nTotal: R$ {total:.2f} \nDesconto: R$ {desconto:.2f} \nTotal à Pagar: R$ {total - desconto:.2f}")
else:
    desconto = total * 0.05
    print(f"\nFinalizando Compra: \nProduto: {produto} \nQuantidade: {quantidade} \nPreço: R$ {preco:.2f} \nTotal: R$ {total:.2f} \nDesconto: R$ {desconto:.2f} \nTotal à Pagar: R$ {total - desconto:.2f}")