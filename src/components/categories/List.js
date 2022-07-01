import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'react-bootstrap-icons'
import styles from './Categories.module.css'

function getTotalCount(list) {
  let count = 0
  list.map((item) => (count += item.count))
  return count
}

function List({ category }) {
  const [isShowAll, setIsShowAll] = useState(false)

  return (
    <>
      {/* TODO: <img src={category.img} alt="category_image" /> */}
      <div className={styles.title}>
        <Link to={'/mvp/'}>{category.title}</Link>
        <small>{getTotalCount(category.list)}</small>
      </div>
      <ul className={styles.list}>
        {category.list
          .slice(0, isShowAll ? category.list.length : 5)
          .map((item, index) => (
            <li key={index}>
              <div>
                <Link to={'/mvp/'}>{item.title}</Link>
                <small>{item.count}</small>
              </div>
            </li>
          ))}
      </ul>
      {!isShowAll && (
        <div className={styles.btn} onClick={() => setIsShowAll(true)}>
          <p>Show All</p>
          <span>
            <ChevronDown />
          </span>
        </div>
      )}
    </>
  )
}

export default List
