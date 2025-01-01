import { Skill } from '@renderer/core/interfaces/ISkill'
import Sidebar from './partials/sidebar/sidebar'
import './character-sheet.module.scss'

function CharacterSheet(): JSX.Element {
  return (
    <>
      <Sidebar skills={skills}></Sidebar>
    </>
  )
}
export default CharacterSheet
