
// AULA 1

console.log("Meu Primeiro programa: trabalhando com variáveis"); //para mandar printar

cosnt idade = 26; //idade é a variável criada na memória; 26 é o valor

console.log("idade");
console.log(idade);
console.log(idade+2);
console.log(idade-2);
console.log(idade/2);

const idadeSomada = idade+2;
console.log(idadeSomada); //idadeSomada é usado o método camelCase 

console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));


let idade; // declarando variável
idade = 26; // atribuindo valor

let idade;
idade = 26;
idade = idade+1; //vai somar a idade + 1
console.log(idade);


//console.log = print
//Usando o REPL no NodeJS
//Como imprimir valores na tela
//Declaração de variáveis
//peradores aritméticos
//JS é case sensitive - dá erro se a letra tiver maiuscula no lugar errado
//sempre declarar variavel com const antes
//parseInt converte texto para número
//const = constante Declara variavel fixa, q não pode variar
// let declara variável que pode variar

//Aprendemos:
//Const e let
//Case Sensitive
//Adicionando comentários
//parseInt e parseFloat
//Usando números com casa decimal
//Atribuição de variáveis
//Criação de Arrays;
//Inserção de itens em um array;
//Array splice;
//Palavras reservadas;
//Indices do array;
//If e Else
//Operadores lógicos
//if encadeado
//else if
//&& e ||
//While;
//Break;
//Usando o Debbuger do VS Cde;
//Entendendo o fluxo de execução do código;
//configurando o debbuger do VSCode;
//For Loop;


//Array: podemos armazenar diversos dados. A maneira de declarar um array é com a palavra chave new e o tipo da estrutura Array, e assim podemos criar uma nova lista new array
//push adiciona novo item na lista
//splice para apagar item da lista


const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;

//condicionais
// || ou && e 
if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
} 


//Os operadores lógicos devem ter no lado esquerdo e direito uma expressão booleana.
if (idade > 18 && idade < 65)
{

}

//O while sempre precisará de uma expressão condicional que definirá quando o laço deve ser interrompido.
//Todos os operadores de comparação e lógicos são válidos na expressão condicional do while! 
//O comando break interrompe o fluxo de execução do laço de maneira forçada, sem precisarmos atingir a condição de saída



//for
for(let i = 0 ; i <3 ; i++){ //primeiro espaço declaramos a variavel, no segundo espaço verrifica a condição de cada loop, o terceiro espaço ele vai executar o que foi pedido para cada loop
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}