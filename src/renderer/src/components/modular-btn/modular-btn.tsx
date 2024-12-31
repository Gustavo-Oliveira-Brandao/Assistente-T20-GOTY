import styles from './modular-btn.module.scss'
function ModularBtn({
  text,
  icon,
  css
}: {
  text: string
  icon?: string
  css: string
}): JSX.Element {
  return (
    <button className={styles[css]}>
      {icon && <img className={styles.icon} src={icon} alt={text} />}
      <p>{text}</p>
    </button>
  )
}

export default ModularBtn
