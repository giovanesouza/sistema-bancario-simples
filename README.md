# 🏦 Sistema de Banco simples com Javascript e NodeJS

Este é um projeto de sistema bancário simples desenvolvido em JavaScript no ambiente Node.js. A aplicação permite a criação de contas bancárias, depósitos, saques e aplicação de juros ou rendimento em contas correntes e poupança.

> Este projeto foi desenvolvido como parte avaliativa do curso Introdução a Back-end development, unidade 3, da iTalets.

## 🛠️ Tecnologias Utilizadas 
- `Node.js`: Ambiente de execução JavaScript server-side.
- `JavaScript`: Linguagem de programação.
- `prompt-sync`: Biblioteca para entrada de dados via terminal.

## 🚀 Funcionalidades
- `Criação de Conta`: Permite ao usuário criar uma conta corrente ou poupança.
- `Depósito`: Realiza depósitos em uma conta existente.
- `Saque`: Permite saques desde que haja saldo suficiente.
- `Verificação de Saldo`: Exibe o saldo atual da conta.
- `Aplicação de Juros/Rendimento`: Aplica juros para contas correntes e rendimento para contas poupança.


## 📝 Como Utilizar o Projeto 
1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/giovanesouza/sistema-bancario-simples.git
cd sistema-bancario-simples
```

2. Instale as dependências necessárias:

```bash
npm i
```

3. Execute o projeto:

```bash
npm run start:dev
```

Utilize o menu interativo para navegar pelas funcionalidades da aplicação:

```bash
============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
```

## ✅ Resultados

### Permissão negada à depósito, saque, saldo e aplicação de juros/rendimento quando não houver conta

```bash
============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 2
❌ Você não possui conta cadastrada.
Cadastre-se para realizar depósitos.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 3
❌ Você não possui conta cadastrada.
Cadastre-se para realizar saques.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 4
❌ Você não possui conta cadastrada.
Cadastre-se para visualizar saldo.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 5
❌ Você não possui conta cadastrada.
Cadastre-se e realize depósitos para aplicar juros ou rendimento.
```

### Criação de conta - validações
> O teste foi realizado com a `ContaCorrente`, mas também funciona com a Poupança. 

```bash
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 1
Escolha o tipo da conta: [cc = 1 | cp = 2] => a
❌ Opção inválida!
Vamos tentar de novo.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 1
Escolha o tipo da conta: [cc = 1 | cp = 2] => 8
❌ Opção inválida!
Vamos tentar de novo.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 1
Escolha o tipo da conta: [cc = 1 | cp = 2] => 1
Nome do titular: 5
❌ Nome inválido!
Informe apenas letras - mín. 3 caracteres.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 1
Escolha o tipo da conta: [cc = 1 | cp = 2] => 1
Nome do titular: Giovane
======= DADOS DA CONTA =======
ContaCorrente { titular: 'Giovane', saldo: 0, juros: 0.02 }
```

### Depósito - R$ 500

```bash
============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 2
Valor para DEPÓSITO: 500
=============================================
-- DEPÓSITO
💵 Depósito de R$ 500.00 realizado com sucesso!
```

### Saque - R$ 100

```bash
============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 3
Valor para SAQUE: -1
❌ Valor inválido!
⚠️ Informe um valor positivo e diferente de zero.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 3
Valor para SAQUE: a
❌ Valor inválido!
⚠️ Informe apenas valores reais.

============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 3
Valor para SAQUE: 100
=============================================
-- SAQUE
💵 Saque de R$ 100.00 realizado com sucesso!
```

### Saldo - R$ 400 (500 - 100)

```bash
============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 4
=============================================
-- SALDO
💵 Seu saldo atual é: R$ 400.00
```


### Juros (ContaCorrente - 0,02 = 2%)

```bash
============ MENU ============
1. Criar conta
2. Depositar
3. Sacar
4. Ver saldo
5. Aplicar juros/rendimento
6. Sair
===============================
Escolha uma opção: 5
=============================================
-- JUROS APLICADOS (VALORES)
Valor de juros: R$ 8.00
Saldo com juros: R$ 408.00
```
