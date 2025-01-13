import { Dano } from "./Dano"

export interface Magia{
    id: number
    nome: string
    descricao: string
    testeResistencia?: string
    area: string
    duracao: string
    nivelCirculo: number
    execucao: string
    tradicao: string
    escola: string
    alcance: string
    alvo: string
    danos?: Dano[]
}