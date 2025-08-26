import os
os.system("clear")

#Entrada

renda_mensal = float(input("Informe a renda mensal: "))
valor_emprestimo = float(input("Informe o valor do impréstimo: "))
valor_prestacao = int(input("Informe o valor da prestações: "))

emprestimo = renda_mensal * 10
prestacao = valor_emprestimo / valor_prestacao
desconto_prestacao = renda_mensal * 0.3

if valor_emprestimo <= emprestimo and valor_prestacao <= prestacao:
    print(f"Empréstimo Concedido.")
else:
    print(f"Não Concedido.")