import style from './Experience.module.scss'
import { experience } from '../../../content/home'

const Experience = () => {
    return (
        <section className={style.Container}>
            <h1 className={style.Header}>My Work Experience</h1>
            <p>From campus clubs to startups</p>
            <div className={style.Grid}>
                {experience.map(e => (
                    <div className={style.Card}>
                        <h2 className={style.Company}>{e.company}</h2>
                        <h3 className={style.Role}>{e.role}</h3>
                        <p className={style.Duration}>{e.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience