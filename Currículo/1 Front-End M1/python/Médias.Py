# ENTRADA DE DADOS
Nota1 = float(input("Digite sua Média Final: "))
Nota2 = float(input("Digite sua Média Final: "))
Nota3 = float(input("Digite sua Média Final: "))
Nota4 = float(input("Digite sua Média Final: "))

# PROCESSAMENTO DE DADOS
Final = (Nota1+Nota2+Nota3+Nota4) / 4

# SAÍDA
print("A Nota Final é: ", Final)

if Final < 60:
    print('Reprovado')
elif Final < 70:
    print('Mediano')
elif Final < 80:
    print('Muito Bom')
elif Final < 90:
    print('Ótimo')
else:
    print('Excelente')




