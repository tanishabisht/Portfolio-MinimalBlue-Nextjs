import { top6Projects } from '../../../content/projects'
import style from './Projects.module.scss'

const Projects = () => {
  return (
    <div className={style.Container}>
        <h1 className={style.Header}>Some more projects</h1>
        <div className={style.Flexbox}>

            {top6Projects.map(e => (
                <a className={`${style.Card} ${e.isFav===true?style.Card1:null}`} href={e.ghLink} key={e.name}>
                    {e.isFav===true?<i class="fa fa-heart"></i>:null}
                    <h3>{e.name}</h3>
                    <p>{e.desc}</p>
                    <div className={style.Stacks}>
                        {e.stacks.map((s,k) => <span key={k}>{s}</span>)}
                    </div>
                </a>
            ))}
            
            <a className={`${style.Card} ${style.CardLast}`} href="/projects">
                <h3>See more projects</h3>
            </a>

        </div>
    </div>
  )
}

export default Projects