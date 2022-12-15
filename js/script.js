function scope () {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];
    function recebeEventoForm (event){
       event.preventDefault(); //para não carregar o formulário

       const nome = form.querySelector(".nome");
       const sobrenome = form.querySelector(".sobrenome");
       const peso = form.querySelector(".peso");
       const altura = form.querySelector(".altura");       

       pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
       })

       console.log(pessoas);
       resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value}`;
       form.reset();
            
    };
    
    form.addEventListener("submit", recebeEventoForm);
}

scope();