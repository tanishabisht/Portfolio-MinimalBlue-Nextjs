import style from './About.module.scss'


const About = () => {
    return (
        <section className={style.Container}>
            <div className={style.Row}>
                <div className={style.Col}>
                    <p>Things I have explored ...</p>
                    <h1>UI . <span>UX . web dev .</span> data science . ML . <span>open source ...</span> copy paste :p</h1>
                </div>
                <div className={style.Col}>
                    <p>My forte ...</p>
                    <p>I build website solutions</p>
                    <h1><span>MERN Stack .</span> Open Source</h1>
                </div>
            </div>
            <div className={style.Row}>
                <div className={style.Col}>
                    <p>What drives me?</p>
                    <h1>novelty . <span>working in a team .</span> creating beautiful memories along the journey</h1>
                </div>
                <div className={style.Col}>
                    <p>My Qualities ...</p>
                    <h1>Quick learner . Clean work . Collaborative . Novelty seeker</h1>
                </div>
            </div>
        </section>
    )
}

export default About