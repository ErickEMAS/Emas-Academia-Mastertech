class Mamiferos():
    patas = 4
    olhos = 2

    def __init__(self, pelo, especie, rabo, cor):
        self.pelo = pelo
        self.especie = especie
        self.rabo = rabo
        self.cor = cor

    def comer():
        print("Já comi")

    def dormir():
        print("Dormir")

    def fazer_som():
        print("AHHHHHHHH!")

doguinho = Mamiferos("True", "Dog", "True", "Caramelo")
gatihno =  Mamiferos("curto", "Cat", "True", "preto")

print(doguinho.cor)