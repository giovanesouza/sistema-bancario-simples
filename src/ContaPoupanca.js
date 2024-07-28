const Conta = require('./Conta');

// ContaPoupança herda tudo da classe Conta
class ContaPoupanca extends Conta {
    constructor(titular) {
        super(titular);
        this.rendimento = 0.05; // atributo específico da classe
    };

    aplicarRendimento() {
        // Se não houver saldo, exibe a mensagem abaixo
        if (this.saldo === 0) {
            console.log(`❌ Não foi possível aplicar rendimento, pois não há saldo disponível.\n`);
            return; // Encerra execução do método
        };

         // Havendo saldo, calcula rendimento
        const valorRendimento = this.saldo * this.rendimento;
        const saldoComRendimento = valorRendimento + this.saldo;

        this.saldo = saldoComRendimento; // Atualiza saldo com o valor do rendimento aplicado

        console.log("=============================================");
        console.log("-- RENDIMENTO APLICADO (VALORES)")
        console.log(`Valor de rendimento: R$ ${valorRendimento.toFixed(2)}`);
        console.log(`Saldo com rendimento: R$ ${saldoComRendimento.toFixed(2)}\n`);
    }
};

module.exports = ContaPoupanca;