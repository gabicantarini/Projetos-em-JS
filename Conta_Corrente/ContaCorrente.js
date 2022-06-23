import { Cliente } from "./Cliente.js";

export class ContaCorrente{ //precisamos exportar o arquivo das classes
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0; //_saldo usamos o underline para deixar privado
    



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

    constructor(agencia, cliente){ //Construtores são utilizados para inicializar os atributos.
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){ //this vai se referir a conta corrente que estivermos mexendo
            // # e/ou _é para deixar o saldo privado
            this._saldo += valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }

    }

    transferir(valor, conta){
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

//Apesar do atributo cidade ter sido adicionado à conta2, o valor não foi alterado. 
//Qual a diferença entre a variável valor e o objeto conta2? O valor consiste em um tipo primitivo (como strings, booleanos, inteiros e assim por diante). Sempre que uma variável desse tipo é passada como parâmetro para um método, na verdade estamos passando uma cópia do seu valor, mantendo a variável intacta.

//Já quando passamos a conta2, estamos trabalhando diretamente com a referência ao objeto conta, e não uma cópia dele. Aqui entendemos a diferença entre tipos de referência e tipos de valor. 
//Recapitulando: quando passamos como parâmetro de um método os tipos primitivos, também chamados de tipos de valor, estamos na verdade copiando aquela informação para utilizá-la; já com tipos de referência, como objetos de classes, estamos trabalhando com a informação direta, e todas as alterações serão refletidas no objeto original.

// Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código. Assim se qualquer regra de atribuição mudar só precisamos modificar um único lugar.

// Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura. Chamamos essa ideia de proteger atributos de nossas classes de encapsulamento e devemos sempre manter o máximo de encapsulamento possível.
