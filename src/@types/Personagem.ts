import { Arma } from "./Arma"
import { Armadura } from "./Armadura"
import { Atributo } from "./Atributo"
import { Deslocamento } from "./Deslocamento"
import { ItemInventario } from "./ItemInventario"
import { Magia } from "./Magia"
import { Pericia } from "./Pericia"
import { Poder } from "./Poder"
import { Recurso } from "./Recurso"

export interface Personagem{
    id: number
    nome: string
    raca: string
    classe: string
    origem: string
    divindade: string
    nivel: number
    experiencia: number
    defesa: number
    recursos: Recurso[]
    deslocamentos: Deslocamento[]
    atributos: Atributo[]
    pericias: Pericia[]
    poderes: Poder[]
    itens: ItemInventario[]
    armas: Arma[]
    armaduras: Armadura[]
    magias: Magia[]
}