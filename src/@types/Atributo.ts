import { Bonus } from "./Bonus"

export interface Atributo{
    id: number
    nome: string
    valorBase: number
    racial: number
    bonus: Bonus[]
    descricao?: string
}