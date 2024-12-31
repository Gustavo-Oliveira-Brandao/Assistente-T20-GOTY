import type { Skill } from '@renderer/core/interfaces/ISkill'
import RollBtn from '../roll-btn/roll-btn'
import styles from './skill.module.scss'
function Skill({ skill }: { skill: Skill }): JSX.Element {
  return (
    <div className={styles.skill}>
      <button>{skill.name}</button>
      <RollBtn value={10}></RollBtn>
    </div>
  )
}

export default Skill
