import { Modifier } from './IModifier'

export interface Attribute {
  id: number
  name: string
  totalValue: number
  baseValue: number
  modifiers: Modifier[]
}
