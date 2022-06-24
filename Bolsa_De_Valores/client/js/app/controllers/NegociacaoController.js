class NegociacaoController {
    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let helper = new DateHelper();
        let data = helper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            );


        console.log(negociacao);

        console.log(helper.dataParaTexto(negociacao.data));

        //console.log(typeof(this._inputData.value)); => estamos recebendo data como string

        //console.log(this._inputData.value); => precisamos transformar a string em numero(date)
       
        //let data = new Date(this._inputData.value.replace(/-/g, ',')); // => exemplo de conversão de data com expressão regular
        //let data = new Date(this._inputData.value.split('-')); //ex de conversão de data

        // let data = new Date(...this._inputData.value.split('-')); ... => spread operator - cada ponto é um parametro passado pro construtor
        // map =>  a função map() nos permitirá subtrair 1
        
       /* let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );*/

      

        /*let diaMesAno = negociacao.data.getDate()
            + '/' + (negociacao.data.getMonth() + 1)
            + '/' + negociacao.data.getFullYear();*/
      

        


    }
}