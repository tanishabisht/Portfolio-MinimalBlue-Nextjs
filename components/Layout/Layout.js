import { Navbar, Footer } from '../index'
import style from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className={style.Circle}></div>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout