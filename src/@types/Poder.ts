import { Modificador } from "./Modificador"

export interface Poder{
    id: number
    nome: string
    descricao: string
    categoria: string
    subCategoria: string
    modificadores: Modificador[]
}