# ALGORITMO QUE FAZ TABUADA DE NÚMERO
numero = int(input("insira o número para a Tabuada: "))
def multiplicar(numero):
    print("teste", 2)
    for i in range(0,11):
        print(numero,"x", i ," = ", numero* i )

multiplicar(numero)

def verificarPar(numero):
    if numero % 2 == 0:
        print("É um número par")
    else:
        print("É um número impar")

verificarPar(numero)