
//function evolution
function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 != num2) {
        saoIguais = 'não';
    }

    return "Os números ${num1} e ${num2} ${saoIguais} são iguais.";
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma < 20;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if(compara10) {
        resultado10 = 'maior';
    }
    if(compara10) {
        resultado20 = 'maior';
    }
    return "Sua soma é ${soma} que é ${resultado10} que 10 e ${resultado20} que 20.";

}

console.log(comparaNumeros(1, 2));



/*function sum (num1, num2) {
    var comparar = num1 === num2;

    if(comparar) {
        return comparar;
    } else {
        return "não são iguais"
    }
}

function soma(num1, num2) {
    var mais = num1 + num2;
    var maiorMenor = mais > 10;
    var menorMaior = mais < 20;

    if(maiorMenor || menorMaior) {
    return `Os números ${num1} e ${num2} não são iguais.`
    }
} */