export interface Skill {
  id?: number
  name: string
  totalValue: number
  training: string
  attribute: string
  trainingRestriction: boolean
  armorPenalty: boolean
  isSavingThrow: boolean
}
