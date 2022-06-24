import { Conta } from "./Conta/Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
        
    }
    
}