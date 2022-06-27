import React from 'react'
import styles from './Main.module.css'
import { BiCategory, BiQuestionMark } from 'react-icons/bi'

function Main({ search, setSearch }) {
  return (
    <section className={styles.main}>
      <h2>Разом до перемоги!</h2>
      <h2>Онлайн-сервис заказа услуг</h2>
      <p>
        Более 100 000 проверенных специалистов для выполнения ваших бытовых или
        бизнес задач
      </p>
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
          Например: <a href="/mvp/">ремонт крана</a>
        </p>
      </div>

      <div className={styles.faq}>
        <a href="/mvp/">
          <BiCategory className={styles.faqIcon} />
          <p>Все категории услуг</p>
        </a>

        <a href="/mvp/">
          <BiQuestionMark className={styles.faqIcon} />
          <p>Как это работает</p>
        </a>
      </div>
    </section>
  )
}

export default Main
