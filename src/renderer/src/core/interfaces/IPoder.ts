export interface Poder {
  id: number
  img?: string
  nome: string
  execucao: string
  categoria: string
  descricao: string
  nivel: number
  preRequisitos?: string[]
  modificadores: string[]
}
