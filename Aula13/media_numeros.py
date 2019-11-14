quantidade = int(input("Quantos número voce quer saber a media? "))
i = 0
media = 0

while i < quantidade:
    num = int(input("Digite o numero: "))
    media += num
    i += 1

media = media / quantidade
print("A media dos", quantidade, "digitado é", media)
