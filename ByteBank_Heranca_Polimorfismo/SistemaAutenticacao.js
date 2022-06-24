/* ser autenticavel significa ter o método autenticar

duck type => muito usado em linguagem fracamente tipada
nesse tipo, não nos preocupamos com o tipo da classe, o que interessa é se ele
tem a proprieade q precisamos usar. Cnseguimso fazer isso através do polimorfismo*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);

        }
        return false;
        
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function; // instanceof => uma instância de uma função
    }
}

//metodo estatico não precisa de instancia para ser chamado

