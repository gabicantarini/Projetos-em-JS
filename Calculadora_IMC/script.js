const calcular = document.getElementById('calcular')
const limpar = document.getElementById('limpar')
const inputs = document.querySelectorAll('input')

function imc(event) {
    event.preventDefault()
    const altura = document.getElementById('altura').value/100
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1)
    
        if(valorImc < 18.5){
            document.querySelector('.resultado1').style.backgroundColor = "#EBFDEA"
        } else if (valorImc >= 18.5 && valorImc <= 24.9){
            document.querySelector('.resultado2').style.backgroundColor = "#EBFDEA"
        } else if (valorImc >= 25 && valorImc <=29.9){
            document.querySelector('.resultado3').style.backgroundColor = "#EBFDEA"
        } else if (valorImc >=30 && valorImc <= 39.9){
            document.querySelector('.resultado4').style.backgroundColor = "#EBFDEA"
        } else {
            document.querySelector('.resultado5').style.backgroundColor = "#EBFDEA"
        }

        document.getElementById('resultado').innerHTML = valorImc
        
    } else {
        alert('Preencha os dados abaixo.')
     }
}

function clear (e){
    e.preventDefault()

    // zerar os valores
    inputs.forEach(input => input.value = '')

    document.getElementById('resultado').innerHTML = '' 

    // gambiarra pra voltar pro background original
    document.querySelector('.resultado1').style.backgroundColor = "#fff"
    document.querySelector('.resultado2').style.backgroundColor = "#fff"
    document.querySelector('.resultado3').style.backgroundColor = "#fff"
    document.querySelector('.resultado4').style.backgroundColor = "#fff"
    document.querySelector('.resultado5').style.backgroundColor = "#fff"

    
}

limpar.addEventListener('click', clear)
calcular.addEventListener('click', imc)