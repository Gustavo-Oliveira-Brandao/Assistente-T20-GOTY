import { Dano } from './IDano'

export interface ItemInventario {
  id: number
  nome: string
  categoria: string
  descricao: string
  peso: number
  valor: number
  danos: Dano[]
  tipo: string
}
