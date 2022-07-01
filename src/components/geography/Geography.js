import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Geography.module.css'

function Geography({ cities }) {
  return (
    <section className={styles.geography}>
      <h2>
        География{' '}
        <a href="https://kabanchik.ua/" target="_blank" rel="noreferrer">
          Кабанчика
        </a>
      </h2>

      {cities && (
        <ul>
          {cities.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link + item.id}
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Geography
