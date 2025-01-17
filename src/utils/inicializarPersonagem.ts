import { Personagem } from "../@types/Personagem";

export const inicializarPersonagem = (personagem: Personagem) => {

    personagem.recursos[0].valorMaximo = aplicarValorMaximoRecurso()
    personagem.recursos[1].valorMaximo = aplicarValorMaximoRecurso()
    personagem.defesa = 15

    return personagem
}

//TODO: aplicar logica de puxar pv e pm dos JSON de raças
function aplicarValorMaximoRecurso(){
    return 10
}
