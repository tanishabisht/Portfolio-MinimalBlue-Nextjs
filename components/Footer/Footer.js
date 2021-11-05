import style from './Footer.module.scss'


const Footer = () => {
    return (
        <footer className={style.Container}>
            <div className={style.Credits}>Designed and built by Tanisha Bisht</div>
            <ul className={style.SocialHandlers}>
                <li><a href="#"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer