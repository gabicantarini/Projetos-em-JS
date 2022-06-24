class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); //setado para não alterar a data
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //=> congela a superficie das propriedades do objeto q não podem ser alterado. 
        // MAs ele não faz um deep freeze. ele não faz freeze no this._data
    }
    //metodo => função criada dentro da classe
    // função => função criada fora da classe
    get volume() {
        return this._quantidade * this.valor;
    }

    get data() {
        return new Date(this._data.getTime()); //setado para não alterar a data
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}