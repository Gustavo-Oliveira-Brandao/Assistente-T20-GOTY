import { Modifier } from './IModifier'

export interface Skill {
  id: number
  name: string
  totalValue: number
  isTrained: boolean
  attribute: string
  isTrainingRestricted: boolean
  hasArmorPenalty: boolean
  isSavingThrow: boolean
  modifiers: Modifier[]
}
