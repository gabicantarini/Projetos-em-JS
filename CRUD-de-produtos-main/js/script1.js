class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = []; //lista de produtos
        this.editId = null; // toda vez que esse valor for null será uma salvar, se não for null sera um editar

    }
    salvar() {
        let produto = this.lerDados(); // a variavel produto está recebendo o retorno da funcao lerDados()
        if (this.validaCampos(produto) == true) { //esta funcao esta sendo chamada para, se retornar verdadeira, adicionar o produto, caso contario, solicitar campos obrigatorios. 
            if (this.editId == null) { //se for null cadastra, senão atualiza
                this.adicionar(produto);
            }
            else {
                this.atualizar(this.editId, produto); // recebe o id que sera atualizado e manda o produto p funcao atualizar
            }
        }

        this.listaTabela();//lista produtos
        this.cancelar();
    }

    listaTabela() { // nessa funcao percorremos todos os elementos do array e cria as linhas e as colunas. Para que ela funcione, chame a mesma na funcao salvar() apos validar e add os elementos

        let tbody = document.getElementById('tbody');// para que o cadastro n duplique, ultilize disso, pois toda vez que o usuario for cadastrar um novo produto, o campo vira vazio.

        tbody.innerText = ''; // para que o cadastro n duplique, ultilize disso, pois toda vez que o usuario for cadastrar um novo produto, o campo vira vazio.

        for (let i = 0; i < this.arrayProdutos.length; i++) { //apos percorrer o array, vamos criar cada linha para cada cadastro q for inserido
            let tr = tbody.insertRow(); //insertRom - cria uma nova linha dentro da tabela.
            let td_id = tr.insertCell();//após a linha feita, cria-se a coluna usando o insereCell e add essa coluna ao td_id
            let td_produtos = tr.insertCell(); 
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id; //add uma inf dentro da coluna. O innerText pega o texto digitado no campo
            td_produtos.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;
            
            td_id.classList.add('center'); //add uma classe dentro dessa variavel 
            td_acoes.classList.add('center');

            let imgEdit = document.createElement('img'); //criamos um elemento do tipo imagem 
            imgEdit.src = 'img/editar.png';
            imgEdit.setAttribute("onclick", "produto.editar(" + JSON.stringify(this.arrayProdutos[i]) + ")");  //pega o elemento criado e diz o que vai fazer. setAttribute (evento, acao) aqui vamos passar os dados para o htm usando um JSON.stringify, ou seja, mandar todo o array convertido em string 


            let imgDelet = document.createElement('img');
            imgDelet.src = 'img/deletar-lixeira.png';
            imgDelet.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")"); //pega o elemento criado e diz o que vai fazer. setAttribute (evento, acao) e diz qual id será deletad, passando o id que sera deletado.

            td_acoes.appendChild(imgEdit); //coloca um item como filha de outra, nesse caso, pegou a img e colocou com filha de td_acoes. EX: <td><img></td>
            td_acoes.appendChild(imgDelet);


            console.log(this.arrayProdutos);
        }
    }

    adicionar(produto) {
        produto.preco = parseFloat(produto.preco)
        this.arrayProdutos.push(produto); // o push adicona um produto a lista
        this.id++; //incrementa o Id para o cadastro de um noco produto
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) { //percorre o tamanho do array
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }
    }

    editar(dados) { //vamos fazer uma verificação para invpes de salvar, atualizar os dados
        this.editId = dados.id; //atualiza o id e passa esse id que será atualizado 
        document.getElementById('produto').value = dados.nomeProduto; //será igual ao novo dado que quero inserir
        document.getElementById('preco').value = dados.preco;
        document.getElementById('btn1').innerText = "atualizar";

    }

    lerDados() {
        let produto = {} //cria um vetor vazio
        produto.id = this.id; //recebe o id que foi criado no construtor de acordo com a posição atual
        produto.nomeProduto = document.getElementById('produto').value; //pega o valor do input e add ao vetor que foi criado apotando par o campo nome, ou seja, o produto vai setar o nomeProduto e atribuir o valor do input a ela 
        produto.preco = document.getElementById('preco').value;

        return produto;
    }


    validaCampos(produto) { //se as entradas do usuario forem vazias, manda msg de erro e n adiciona, senão retorna os valores  para que sejam cadastrados
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Informe o nome do produto \n';
        }
        if (produto.preco == '') {
            msg += 'Informe o preço do produto \n';
        }

        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar() {
        document.getElementById('produto').value = ''; //atribuindo valor vazio
        document.getElementById('preco').value = '';
        document.getElementById('btn1').innerText = "salvar"; //trocando o botao atualizar pelo botao salvar
        this.editId = null; //atualizando o editId para ser null e fazer um novo cadastro
    }

    deletar(id) {//vamos pegar o id que será deletado e mandar ele para a nossa imagem lá na função listaTabela()

    
        if (confirm("Deseja realmente deletar o produto?")) {
            let tbody = document.getElementById('tbody'); // pegar algum item abaixo desse tbody

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) { //vamos verificar se o mesmo id recebido aqui é o do vetor
                    this.arrayProdutos.splice(i, 1); //funcao splice recebe dois parametros: o indice a ser deletado e a quantidade de registros que serão deletados
                    tbody.deleteRow(i)//deleta toda a tabela dessa posição [i] em questão
                }
               
            } 
           
        }

    }

}
      

var produto = new Produto();
