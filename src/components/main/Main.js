import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Main.module.css'

function Main({ content, search, setSearch }) {
  return (
    <section
      className={styles.main}
      style={{ backgroundImage: `url(${content.bgImage})` }}
    >
      <h2>Разом до перемоги!</h2>
      <h2>{content.header}</h2>
      <p>{content.text}</p>
      <div className={styles.searchBlock}>
        <div className={styles.search}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Что нужно сделать?"
          />
          <button>Найти специалиста</button>
        </div>
        <p>
          Например:{' '}
          <Link to={content.example.link}>{content.example.text}</Link>
        </p>
      </div>

      <ul className={styles.faq}>
        {content.faq.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              {item.icon}
              <p>{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Main
