import React from 'react'
import List from './List'
import styles from './Categories.module.css'

function CategoriesList({ list }) {
  return (
    <section className={styles.categoriesList}>
      {list && (
        <ul className={styles.topList}>
          {list.map((item, index) => (
            <li key={index}>
              <List category={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default CategoriesList
