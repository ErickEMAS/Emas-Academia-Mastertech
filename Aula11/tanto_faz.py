name = input("Digite um nome: ").lower()
inteligente = input("Você acha essa pessoa inteligente?: ").lower()


if name == "erick":
    print(name + "_lindo_inteligente = True")
else:
    print(name + "_lindo_inteligente = False")

numero = 0

while numero < 5:
    print(numero)
    numero = numero + 1

names = [" ", "Erick", "Alexandre", "Mendes", "Souza"]

for item in names:
    print(item)