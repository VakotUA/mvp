import React, { useState } from 'react'
import styles from './Login.module.css'
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'
import LoginedForm from './forms/LoginedForm'
import TestUserLogo from '../../assets/userLogo.jpg'

const adminUser = {
  email: 'vakotua.g@gmail.com',
  password: '1488',
  img: TestUserLogo,
  // TODO: Стату пользователя (посетитель, работник и тд.)
}

function Login({ setFormIsVisible, user, setUser }) {
  const [form, setForm] = useState(user.name ? 'Logout' : 'Login')
  const [error, setError] = useState('')

  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    img: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form === 'Login') {
      handleLogin(details) !== 1 ? setFormIsVisible(false) : console.log(error)
      return
    }
    if (form === 'Register') {
      handleRegister(details) !== 1
        ? setFormIsVisible(false)
        : console.log(error)
      return
    }
    handleLogout(details)
    setFormIsVisible(false)
  }

  const handleLogin = (details) => {
    // email и пароль улетают в backend на проверку.
    // Вернутся должно подтверждение что пользователь есть,
    // его {id, имя/фамилия, фотография и тд}.

    if (
      details.email.toLowerCase() !== adminUser.email.toLowerCase() ||
      details.password !== adminUser.password
    ) {
      setError("Details don't match!")
      return 1
    }

    setUser({ name: 'Glek', email: adminUser.email, img: TestUserLogo })
    setError('')
    return 0
  }

  const handleRegister = (details) => {
    // Тут должна быть проверка зарегестрирован ли пользователь
    // с таким email ну и дальше регистрация

    if (details.email.toLowerCase() === adminUser.email.toLowerCase()) {
      setError('User is already exists!')
      return 1
    }

    setUser({ name: details.name, email: details.email, img: TestUserLogo })
    setError('')
    return 0
  }

  const handleLogout = () => {
    setUser({ name: '', email: '', img: null })
    setError('')
    setForm('Login')
  }

  return (
    <div
      className={styles.bgEffect}
      // TODO: Закрытие формы при нажатии в не её области
      // onClick={(e) => {
      //   e.preventDefault()
      //   setFormIsVisible(false)
      // }}
    >
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          {form === 'Login' && !user.name && (
            <LoginForm
              setForm={setForm}
              details={details}
              setDetails={setDetails}
              error={error}
            />
          )}

          {form === 'Register' && !user.name && (
            <RegisterForm
              setForm={setForm}
              details={details}
              setDetails={setDetails}
              error={error}
            />
          )}

          {user.name && <LoginedForm user={user} />}

          <div className={styles.btns}>
            <button type="submit" className={`${styles.btn} ${styles.active}`}>
              {form === 'Login'
                ? 'Login'
                : form === 'Register'
                ? 'Register'
                : 'Logout'}
            </button>
            <button
              className={styles.btn}
              onClick={() => setFormIsVisible(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
