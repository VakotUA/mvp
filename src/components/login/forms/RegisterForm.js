import React, { useState } from 'react'
import styles from '../Login.module.css'

function RegisterForm({ details, setDetails, setForm, error }) {
  return (
    <div className={styles.formContent}>
      <div className={styles.formTitle}>
        <div className={styles.title}>
          <h2>Register</h2>
          <p onClick={() => setForm('Login')}>Have an account? Login now</p>
        </div>
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
          required
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
    </div>
  )
}

export default RegisterForm
