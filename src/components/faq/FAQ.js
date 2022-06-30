import React from 'react'
// import { Link } from 'react-router-dom'
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
        <div>
          {/* TODO: <Link to={}></Link>*/}
          <img src={Icon1} alt="" />
          <h3>Создайте заказ</h3>
          <p>Опишите, что и когда нужно сделать</p>
        </div>

        <ChevronRight className={styles.separator} />

        <div>
          {/* TODO: <Link to={}></Link>*/}
          <img src={Icon2} alt="" />
          <h3>Выберите специалисти</h3>
          <p>Выберите компетентного специалиста для выполнения работы</p>
        </div>

        <ChevronRight className={styles.separator} />

        <div>
          {/* TODO: <Link to={}></Link>*/}
          <img src={Icon3} alt="" />
          <h3>Закройте заказ</h3>
          <p>Оставьте отзыв и оценку за проделанную работу</p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
