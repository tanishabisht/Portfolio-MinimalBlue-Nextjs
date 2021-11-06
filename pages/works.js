import Head from 'next/head'
import { SelectedProjects, Projects, Process } from '../components'


const Works = () => {
  return (
    <>
      <Head>
        <title>Tanisha Bisht | Works</title>
      </Head>
      <div>
        <SelectedProjects />
        <Projects />
        <Process />
      </div>
    </>
  )
}


export default Works