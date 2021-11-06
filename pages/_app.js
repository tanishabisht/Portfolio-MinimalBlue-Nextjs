import Head from 'next/head'
import { Layout } from '../components'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
      </Head>
      <Layout><Component {...pageProps} /></Layout>
    </>
  )
}

export default MyApp
