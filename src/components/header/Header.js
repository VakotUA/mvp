import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

import * as Icons from 'react-bootstrap-icons'

function Header({
  user,
  setFormIsVisible,
  search,
  setSearch,
  setSelectedCategory,
}) {
  const [selectIsActive, setSelectIsActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.navigationBlock}>
          <Link className={styles.logo} to="/mvp/">
            <div
              className={styles.logo}
              onClick={() => setSelectedCategory(null)}
            ></div>
          </Link>

          <div
            className={`${styles.select} ${
              selectIsActive ? styles.active : ''
            }`}
          >
            <select
              onClick={() => setSelectIsActive(!selectIsActive)}
              defaultValue="none"
            >
              <option value="none" disabled hidden>
                Создать заказ
              </option>
              <option value="Ремонт элетроники">Ремонт элетроники</option>
              <option value="Ремонт техники">Ремонт техники</option>
              <option value="Уборка">Уборка</option>
            </select>
            <span className={styles.selectCustomArrow}></span>
          </div>

          <div className={styles.search}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Что нужно сделать?"
            />
            <button>
              <Icons.Search />
            </button>
          </div>
        </div>

        <div className={styles.userBlock}>
          {user.name && (
            <div className={styles.notification}>
              <Icons.Envelope />
              <Icons.Bell />
              <Icons.Star />
            </div>
          )}

          {user.name ? (
            <div className={styles.user} onClick={() => setFormIsVisible(true)}>
              <div className={styles.info}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
              <img src={user.img} alt="avatar" />
            </div>
          ) : (
            <Icons.PersonPlus
              className={styles.userIcon}
              onClick={() => setFormIsVisible(true)}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
