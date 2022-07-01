import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Help.module.css'

function Help() {
  return (
    <section className={styles.help}>
      <div className={styles.hint}>
        <h3>Помочь с выбором подходящего специалиста?</h3>

        <p>
          Привет, скорее создавайте заказ и в течение 10 минут мы найдем лучшего
          специалиста.
        </p>

        {/* TODO: <Link to={}></Link> */}
        <Link to="/mvp/" className={`${styles.btn} ${styles.active}`}>
          Оформить заявку
        </Link>
      </div>
    </section>
  )
}

export default Help
