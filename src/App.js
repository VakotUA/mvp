import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Main from './components/main/Main'
import Categories from './components/categories/Categories'
import Help from './components/help/Help'
import FAQ from './components/faq/FAQ'

import styles from './App.module.css'

import data from './data'

function App() {
  const [search, setSearch] = useState('Hello, World!')
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

      <Routes>
        {data.mainContent.map((content) => (
          <Route
            key={content.id}
            path={content.link}
            element={
              <Main
                content={content.content}
                search={search}
                setSearch={setSearch}
              />
            }
          />
        ))}
      </Routes>

      <Categories categories={data.categories} />

      <Help />
      <FAQ />
      {/* <Reviews /> */}
      {/* <MobileApp /> */}
      {/* <Geography /> */}
      {/* <Find /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
