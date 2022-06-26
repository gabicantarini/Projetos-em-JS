const listaClientes = () =>  { //=> faz a conexão com a API
    return fetch(`http://localhost:3000/profile`) //=> O fetch já faz o GET que pega os dados e retorna a promissa 
    .then(resposta => { //=> retorna com uma resposta
        if(resposta.ok){
            return resposta.json() //=> pega a resposta e converte para um js válido
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const criaCliente = (nome, email) => { 
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

//requisição para o botão excluir 
const removeCliente = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`, {  
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}
 
const detalhaCliente = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`) //pega os dados do cliente que passarmos o id (ajuda na hora de editar)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

export const clienteService = { 
    listaClientes,
    criaCliente, 
    removeCliente,
    detalhaCliente,
    atualizaCliente

}
