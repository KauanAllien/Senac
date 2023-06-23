# entrada de dados
PreçoAlcool  = float(input("insira o valor do Alcool: " ))
PreçoGasolina = float(input("Insira o valor da Gasolina: "))

# processamento
resultado = PreçoAlcool / PreçoGasolina

# saída 
print(resultado)

if resultado > 0.7:
    print("abasteça com Gasolina")
else:
    print("abasteça com Alcool")
    

