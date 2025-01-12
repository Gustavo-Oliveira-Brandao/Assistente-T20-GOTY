import { Bonus } from "./Bonus"

export interface Deslocamento{
    id: number
    categoria: string
    valorBase: number
    bonus: Bonus[]
}