import Head from 'next/head'
import { Navbar, Footer } from './'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
    const router = useRouter()

    return (
        <>
            <Head>
                <body className="dark" />
            </Head>
            <div>
                {router.pathname!=="/blog" ? <div className="circleBg"></div> : null}            
                <Navbar/>
                <div className="layoutContainer">
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Layout