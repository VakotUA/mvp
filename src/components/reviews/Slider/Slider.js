import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import styles from './Slider.module.css'

function Slider({ data }) {
  const [active, setActive] = useState(0)

  function toggleActive(newActive) {
    if (newActive >= data.length) {
      setActive(0)
      return
    }

    if (newActive < 0) {
      setActive(data.length - 1)
      return
    }

    setActive(newActive)
  }

  // TODO: Посадить Slider на таймер

  return (
    <div className={styles.slider}>
      <div
        className={`${styles.btn} ${styles.btnLeft}`}
        onClick={() => toggleActive(active - 1)}
      >
        <ChevronLeft />
      </div>
      <div
        className={`${styles.btn} ${styles.btnRight}`}
        onClick={() => toggleActive(active + 1)}
      >
        <ChevronRight />
      </div>

      <div className={styles.content}>
        {data &&
          data.map((item) => {
            return (
              <div
                className={`${styles.slide} ${
                  data.indexOf(item) === active ? styles.active : ''
                }`}
                style={{ backgroundImage: `url(${item.bgImage}` }}
              >
                <div className={styles.review}>
                  <img src={item.img} alt={item.id} key={item.id} />
                  <h4>{item.userName}</h4>
                  <p>{item.userPost}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })}
      </div>

      <div className={styles.options}>
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActive(data.indexOf(item))}
                className={data.indexOf(item) === active ? styles.active : ''}
              ></div>
            )
          })}
      </div>
    </div>
  )
}

export default Slider
