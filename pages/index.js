import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h2 className={styles.title}>HOME PAGE</h2>
      </div>
    </>
  )
}

export default Home