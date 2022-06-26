import React, { useState } from 'react'
import styles from './loginForm.module.css'

function LoginForm({ Login, error, setFormIsVisible }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Login(details) !== 1) setFormIsVisible(false)
    else console.log(error)
  }

  return (
    <div
      className={styles.bgEffect}
      // TODO: Закрытие формы при нажатии в не её области
      // onClick={(e) => {
      //   e.stopPropagation()
      //   setFormIsVisible(false)
      // }}
    >
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <div className={styles.loginForm}>
            <div className={styles.formTitle}>
              <h2>Login</h2>
              {error !== '' ? <div className={styles.error}>{error}</div> : ''}
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={(e) => {
                  setDetails({ ...details, name: e.target.value })
                }}
                value={details.name}
              />
              <label htmlFor="name">Name:</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => {
                  setDetails({ ...details, email: e.target.value })
                }}
                value={details.email}
                required
              />
              <label htmlFor="email">Email:</label>
            </div>
            <div className={styles.formGroup}>
              <input
                autoComplete=""
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setDetails({ ...details, password: e.target.value })
                }}
                value={details.password}
                required
              />
              <label htmlFor="password">Password:</label>
            </div>
            <button type="submit" className={styles.btn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
