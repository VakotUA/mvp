import React from 'react'
import styles from './Categories.module.css'
import { BiCategory } from 'react-icons/bi'

import { VscHome } from 'react-icons/vsc'
import { BsTruck, BsMouse3 } from 'react-icons/bs'
import { AiOutlineBook } from 'react-icons/ai'
import { BiBriefcase } from 'react-icons/bi'
import { GiSportMedal, GiGardeningShears } from 'react-icons/gi'

const initialState = [
  { id: 0, lable: 'Дом', link: '/mvp/', img: <VscHome /> },
  { id: 1, lable: 'Доставка', link: '/mvp/', img: <BsTruck /> },
  { id: 2, lable: 'Фриланс', link: '/mvp/', img: <BsMouse3 /> },
  { id: 3, lable: 'Преподователи', link: '/mvp/', img: <AiOutlineBook /> },
  { id: 4, lable: 'Бизнес', link: '/mvp/', img: <BiBriefcase /> },
  { id: 5, lable: 'Спорт', link: '/mvp/', img: <GiSportMedal /> },
  { id: 6, lable: 'Сад', link: '/mvp/', img: <GiGardeningShears /> },
]

function Categories() {
  return (
    <section className={styles.categories}>
      <ul>
        {initialState.slice(0, 5).map((item) => (
          <li key={item.id} className={styles.category}>
            <a href={item.link}>
              <span className={styles.categoryIcon}>{item.img}</span>
              {item.lable}
            </a>
          </li>
        ))}
        <li className={styles.category}>
          <a href="/mvp/">
            <span className={styles.categoryIcon}>
              <BiCategory />
            </span>
            Все категории
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Categories
