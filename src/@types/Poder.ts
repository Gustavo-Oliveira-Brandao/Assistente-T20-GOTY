import { Efeito } from "./Efeito"

export interface Poder{
    id: number
    nome: string
    icone: string
    execucao: string
    descricao: string
    categoria: string
    subCategoria: string
    efeitos: Efeito[]
}