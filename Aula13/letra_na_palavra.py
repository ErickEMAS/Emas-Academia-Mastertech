palavra = input("Digite uma palavra: ")
letra = input("Digite uma letra: ")
num_res = 0

for item in palavra:
    if item == letra:
        num_res += 1

print("temos", num_res, "vezes a letra", letra, "na palavra", palavra)