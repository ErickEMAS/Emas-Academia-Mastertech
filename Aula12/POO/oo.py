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

class Gatinho(Mamiferos):
    def __init__(self, pelo, especie, rabo, cor, bigode):
        super().__init__(pelo, especie, rabo, cor)
        self.bigode = bigode

    def fazer_som(self):
        print("Te Quiero")

doguinho = Mamiferos("True", "Dog", "True", "Caramelo")
gatihno =  Mamiferos("curto", "Cat", "True", "preto")
catinho = Gatinho("Curto", "Tanto faz", True, "Purple", False)

doguinho.fazer_som()
print(doguinho.cor)
print("")

print(catinho.cor)
print(catinho.especie)

catinho.fazer_som()
catinho.comer()