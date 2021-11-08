import Image from 'next/image'
import { useTheme } from 'next-themes'


const Hero = () => {
    const { theme, setTheme } = useTheme()

    return (
        <section className="heroContainer">
            <div className="contentCol">
                <p className="contentCol__subheading">Who am I?</p>
                <h1 className="contentCol__name">Tanisha Bisht</h1>
                <p>"Software developer from India who crafts pleasing and functional web experiences"</p>
                <div className="contentCol__btns">
                    <button className="contentCol__btns__regular">See my Resume</button>
                    <button className="contentCol__btns__outline">Contact Me</button>
                </div>
            </div>
            <div className="imageCol">
                {
                    theme==="light" ? 
                    <Image src='/light_me.png' width={420} height={585}/> :
                    <Image src='/dark_me.png' width={420} height={585}/>
                }
            </div>
        </section>
    )
}

export default Hero