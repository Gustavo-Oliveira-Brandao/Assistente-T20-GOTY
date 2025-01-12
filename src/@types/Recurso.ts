import { Bonus } from "./Bonus"

export interface Recurso{
    id: number
    categoria: string
    valorAtual: number
    valorMaximo: number
    valorTemporario: number
    bonus: Bonus[]
}