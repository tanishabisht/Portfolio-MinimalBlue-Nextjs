import { Navbar, Footer } from '../index'
import { useRouter } from 'next/router'
import style from './Layout.module.scss'

const Layout = ({children}) => {
    const router = useRouter()
    return (
        <>
            {router.pathname!=="/blog" ? <div className={style.Circle}></div> : null}            
            <Navbar/>
            <div className={style.Container}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout