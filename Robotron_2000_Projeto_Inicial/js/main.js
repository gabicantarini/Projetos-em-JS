//const robotron = document.querySelector("#robotron")

/*robotron.addEventListener("click", () => {
    console.log("Cliquei no Robô.")
})

function dizOI(nome) {
    console.log(nome)
    console.log("Bem vindo ao Robotron 2000")
}

dizOI("Gabriela")*/

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const blindagem = document.querySelector("#blindagem")

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    },
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)   
        atualizaEstatistica(evento.target.dataset.peca)     
    })    
})

//somar.addEventListener("click", () => {manipulaDados("subtrair")})
//subtrair.addEventListener("click", () => {manipulaDados("somar")})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }    
}

function atualizaEstatistica(peca)  {    
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}