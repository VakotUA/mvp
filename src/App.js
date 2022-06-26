import React, { useState } from 'react'
import Header from './components/header/Header'
import LoginForm from './components/login/loginForm'
import styles from './App.module.css'
import TestUserLogo from './assets/userLogo.jpg'

const adminUser = {
  email: 'vakotua.g@gmail.com',
  password: '1488',
  img: TestUserLogo,
  // TODO: Стату пользователя (посетитель, работник и тд.)
}

function App() {
  const [user, setUser] = useState({ name: '', email: '', img: null })
  const [loginError, setLoginError] = useState('')
  const [formIsVisible, setFormIsVisible] = useState(false)

  const Login = (details) => {
    if (
      details.email.toLowerCase() !== adminUser.email.toLowerCase() ||
      details.password !== adminUser.password
    ) {
      setLoginError('Details do not match!')
      return 1
    }

    setUser({ name: details.name, email: adminUser.email, img: adminUser.img })
    setLoginError('')
    return 0
  }

  // const Logout = () => {
  //   setUser({ name: '', email: '' })
  //   setLoginError('')
  // }

  return (
    <div className={styles.app}>
      {formIsVisible && (
        <LoginForm
          Login={Login}
          error={loginError}
          setFormIsVisible={setFormIsVisible}
        />
      )}
      <Header user={user} setFormIsVisible={setFormIsVisible} />
    </div>
  )
}

export default App
