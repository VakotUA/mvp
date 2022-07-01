import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Categories.module.css'
import { Grid } from 'react-bootstrap-icons'

function CategorySelect({ categories }) {
  return (
    <section className={styles.categorySelect}>
      <ul>
        {categories.slice(0, 5).map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `${styles.category} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.categoryIcon}>{item.img}</span>
              {item.lable}
            </NavLink>
          </li>
        ))}

        <li>
          <NavLink
            to="/mvp/"
            className={({ isActive }) =>
              `${styles.category} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.categoryIcon}>
              <Grid />
            </span>
            Все категории
          </NavLink>
        </li>
      </ul>
    </section>
  )
}

export default CategorySelect
