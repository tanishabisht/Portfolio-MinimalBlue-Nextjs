import { Navbar, Footer } from './'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
    const router = useRouter()
    return (
        <>
            {router.pathname!=="/blog" ? <div className="circleBg"></div> : null}            
            <Navbar/>
            <div className="layoutContainer">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout