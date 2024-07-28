class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    };

    depositar(valor) {
        // Verificações para a entrada 'valor'
        if (!valor || typeof(valor) === 'string')
            throw new Error("❌ Valor inválido! \n⚠️ Informe apenas valores reais.\n");
        if (valor <= 0)
            throw new Error("❌ Valor inválido! \n⚠️ Informe um valor positivo e diferente de zero.\n");

        this.saldo += valor; // incrementa valor na conta

        console.log("=============================================");
        console.log("-- DEPÓSITO")
        console.log(`💵 Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!\n`);
    };

    sacar(valor) {
        // Verificações para a entrada 'valor'
        if (!valor || typeof(valor) === 'string')
            throw new Error("❌ Valor inválido! \n⚠️ Informe apenas valores reais.\n");
        if (valor <= 0)
            throw new Error("❌ Valor inválido! \n⚠️ Informe um valor positivo e diferente de zero.\n");
        
        // Verifica se possui saldo suficiente
        if(this.saldo >= valor) {
            this.saldo -= valor; // desconta valor da conta
            console.log("=============================================");
            console.log("-- SAQUE")
            console.log(`💵 Saque de R$ ${valor.toFixed(2)} realizado com sucesso!\n`); // imprime valor do saque
        } else {
            console.log("❌ Saldo insuficiente para realizar o saque.\n"); 
        };

    };
    
    verSaldo() {
        console.log("=============================================");
        console.log("-- SALDO")
        console.log(`💵 Seu saldo atual é: R$ ${this.saldo.toFixed(2)}\n`);
    };
};

module.exports = Conta;