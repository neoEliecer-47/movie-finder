'use client'

import styles from './PaginationButtons.module.css'

const PaginationButtons = () => {
  return (
    <aside className={styles.pagButtonsContainer}>
          <button className={styles.pagButtons}>1</button>
          <button className={styles.pagButtons}>2</button>
    </aside>
  )
}

export default PaginationButtons