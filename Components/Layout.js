import Navbar from './Navbar'
import Footer from './Footer'
import classes from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={classes.Container}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout