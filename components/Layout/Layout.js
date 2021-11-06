import { Navbar, Footer } from '../index'
import style from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <>
            <div className={style.Circle}></div>
            <Navbar/>
            <div className={style.Container}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout