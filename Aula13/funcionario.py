nome_funcionario = input("Digite o nome do funcionario que sera feito o calculo: ")
horas_funcionario = int(input("Digite a quantidade de horas trabalha por mes, apenas numero: "))
valor_hora = float(input("Digite o valor que ganha por hora: "))

salario = valor_hora * horas_funcionario

print(nome_funcionario, "recebe", salario, "por", horas_funcionario, "horas trabalhadas")