import styles from './roll-btn.module.scss'
import d20Icon from '@renderer/assets/icons/d20.svg'

function RollBtn({ value }: { value: number }): JSX.Element {
  return (
    <button className={styles.rollBtn}>
      <img src={d20Icon} alt="Rolagem" />
      <p>{value > 0 ? '+' + value : value}</p>
    </button>
  )
}

export default RollBtn
