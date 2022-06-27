import React, { useState } from 'react'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Main from './components/main/Main'
import Categories from './components/categories/Categories'
import styles from './App.module.css'

function App() {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState({ name: '', email: '', img: null })
  const [formIsVisible, setFormIsVisible] = useState(false)

  return (
    <div className={styles.app}>
      {formIsVisible && (
        <Login
          setFormIsVisible={setFormIsVisible}
          user={user}
          setUser={setUser}
        />
      )}
      <Header
        user={user}
        setFormIsVisible={setFormIsVisible}
        search={search}
        setSearch={setSearch}
      />
      <Main search={search} setSearch={setSearch} />
      <Categories />
    </div>
  )
}

export default App
