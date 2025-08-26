import os
os.system("clear")

a = int(input("Digite um número: "))
operador = input("Digite a operação (+ - * /): ")
b = int(input("Digite um número: "))

#PROCESSAMENTO
match operador:
    case "+":
        resultado = a + b
    case "-":
        resultado = a - b
    case "*":
        resultado = a * b
    case "/":
        resultado = a / b
    case _:
        resultado = "Opção inválida"
#SAIDA
print(f"\nPrimeiro número: {a}")
print(f"Operação: {operador}")
print(f"Segundo número: {b}")
print(f"Resultado: {resultado}")