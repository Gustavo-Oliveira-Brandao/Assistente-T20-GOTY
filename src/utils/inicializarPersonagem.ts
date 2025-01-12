import { Bonus } from "../@types/Bonus";
import { Modificador } from "../@types/Modificador";
import { Personagem } from "../@types/Personagem";

export const inicializarPersonagem = (personagem: Personagem) => {

    personagem.recursos[0].valorMaximo = aplicarValorMaximoRecurso()
    personagem.recursos[1].valorMaximo = aplicarValorMaximoRecurso()
    personagem.defesa = 15
    
    for(const item of personagem.itens){
        for(const modificador of item.modificadores){
            personagem = aplicarModificador(modificador, personagem)
        }
    }

    for(const poder of personagem.poderes){
        for(const modificador of poder.modificadores){
            personagem = aplicarModificador(modificador, personagem)
        }
    }

    return personagem
}

//TODO: aplicar logica de puxar pv e pm dos JSON de raças
function aplicarValorMaximoRecurso(){
    return 10
}

function aplicarModificador(modificador : Modificador, personagem : Personagem){
    const bonus : Bonus = {
        nome: modificador.nome,
        categoria: modificador.subAlvo,
        valor: modificador.valor
    }

    if(modificador.grupoAlvo == "recursos"){
        for(const recurso of personagem.recursos){
            if(recurso.categoria == modificador.alvo){
                recurso.bonus.push(bonus)
            }
        }
    }

    if(modificador.grupoAlvo == "deslocamentos"){
        for(const deslocamento of personagem.deslocamentos){
            if(deslocamento.categoria == modificador.alvo){
                deslocamento.bonus.push(bonus)
            }
        }
    }

    if(modificador.grupoAlvo == "atributos"){
        for(const atributo of personagem.atributos){
            if(atributo.nome == modificador.alvo){
                atributo.bonus.push(bonus)
            }
        }
    }

    if(modificador.grupoAlvo == "pericias"){
        for(const pericia of personagem.pericias){
            if(pericia.nome == modificador.alvo){
                pericia.bonus.push(bonus)
            }
        }
    }

    return personagem
}