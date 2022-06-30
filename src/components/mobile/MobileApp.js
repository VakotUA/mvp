import React from 'react'
import styles from './Mobile.module.css'

function MobileApp() {
  return (
    <section className={styles.mobile}>
      <div>
        <img src={require('../../assets/mobile-app.png')} alt="mobile-app" />
      </div>

      <div>
        <h2>
          <a href="https://kabanchik.ua/" target="_blank" rel="noreferrer">
            Kabanchik.ua
          </a>{' '}
          — тысячи специалистов в вашем смартфоне
        </h2>
        <p>
          Загружайте бесплатное приложение и заказывайте любую услугу прямо на
          ходу
        </p>

        <div className={styles.links}>
          <a
            href="https://play.google.com/store/apps/details?id=ua.kabanchik.customer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require('../../assets/google-play.png')}
              alt="google-play"
            />
          </a>
          <a
            href="https://apps.apple.com/ua/app/kabanchik-ua-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7-%D1%83%D1%81%D0%BB%D1%83%D0%B3/id1193523632?l=ru"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require('../../assets/app-store.png')} alt="app-store" />
          </a>
          <a
            href="https://appgallery.cloud.huawei.com/ag/n/app/C101189889?channelId=kabanchik.customer&id=31c0ef3aa4d84184ae9bc8596bcd5d2e&s=95BA3FA33F51895A08F86B47AEFB262C36F"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require('../../assets/app-gallery.png')}
              alt="app-gallery"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MobileApp
