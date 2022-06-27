import React from 'react'
import styles from '../Login.module.css'

function LoginedForm({ user }) {
  return (
    <div className={styles.formContent}>
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
      <img src={user.img} alt="avatar" />
    </div>
  )
}

export default LoginedForm
