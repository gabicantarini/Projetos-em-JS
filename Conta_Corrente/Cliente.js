export class Cliente{ //precisamos exportar o arquivo das classes
    nome;
    _cpf;

    get cpf(){
        return this._cpf; 
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}

//é uma boa prática sempre criarmos arquivos diferentes para cada classe
//os arquivos de classe começam por letra maiuscula 