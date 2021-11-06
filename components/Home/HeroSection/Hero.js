import style from './Hero.module.scss'
import Image from 'next/image'


const Hero = () => {
    return (
        <section className={style.Container}>
            <div className={style.Content}>
                <p className={style.SubHeading}>Who am I?</p>
                <h1 className={style.Name}>Tanisha Bisht</h1>
                <p>"Software developer from India who crafts pleasing and functional web experiences"</p>
                <div className={style.BtnContainer}>
                    <button className={style.BtnRegular}>See my Resume</button>
                    <button className={style.BtnOutline}>Contact Me</button>
                </div>
            </div>
            <div className={style.ImgContainer}>
                <Image src='/dark_me.png' width={420} height={585} objectFit="cover"/>
            </div>
        </section>
    )
}

export default Hero