import { Efeito } from "./Efeito"

export interface ItemInventario{
    id: number
    nome: string
    descricao: string
    categoria: string
    icone?: string
    preco: number
    espacos: number
    quantidade: number
    efeitos: Efeito[]
}