import Head from 'next/head'
import { SelectedProjects, Projects } from '../components'


const Works = () => {
  return (
    <>
      <Head>
        <title>Tanisha Bisht | Works</title>
      </Head>
      <div>
        <SelectedProjects />
        <Projects />
      </div>
    </>
  )
}


export default Works