// Classe abstrata, não pode ser instânciada, só pode ser herdada
// Classe abstrata nunca pode ter um new
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        // throw + Error => para a execução do programa        
        if(this.construtor == Conta){
            throw new Error("Você não pode instanciar um objeto do tipo conta, pois essa é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;  
        
        
       
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //metodo abstrato => o metodo existe, mas não tem nada. Ele serve só para ser chamado
    // ele não pode ser chamado diretamente, ele deve ser sobreescrito primeiro pela classe filha
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");                
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
           this._saldo -= valorSacado;
           return valorSacado;
        }  
        
        return 0;
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}