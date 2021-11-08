import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        if(theme==="light") setTheme('dark')
        else setTheme('light')
    }
    
    return (
        <nav className="nav">
            <div className="nav__logo">
                <Link href='/'><a><Image src='/favicon.ico' width={50} height={50} /></a></Link>
                <span>TANISHA</span>
            </div>
            <Link href='/works'><a>works</a></Link>
            <Link href='https://github.com/tanishabisht'><a target="_blank">github</a></Link>
            <span onClick={changeTheme} className="nav__themeToggle">
                {theme==="light" ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </span>
        </nav>
    )
}

export default Navbar