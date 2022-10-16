import styles from '../../styles/Home.module.css'
import Header from '../components/layouts/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Home page</h1>
      </main>
    </div>
  )
}
