const prompt = require("prompt-sync")();
const ContaCorrente = require("./ContaCorrente");
const ContaPoupanca = require("./ContaPoupanca");

let conta = null;

do {
    // Inicia o menu
    menu();

    let opc = prompt("Escolha uma opção: "); // guarda a opc de interação por meio do MENU
    let titular; // guarda o nome do titular
    let valor; // utilizada para guardar o valor das operações de depósito e saque

    switch (opc) {
        case "1":
            let tipoConta = +prompt("Escolha o tipo da conta: [cc = 1 | cp = 2] => ");

            // Verifica se o valor informado acima é um número
            if (typeof (tipoConta) === 'number' && tipoConta === 1 || tipoConta === 2) {
                titular = prompt("Nome do titular: ");

                // Cria a conta apenas se for passado uma string
                if (verificarNomeTitular(titular)) {
                    // Cria a conta com base na opção e nome informados acima
                    switch (tipoConta) {
                        case 1:
                            conta = new ContaCorrente(titular.trim()); // Cria ContaCorrente
                            break
                        case 2:
                            conta = new ContaPoupanca(titular.trim()); // Cria ContaPoupança
                            break
                    };

                    // Imprime as informações da conta criada
                    console.log("======= DADOS DA CONTA =======");
                    console.log(conta);
                } else console.log("❌ Nome inválido!\nInforme apenas letras - mín. 3 caracteres.\n");
            } else {
                console.log("❌ Opção inválida!\nVamos tentar de novo.\n");
                continue;
            };

            break;
        case "2":
            // Verifica se a conta existe
            if (contaExiste()) {
                try {
                    valor = parseFloat(prompt("Valor para DEPÓSITO: "));
                    conta.depositar(valor);
                } catch (error) {
                    console.log(error.message)
                }
                continue;
            } else console.log(`❌ Você não possui conta cadastrada.\nCadastre-se para realizar depósitos.\n`);

            break;
        case "3":
            // Verifica se a conta existe
            if (contaExiste()) {
                try {
                    // Verifica se tem saldo - só permite realizá-lo se saldo for positivo e diferente de 0
                    if (conta.saldo != 0) {
                        valor = parseFloat(prompt("Valor para SAQUE: "));
                        conta.sacar(valor);
                    } else console.log(`❌ Você não possui saldo disponível para saques.\n`);
                } catch (error) {
                    console.log(error.message);
                };
                continue;
            } else console.log(`❌ Você não possui conta cadastrada.\nCadastre-se para realizar saques.\n`);
            break;
        case "4":
            // Permite exibir saldo apenas se houver uma conta aberta
            if (contaExiste()) conta.verSaldo();
            else console.log(`❌ Você não possui conta cadastrada.\nCadastre-se para visualizar saldo.\n`);
            break;
        case "5":
            /*
                Só aplica juros ou rendimento se a conta existir. 
                Ou seja, se o usuário criar uma conta antes de executar este comando
            */
            if (contaExiste()) {
                if (conta instanceof ContaCorrente) conta.aplicarJuros();
                if (conta instanceof ContaPoupanca) conta.aplicarRendimento();
            } else console.log(`❌ Você não possui conta cadastrada.\nCadastre-se e realize depósitos para aplicar juros ou rendimento.\n`);
            break;
        case "6":
            console.log("Saindo...\n");
            return;
        default:
            console.log("❌ Opção inválida.\n");
            menu();
    };

} while (true);


function menu() {
    console.log("============ MENU ============");
    console.log("1. Criar conta");
    console.log("2. Depositar");
    console.log("3. Sacar");
    console.log("4. Ver saldo");
    console.log("5. Aplicar juros/rendimento");
    console.log("6. Sair");
    console.log("===============================");
};

// Verifica se existe conta criada
function contaExiste() {
    return (conta !== null) ? true : false;
};

// Padrão para verificação do Titular da conta - Necessário ter pelo menos 3 letras, podendo conter espaços (nomes compostos)
function verificarNomeTitular(titular) {
    const pattern = /^[aA-zZ|\s]{3,}$/;
    return pattern.test(titular);
};