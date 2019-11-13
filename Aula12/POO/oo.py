class Mamiferos():
    patas = 4
    olhos = 2

    def __init__(self, pelo, especie, rabo, cor):
        self.pelo = pelo
        self.especie = especie
        self.rabo = rabo
        self.cor = cor

    def comer(self):
        print("Já comi")

    def dormir(self):
        print("Dormir")

    def fazer_som(self):
        print("AHHHHHHHH!")

doguinho = Mamiferos("True", "Dog", "True", "Caramelo")
gatihno =  Mamiferos("curto", "Cat", "True", "preto")

doguinho.fazer_som()
print(doguinho.cor)