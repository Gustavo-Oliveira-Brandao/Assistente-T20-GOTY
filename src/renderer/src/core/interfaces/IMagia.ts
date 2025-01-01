import { AprimoramentoMagia } from './IAprimoramentoMagia'
import { Dano } from './IDano'

export interface Magia {
  id: number
  nome: string
  img?: string
  area: string
  custo: number
  execucao: string
  nivel: number
  danos: Dano[]
  descricao: string
  aprimoramentos: AprimoramentoMagia[]
  duracao: string
  alcance: number
  alvo: string
}
