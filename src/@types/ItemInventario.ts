import { Modificador } from "./Modificador"

export interface ItemInventario{
    id: number
    nome: string
    descricao: string
    categoria: string
    preco: number
    espacos: number
    quantidade: number
    modificadores: Modificador[]
}