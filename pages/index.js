import Head from 'next/head'
import { HeroSection, AboutSection, TechSection } from '../components'
// import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <HeroSection />
        <AboutSection />
        <TechSection />
      </div>
    </>
  )
}

export default Home