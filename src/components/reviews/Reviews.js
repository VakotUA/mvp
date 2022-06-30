import React from 'react'

import Slider from './Slider/Slider'

import styles from './Reviews.module.css'

function Reviews({ reviews }) {
  return (
    <section className={styles.reviews}>
      {reviews && <Slider data={reviews} />}
    </section>
  )
}

export default Reviews
