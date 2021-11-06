import { developmentProcess } from '../../../content/projects'
import style from './Process.module.scss'


const Process = () => {
  return (
    <div className={style.Container}>
        <h1 className={style.Header}>My Development Process</h1>
        <p className={style.Content}>Designing for me is evergreen and exciting because I'm constantly challenging my own creativity — recently, I've been particularly interested in <span>accessibility</span> and <span>user-centered processes</span>.</p>
        <div className={style.Flexbox}>
            {developmentProcess.map(e => (
                <div className={style.Card} key={e.phase}>
                    <p className={style.Number}>{e.num}</p>
                    <h2 className={style.Phase}>{e.phase}</h2>
                    {e.tasks.map((t,k) => <p key={k}>{t}</p>)}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Process