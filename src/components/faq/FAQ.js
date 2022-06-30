import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FAQ.module.css'
import { ChevronRight } from 'react-bootstrap-icons'
import Icon1 from '../../assets/faq-icon-1.png'
import Icon2 from '../../assets/faq-icon-2.png'
import Icon3 from '../../assets/faq-icon-3.png'

function FAQ() {
  return (
    <section className={styles.faq}>
      <h2>
        Как работает{' '}
        <a href="https://kabanchik.ua/" target="_blank" rel="noreferrer">
          Kabanchik.ua
        </a>
      </h2>

      <div className={styles.steps}>
        {/* TODO: <Link to={}></Link>*/}
        <Link to="/mvp/">
          <img src={Icon1} alt="step" />
          <h3>Создайте заказ</h3>
          <p>Опишите, что и когда нужно сделать</p>
        </Link>

        <ChevronRight className={styles.separator} />

        {/* TODO: <Link to={}></Link>*/}
        <Link to="/mvp/">
          <img src={Icon2} alt="step" />
          <h3>Выберите специалисти</h3>
          <p>Выберите компетентного специалиста для выполнения работы</p>
        </Link>

        <ChevronRight className={styles.separator} />

        {/* TODO: <Link to={}></Link>*/}
        <Link to="/mvp/">
          <img src={Icon3} alt="step" />
          <h3>Закройте заказ</h3>
          <p>Оставьте отзыв и оценку за проделанную работу</p>
        </Link>
      </div>

      {/* TODO: <Link to={}>Создайте заказ</Link>*/}
      <p>
        <Link to="/mvp/">Создайте заказ</Link> прямо сейчас и найдите
        специалиста за считанные минуты!
      </p>
    </section>
  )
}

export default FAQ
