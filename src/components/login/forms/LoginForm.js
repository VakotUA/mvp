import React from 'react'
import styles from '../Login.module.css'

function LoginForm({ setForm, details, setDetails, error }) {
  return (
    <div className={styles.formContent}>
      <div className={styles.formTitle}>
        <div className={styles.title}>
          <h2>Login</h2>
          <p onClick={() => setForm('Register')}>
            Don't have an account? Register now
          </p>
        </div>

        {error !== '' ? <div className={styles.error}>{error}</div> : ''}
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

export default LoginForm
