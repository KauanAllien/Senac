#Entrada de dados
altura = float(input("Digite sua altura: "))
peso = float(input("Digite seu peso: "))

# Processamento de dados
imc = peso / ( altura * altura)

# Saída
print(imc)

if imc < 15:
    print('Muito Magro')
elif imc < 18.5:
    print('Magreza Leve')
elif imc < 24.9:
    print('Peso Normal')
elif imc <29.9:
    print('Acima do Peso')
elif imc < 39.9:
    print('Obesidade I')
elif imc < 40:
    print('Obesidade II')
else:
    print('Obesidade III')




