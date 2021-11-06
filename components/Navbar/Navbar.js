import Link from 'next/link'
import Image from 'next/image'
import style from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={style.Container}>
            <div className={style.Logo}>
                <Link href='/'><a><Image src='/favicon.ico' width={50} height={50} /></a></Link>
                <span>TANISHA</span>
            </div>
            <Link href='/works'><a>works</a></Link>
            <Link href='https://github.com/tanishabisht'><a target="_blank">github</a></Link>
        </nav>
    )
}

export default Navbar