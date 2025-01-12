import { Dano } from "./Dano"
import { Modificador } from "./Modificador"

export interface Magia{
    id: number
    nome: string
    descricao: string
    area: string
    duracao: string
    nivelCirculo: number
    execucao: string
    tradicao: string
    escola: string
    alcance: string
    alvo: string
    danos?: Dano[]
    modificadores?: Modificador[]
}