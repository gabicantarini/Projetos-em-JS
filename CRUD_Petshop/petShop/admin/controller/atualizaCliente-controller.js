import { clienteService } from '../service/cliente-service.js'


(async () => { 
  const pegaURL = new URL(window.location) //informa onde estamos na página

  const id = pegaURL.searchParams.get('id') //pega o id da url
  
  const inputNome = document.querySelector('[data-nome]')
  const inputEmail = document.querySelector('[data-email]')
  try { 
    const dados = await clienteService.detalhaCliente(id) // detalha as informações na hora da edição
    inputNome.value = dados.nome
    inputEmail.value = dados.email
  }
  catch(erro){
    console.log(erro)
    window.location.href="../telas/erro.html"
  }

  
  const formulario = document.querySelector('[data-form]')
  
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
      window.location.href = "../telas/edicao_concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../telas/erro.html"
    }
  })
})()
