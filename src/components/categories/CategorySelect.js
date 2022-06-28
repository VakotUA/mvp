import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Categories.module.css'
import { Grid } from 'react-bootstrap-icons'

function CategorySelect({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <section className={styles.categories}>
      <ul>
        {categories.slice(0, 5).map((item) => (
          <li key={item.id}>
            <Link
              to={item.link}
              className={`${styles.category} ${
                selectedCategory === item.id ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(item.id)}
            >
              <span className={styles.categoryIcon}>{item.img}</span>
              {item.lable}
            </Link>
          </li>
        ))}

        <li>
          <Link
            to="/mvp/all-categories"
            className={`${styles.category} ${
              selectedCategory === null ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            <span className={styles.categoryIcon}>
              <Grid />
            </span>
            Все категории
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default CategorySelect
