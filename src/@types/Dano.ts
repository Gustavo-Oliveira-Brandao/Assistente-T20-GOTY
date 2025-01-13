import { Bonus } from "./Bonus"

export interface Dano{
    id: number
    aplicaValorAtributo: boolean
    quantidade: number
    dado: number
    formula: string
    tipo: string
    bonus: Bonus[]
}