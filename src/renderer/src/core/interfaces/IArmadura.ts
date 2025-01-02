import { ItemInventario } from './IItem'

export interface Armadura extends ItemInventario {
  bonusDefesa: number
  penalidade: number
  tipo: string
}
