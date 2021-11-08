import { stacks } from '../../content/home'

const Tech = () => {
    return (
        <section className="container techContainer">
            <h1 className="header techContainer__header">Tech I have worked with</h1>
            <div className="techContainer__socialHandles">
                {stacks.map(e => (
                    <span data-text={e.name} className={`techContainer__socialHandles__tooltip ${e.isFav?"icon_fav":null}`}>
                        <i className={`fab fa-${e.icon}`}></i>
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Tech