import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Find.module.css'

import PromImg from '../../assets/prom.png'
import EasyPayImg from '../../assets/easy-pay.png'

function Find() {
  return (
    <section className={styles.find}>
      <h2>
        Ищите проверенных специалистов или выгодные заказы с помощью сервиса{' '}
        <a href="https://kabanchik.ua/" target="_blank" rel="noreferrer">
          Kabanchik.ua
        </a>
      </h2>

      <div className={styles.btns}>
        <Link to="/mvp/" className={`${styles.btn} ${styles.active}`}>
          Найти специалиста
        </Link>
        <Link to="/mvp/" className={styles.btn}>
          Стать специалистом
        </Link>
      </div>

      <h4>НАШИ ПАРТНЕРЫ</h4>

      <div className={styles.partners}>
        <a href="https://prom.ua/ua/" target="_blank" rel="noreferrer">
          <img src={PromImg} alt="prom" />
        </a>

        <a href="https://easypay.ua/" target="_blank" rel="noreferrer">
          <img src={EasyPayImg} alt="easy-pay" />
        </a>
      </div>
    </section>
  )
}

export default Find
