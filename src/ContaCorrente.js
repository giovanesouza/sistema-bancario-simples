const Conta = require('./Conta')

// ContaCorrente herda tudo da classe Conta
class ContaCorrente extends Conta {
    constructor(titular) {
        super(titular);
        this.juros = 0.02; // atributo específico da classe
    };

    aplicarJuros() {
        // Se não houver saldo, exibe a mensagem abaixo
        if(this.saldo === 0) {
            console.log(`❌ Não foi possível aplicar juros, pois não há saldo disponível.\n`);
            return; // Encerra execução do método
        };

        // Havendo saldo, calcula os juros
        const valorJuros = this.saldo * this.juros;
        const SaldoComJuros = valorJuros + this.saldo;

        this.saldo = SaldoComJuros; // Atualiza saldo com o valor dos juros aplicado

        console.log("=============================================");
        console.log("-- JUROS APLICADOS (VALORES)")
        console.log(`Valor de juros: R$ ${valorJuros.toFixed(2)}`);
        console.log(`Saldo com juros: R$ ${SaldoComJuros.toFixed(2)}\n`);
    }
};

module.exports = ContaCorrente;