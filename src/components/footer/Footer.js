import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

import {
  Facebook,
  Instagram,
  Youtube,
  GeoAlt,
  Envelope,
  Clock,
  ChatLeft,
} from 'react-bootstrap-icons'
import Logo from '../../assets/logo-white.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.media}>
          <div>
            <span>
              <Link to="/mvp/">
                <img src={Logo} alt="kabanchik" />
              </Link>
            </span>
            <span>
              <a href="https://www.facebook.com/kabanchik.ua">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/kabanchik.ua/">
                <Instagram />
              </a>
              <a href="https://www.youtube.com/c/KabanchikUaPlus">
                <Youtube />
              </a>
            </span>
          </div>
          <div>
            <span>
              <GeoAlt className={styles.icon} />
              <p>г. Киев, Харьковское шоссе, 201/203, корпус 2-А</p>
            </span>
            <span>
              <Envelope className={styles.icon} />
              <a href="https://t.me/vakot_ua">support@kabanchik.ua</a>
            </span>
            <span>
              <Clock className={styles.icon} />
              <p>
                Пн — Пт: c 8:00 до 20:00
                <br />
                Сб — Вс: c 9:00 до 18:00
              </p>
            </span>
            <span>
              <ChatLeft className={styles.icon} />
              <p>Пн — Пт: c 10:00 до 18:00</p>
            </span>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={`${styles.info} ${styles.about}`}>
            <h3>О нас</h3>
            <a href="/mvp/">О проекте</a>
            <a href="/mvp/">Контакты</a>
            <a href="/mvp/">Мобильное приложение</a>
            <a href="/mvp/">Дневник Кабанчика</a>
            <a href="/mvp/">Магазин Кабанчика</a>
            <a href="/mvp/">Наши партнёры</a>
            <a href="/mvp/">Мы в Казахстане</a>
          </div>
          <div className={`${styles.info} ${styles.faq}`}>
            <h3>Как это работает</h3>
            <a href="/mvp/">Как заказать услугу</a>
            <a href="/mvp/">Работа в Украине</a>
            <a href="/mvp/">Преимущества для компаний</a>
            <a href="/mvp/">Как зарегистрировать ФЛП</a>
            <a href="/mvp/">Гарантия и безопасность</a>
            <a href="/mvp/">Интересные задания</a>
            <a href="/mvp/">Последние отзывы</a>
            <a href="/mvp/">Топ исполнителей</a>
          </div>
          <div className={`${styles.info} ${styles.cities}`}>
            <h3>Города</h3>
            <a href="/mvp/">Киев</a>
            <a href="/mvp/">Львов</a>
            <a href="/mvp/">Одесса</a>
            <a href="/mvp/">Ивано-Франковск</a>
            <a href="/mvp/">Ужгород</a>
            <a href="/mvp/">Днепр</a>
          </div>
          <div className={`${styles.info} ${styles.help}`}>
            <h3>Помощь</h3>
            <a href="/mvp/">Вопросы и ответы</a>
            <a href="/mvp/">Публичная оферта</a>
            <a href="/mvp/">Правила конфиденциальности</a>
            <a href="/mvp/">Служба поддержки</a>
          </div>
          <div className={`${styles.info} ${styles.usefulLinks}`}>
            <h3>Полезные ссылки</h3>
            <a href="/mvp/">Фриланс</a>
            <a href="/mvp/">Работа в интернете</a>
            <a href="/mvp/">Репетитор по математике Киев</a>
            <a href="/mvp/">Репетитор английского Киев</a>
            <a href="/mvp/">Клининг Киев</a>
            <a href="/mvp/">Цены на услуги Киев</a>
            <a href="/mvp/">Все прайсы</a>
            <a href="/mvp/">Все категории услуг</a>
            <a href="/mvp/">Все категории работ</a>
            <a href="/mvp/">Популярные услуги</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
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
        <div>
          <p>
            © Kabanchik.ua, 2012-2022
            <br /> Сайт на 100% сделан из повторно переработанных пикселей
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
