import style from './Tech.module.scss'
import { stacks } from '../../../content/home'

const Tech = () => {
    return (
        <section className={style.Container}>
            <h1 className={style.Header}>Tech I have worked with</h1>
            <div className={style.SocialHandlers}>
                {stacks.map(e => <span data-text={e.name} className={style.tooltip}><i className={`fab fa-${e.icon}`}></i></span>)}
            </div>
        </section>
    )
}

export default Tech