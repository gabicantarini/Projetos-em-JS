import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //desse jeito fazemos a herança da classe conta
    static numeroDeContas = 0;     
    constructor(cliente, agencia) {
        super(0, cliente, agencia); //chama o construtor da classe Conta
        // super => faz uma referencia pra classe mãe
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar (sobreescreve a classe mãe)
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
    
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
}
