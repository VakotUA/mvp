import React, { useState } from 'react'
import styles from './Header.module.css'
import { IoIosSearch } from 'react-icons/io'
import { RiUserAddLine } from 'react-icons/ri'
import { FiMail, FiBell, FiStar } from 'react-icons/fi'

function Header({ user, setFormIsVisible, search, setSearch }) {
  const [selectIsActive, setSelectIsActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.navigationBlock}>
          <a className={styles.logo} href="/mvp/">
            <div className={styles.logo}></div>
          </a>

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
            <IoIosSearch className={styles.searchIcon} />
          </div>
        </div>

        <div className={styles.userBlock}>
          {user.name && (
            <div className={styles.notification}>
              <FiMail onClick={() => 'TODO: Show mails'} />
              <FiBell onClick={() => 'TODO: Show notifiacions'} />
              <FiStar onClick={() => 'TODO: Show favorite'} />
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
            <RiUserAddLine
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
