import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import styles from './ChangePassword.module.css'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.changeHeading}>Change Password</h1>
      <p className={styles.changeHeading}>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default ChangePassword
