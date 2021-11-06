import { experience } from '../../content/home'

const Experience = () => {
    return (
        <section className="container">
            <h1 className="header">My Work Experience</h1>
            <p>From campus clubs to startups</p>
            <div className="expGrid">
                {experience.map(e => (
                    <div className="expGrid__card">
                        <h2 className="expGrid__card__company">{e.company}</h2>
                        <h3 className="expGrid__card__role">{e.role}</h3>
                        <p className="expGrid__card__duration">{e.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience