import { Bonus } from "./Bonus"

export interface Pericia {
    id: number
    nome: string
    valorAtual: number
    bonus: Bonus[]
    ehTreinado: boolean
    categoria: string
    atributo: string
    requerTreinamento: boolean
    sofrePenalidadeArmadura: boolean
    descricao?: string
}