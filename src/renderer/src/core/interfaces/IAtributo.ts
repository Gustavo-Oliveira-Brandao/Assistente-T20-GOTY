import { Modificador } from './IModificador'

export interface Atributo {
  id: number
  nome: string
  valorTotal: number
  valorBase: number
  modificadores: Modificador[]
}
