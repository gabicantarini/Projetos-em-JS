import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123");
const gerente = new Gerente("Ricardo", 10000, 12345678900);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Gabriela", 78995263580, "4565");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);



//const cliente1 = new Cliente("Ricardo", 11122233309);
//const cliente2 = new Cliente("Alice", 88822233309);


/*const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca =  new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar =(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);*/

//const conta2 = new ContaCorrente(102, cliente2);

//let valor = 200;
//contaCorrenteRicardo.tranferir(valor, conta2);

