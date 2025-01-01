export interface Character {
  id: number
  name: string
  race: string
  charClass: string
  origin: string
  divinity: string
  level: number
  maxHitPoints: number
  currentHitPoints: number
  temporaryHitPoints: number
  maxManaPoints: number
  currentManaPoints: number
  temporaryManaPoints: number
  equippedArmor: string
  bonusDefense: number
  speed: number
  attributes: []
  skills: []
}
