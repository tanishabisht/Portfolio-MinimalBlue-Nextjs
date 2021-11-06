import { useState } from 'react'
import { allOtherProjects } from '../content/projects'
import style from '../styles/Projects.module.scss'

const Projects = () => {

    const [category, setCategory] = useState("portfolios")
    const onSelectCategory = (e) => setCategory(e.target.textContent)

    return (
        <div className={style.Container}>
            <h1 className={style.Header}>Some more projects</h1>

            <div className={style.CategoriesContainer}>
                {Object.keys(allOtherProjects).map((e,k) => (
                    <span className={category===e?style.Active:null} onClick={onSelectCategory} key={k}>{e}</span>
                ))}
            </div>

            <div className={style.Flexbox}>
                {allOtherProjects[category].map(e => (
                    <a className={`${style.Card} ${e.isFav===true?style.Card1:null}`} href={e.ghLink} key={e.name}>
                        {e.isFav===true?<i className="fa fa-heart"></i>:null}
                        <h3>{e.name}</h3>
                        <p>{e.desc}</p>
                        <div className={style.Stacks}>
                            {e.stacks.map((s,k) => <span key={k}>{s}</span>)}
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Projects