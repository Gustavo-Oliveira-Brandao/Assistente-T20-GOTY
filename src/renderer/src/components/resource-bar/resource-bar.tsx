import styles from './resource-bar.module.scss'
function ResourceBar({
  css,
  current,
  max
}: {
  css: string
  current: number
  max: number
}): JSX.Element {
  const barWidth = 100

  return (
    <div className={styles.resourceBar}>
      <div className={`${styles[css]} ${styles.bar}`} style={{ width: `${barWidth}%` }}></div>
      <div className={styles.text}>
        <p>{current + '/' + max}</p>
      </div>
    </div>
  )
}

export default ResourceBar
