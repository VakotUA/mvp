import React from 'react'
import styles from './Categories.module.css'
import { BiCategory } from 'react-icons/bi'

import { VscHome } from 'react-icons/vsc'
import { BsTruck, BsMouse3 } from 'react-icons/bs'
import { AiOutlineBook } from 'react-icons/ai'
import { BiBriefcase } from 'react-icons/bi'
import { GiSportMedal, GiGardeningShears } from 'react-icons/gi'

const initialState = [
  { id: 0, lable: 'Дом', img: <VscHome /> },
  { id: 1, lable: 'Доставка', img: <BsTruck /> },
  { id: 2, lable: 'Фриланс', img: <BsMouse3 /> },
  { id: 3, lable: 'Преподователи', img: <AiOutlineBook /> },
  { id: 4, lable: 'Бизнес', img: <BiBriefcase /> },
  { id: 5, lable: 'Спорт', img: <GiSportMedal /> },
  { id: 6, lable: 'Сад', img: <GiGardeningShears /> },
]

function Categories() {
  return (
    <section className={styles.categories}>
      <ul>
        {initialState.slice(0, 5).map((item) => (
          <li key={item.id}>
            <span>{item.img}</span>
            {item.lable}
          </li>
        ))}
        <li>
          <span>
            <BiCategory />
          </span>
          Все категории
        </li>
      </ul>
    </section>
  )
}

export default Categories
