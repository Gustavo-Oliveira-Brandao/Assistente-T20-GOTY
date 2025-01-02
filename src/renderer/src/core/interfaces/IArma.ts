import { Dano } from './IDano'
import { ItemInventario } from './IItem'

export interface Arma extends ItemInventario {
  danos: Dano[]
  danoBonus: number
  alcance: number
  margemCritico: number
  multiplicadorCritico: number
  modificadores: string[]
}
