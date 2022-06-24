import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
//const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca =  new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar =(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);

//const conta2 = new ContaCorrente(102, cliente2);

//let valor = 200;
//contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);