
import {Cliente} from "./Cliente.js" //precisamos importar o arquivo com as classes
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 88822233309); //atribuimos uma variavel para identificar o novo cliente
const cliente2 = new Cliente("Alice", 88822233310); //cliente1 e cliente2 são obejtos da classe cliente
// a chamada new Cliente() é uma instância da classe

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);



//contaCorrenteRicardo.transferir(200, conta2); //transferir 200 para a conta2
//para classes usamos atributos
//Classes definem uma forma de organizarmos uma série de informações repetidas no nosso código e por isso devemos usar elas quando temos código que se repete e que faz parte de um contexto coeso.
//Se tivermos código que se repete porém não forma um contexto coeso, provavelmente teremos que criar duas classes, cada uma delimitando um contexto único que faça sentido.
// Função e método são termos sinônimos.Usamos métodos para dar nomes aos comportamentos que nossa classe possui e isso facilita a comunicação dentro da equipe
//Um método pode receber qualquer quantidade de parâmetros.
// O objetivo de métodos é definir o que um objeto saber fazer. O comportamento é implementado dentro do método.
//Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.
//O JS é uma linguagem de escopo aberto e Atualmente no Js nenhum atributo ou método é realmente privado

//O que aprendemos nessa aula:
//Criação de métodos
//Palavra chave this
//Encapsulamento
//Proposta de atributos privados
//Return e early return

//Criamos módulos para compartilhar código entre os diferentes arquivos do meu sistema, ajudando na organização dele.

//JSON é um arquivo de marcação contendo todas as informações defininidas. Para que o Node deixe de exibir o erro que tínhamos anteriormente, bastará adicionarmos uma nova marcação, "type", recebendo o valor "module".
//O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação.
//NPM – Node package manager, gerenciador de pacotes mais utilizado do JS

//Em Javascript, os tipos primitivos são:
//String (texto);
//Number (número);
//Boolean;
//Null;
//undefined;
//Symbol.

//O que aprendemos nessa aula:

//Package.json
//Modules
//import/export
//Quais as vantagens de ter um código onde usamos classes e composição ao invés de tipos primitivos
//Tipos de valor e tipos de referência
//Alterando dinamicamente um objeto

//O que aprendemos nessa aula:

//Diferenças entre null e undefined
//Aprofundando nos conceitos de referências a um espaço de memória
//Get e Set
//Melhor encapsulamento da classe
//Protegendo atributos sensíveis

//O que aprendemos nessa aula:

//Construtores
//Encapsulamento
//Atributos "readonly"
//Atributos estáticos