import style from './SelectedProjects.module.scss'

const SelectedProjects = () => {
  return (
    <div className={style.Container}>
        <h1 className={style.Header}>Selected from Collection</h1>

        <div className={`${style.Card} ${style.Card1}`}>
            <p className={style.Number}>01</p>
            <div className={style.Content}>
                <h1>LunarOps</h1>
                <div className={style.Links}>
                    <a href="https://github.com/tanishabisht/LunarOps" target="_blank">Github</a>
                    <a href="https://www.youtube.com/watch?v=DtDYor2o5R8&feature=youtu.be" target="_blank">Video</a>
                </div>
            </div>
        </div>

        <div className={`${style.Card} ${style.Card2}`}>
            <p className={style.Number}>02</p>
            <div className={style.Content}>
                <h1>Eureka</h1>
                <div className={style.Links}>
                    <a href="https://github.com/tanishabisht/CaffeineOverflow-FrontEnd" target="_blank">Github</a>
                    <a href="https://www.youtube.com/watch?v=llKI-qmbowA&t=6s" target="_blank">Video</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SelectedProjects