import { Modificador } from './IModificador'

export interface Condicao {
  id: number
  nome: string
  img?: string
  descricao: string
  Modificadores: Modificador[]
}
