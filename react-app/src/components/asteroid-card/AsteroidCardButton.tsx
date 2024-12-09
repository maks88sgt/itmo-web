import styles from "./card.module.scss"

export const AsteroidCardButton = (props: {
    onClick: any; 
  })=>{
    return (
      <div>
				<div className={styles.actionGrade}>Dangerous or not</div>
				<button className={styles.action}>
					<div className={styles.actionText}>To destroyment</div>
				</button>
			</div>
  )
}