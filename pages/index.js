import Head from 'next/head'
import { HeroSection, AboutSection, TechSection, ExperienceSection } from '../components'


const Home = () => {
  return (
    <>
      <Head>
        <title>Tanisha Bisht</title>
      </Head>
      <div>
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ExperienceSection />
      </div>
    </>
  )
}


export default Home