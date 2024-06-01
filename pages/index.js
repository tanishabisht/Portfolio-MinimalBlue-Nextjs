import Head from 'next/head'
import { HeroSection, AboutSection, TechSection, ExperienceSection } from '../components'
import { name } from '../content/home'

const Home = () => {
  return (
    <>
      <Head>
        <title>{name}</title>
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