import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1 id='landingTitle'>Plan.e</h1>
      <h3>Making sure you never have to plan a trip alone again </h3>
      <br/>
      <h2>Hello, {user ? user.name : 'friend'}</h2>

    </main>
  )
}

export default Landing
