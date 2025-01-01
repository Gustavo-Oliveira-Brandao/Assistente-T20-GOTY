import { Acao } from './IAcao'
import { Atributo } from './IAtributo'
import { Condicao } from './ICondicao'
import { ItemInventario } from './IItem'
import { Magia } from './IMagia'
import { Pericia } from './IPericia'
import { Poder } from './IPoder'

export interface Personagem {
  id: number
  nome: string
  raca: string
  classe: string
  origem: string
  divindade: string
  nivel: number
  vidaMaxima: number
  vidaAtual: number
  vidaTemporaria: number
  manaMaxima: number
  manaAtual: number
  manaTemporaria: number
  deslocamento: number
  deslocamentoVoo: number
  deslocamentoNatacao: number
  deslocamentoEnterrada: number
  atributos: Atributo[]
  pericias: Pericia[]
  itens: ItemInventario[]
  acoes: Acao[]
  poderes: Poder[]
  magias: Magia[]
  condicoes: Condicao[]
}
