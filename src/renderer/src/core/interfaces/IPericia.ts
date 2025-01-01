import { Modificador } from './IModificador'

export interface Pericia {
  id: number
  nome: string
  descricao: string
  valorTotal: number
  ehTreinado: boolean
  atributo: string
  requerTreinamento: boolean
  sofrePenalidadeArmadura: boolean
  ehTesteResistencia: boolean
  modificadores: Modificador[]
}
