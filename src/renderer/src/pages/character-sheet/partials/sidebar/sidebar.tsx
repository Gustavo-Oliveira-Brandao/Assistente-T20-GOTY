import ModularBtn from '@renderer/components/modular-btn/modular-btn'
import ResourceBar from '@renderer/components/resource-bar/resource-bar'
import SkillComponent from '@renderer/components/skill/skill'
import { Skill } from '@renderer/core/interfaces/ISkill'
import styles from './sidebar.module.scss'

import characterPhoto from '@renderer/assets/character.png'
import racaIcon from '@renderer/assets/icons/raca.svg'
import classeIcon from '@renderer/assets/icons/classe.svg'
import divindadeIcon from '@renderer/assets/icons/divindade.svg'
import origemIcon from '@renderer/assets/icons/origem.svg'
import caIcon from '@renderer/assets/icons/ca.svg'
import deslocamentoIcon from '@renderer/assets/icons/deslocamento.svg'

function Sidebar({ skills }: { skills: Skill[] }): JSX.Element {
  const savingThrows: JSX.Element[] = []
  const secondarySkills: JSX.Element[] = []

  for (const skill of skills) {
    if (skill.isSavingThrow) {
      savingThrows.push(<SkillComponent key={skill.name} skill={skill}></SkillComponent>)
    }
    if (skill.name == 'iniciativa') {
      secondarySkills.push(<SkillComponent key={skill.name} skill={skill}></SkillComponent>)
    }
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.characterPhoto}>
        <img src={characterPhoto} alt="" />
        <span className={styles.opacity}></span>
        <div className={styles.info}>
          <ModularBtn icon={racaIcon} css="buttonWithIcon" text="elfo"></ModularBtn>
          <ModularBtn icon={classeIcon} css="buttonWithIcon" text="guerreiro"></ModularBtn>
          <ModularBtn icon={divindadeIcon} css="buttonWithIcon" text="allihanna"></ModularBtn>
          <ModularBtn icon={origemIcon} css="buttonWithIcon" text="taverneiro"></ModularBtn>
        </div>
      </div>
      <div className={styles.name}>
        <p>Nome eba</p>
      </div>
      <div className={styles.resourceBars}>
        <ResourceBar css="greenBar" current={100} max={100}></ResourceBar>
        <ResourceBar css="blueBar" current={100} max={100}></ResourceBar>
      </div>
      <div className={styles.secondaryInfo}>
        <div className={styles.title}>
          <h2>Defesa</h2>
        </div>
        <div className={styles.resource}>
          <img src={caIcon} alt="" />
          <ModularBtn css="secondaryResourceBtn" text="15"></ModularBtn>
        </div>
      </div>
      <div className={styles.secondaryInfo}>
        <div className={styles.title}>
          <h2>Deslocamento</h2>
        </div>
        <div className={styles.resource}>
          <img src={deslocamentoIcon} alt="" />
          <ModularBtn css="secondaryResourceBtn" text="30"></ModularBtn>
        </div>
      </div>
      <div className={styles.secondaryInfo}>
        <div className={styles.title}>
          <h2>Testes de resistência</h2>
        </div>
        <div className="skills">{savingThrows}</div>
      </div>
      <div className={styles.secondaryInfo}>
        <div className={styles.title}>
          <h2>Iniciativa</h2>
        </div>
        <div className="skills">{secondarySkills}</div>
      </div>
    </aside>
  )
}

export default Sidebar
