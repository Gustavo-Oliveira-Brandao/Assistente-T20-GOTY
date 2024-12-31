import { Skill } from '@renderer/core/interfaces/ISkill'
import Sidebar from './partials/sidebar/sidebar'
import './character-sheet.module.scss'

function CharacterSheet(): JSX.Element {
  const skills: Skill[] = [
    {
      name: 'acrobacia',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: true,
      isSavingThrow: false
    },

    {
      name: 'adestramento',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'carisma',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'atletismo',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'forca',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'atuacao',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'cavalgar',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'conhecimento',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'cura',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'sabedoria',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'diplomacia',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'enganacao',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },
    {
      name: 'fortitude',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'constituicao',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: true
    },
    {
      name: 'furtividade',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: true,
      isSavingThrow: false
    },

    {
      name: 'guerra',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'identificar magia',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'iniciativa',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'intimidacao',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'jogatina',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'carisma',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'ladinagem',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: true,
      armorPenalty: true,
      isSavingThrow: false
    },

    {
      name: 'luta',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'forca',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'misticismo',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'nobreza',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'obter informacao',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'carisma',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'oficio',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'inteligencia',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'percepcao',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'sabedoria',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'pilotagem',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'pontaria',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },
    {
      name: 'reflexos',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'destreza',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: true
    },
    {
      name: 'religiao',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'sabedoria',
      trainingRestriction: true,
      armorPenalty: false,
      isSavingThrow: false
    },

    {
      name: 'sobrevivencia',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'sabedoria',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: false
    },
    {
      name: 'vontade',
      totalValue: 0,
      training: 'destreinado',
      attribute: 'sabedoria',
      trainingRestriction: false,
      armorPenalty: false,
      isSavingThrow: true
    }
  ]
  return (
    <>
      <Sidebar skills={skills}></Sidebar>
    </>
  )
}
export default CharacterSheet
