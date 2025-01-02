import { AprimoramentoMagia } from './IAprimoramentoMagia'
import { Dano } from './IDano'

export interface Magia {
  id: number
  nome: string
  img?: string
  area: string
  execucao: string
  nivelCirculo: number
  danos: Dano[]
  descricao: string
  aprimoramentos: AprimoramentoMagia[]
  duracao: string
  alcance: number
  alvo: string
  tradicao: string
  modificadores: string[]
  escola: string
}
