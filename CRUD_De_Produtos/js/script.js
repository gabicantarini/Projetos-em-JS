class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;

    }
    salvar() {
        let produto = this.lerDados();
        if (this.validaCampos(produto) == true) {
            if (this.editId == null) {
                this.adicionar(produto);
            }
            else {
                this.atualizar(this.editId, produto);
            }
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow(); //insertRom - cria uma nova linha dentro da tabela.
            let td_id = tr.insertCell();//insereCell insere uma nova coluna e add essa coluna ao td_id
            let td_produtos = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produtos.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;
            
            td_id.classList.add('center');
            td_acoes.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';
            imgEdit.setAttribute("onclick", "produto.editar(" + JSON.stringify(this.arrayProdutos[i]) + ")");


            let imgDelet = document.createElement('img');
            imgDelet.src = 'img/deletar-lixeira.png';
            imgDelet.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelet);


            console.log(this.arrayProdutos);
        }
    }

    adicionar(produto) {
        produto.preco = parseFloat(produto.preco)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }
    }

    editar(dados) {
        this.editId = dados.id;
        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;
        document.getElementById('btn1').innerText = "atualizar";

    }

    lerDados() {
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }


    validaCampos(produto) {
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
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('btn1').innerText = "salvar";
        this.editId = null;
    }

    deletar(id) {


        if (confirm("Deseja realmente deletar o produto?")) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i)
                }
            }

        }

    }

}
      

var produto = new Produto();