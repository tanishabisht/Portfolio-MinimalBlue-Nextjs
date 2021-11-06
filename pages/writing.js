import Head from 'next/head'
import style from "../styles/Writing.module.scss"


const writingContent = [
    {name:"Prevent Scroll Chaining With Overscroll Behavior", date:"21 Oct 2021"},
    {name:"Prevent Scroll Chaining With Overscroll Behavior", date:"21 Oct 2021"},
    {name:"Prevent Scroll Chaining With Overscroll Behavior", date:"21 Oct 2021"},
    {name:"Prevent Scroll Chaining With Overscroll Behavior", date:"21 Oct 2021"},
    {name:"Prevent Scroll Chaining With Overscroll Behavior", date:"21 Oct 2021"},
]


const Writing = () => {
    return (
        <>
            <Head>
                <title>Tanisha Bisht | Writing</title>
            </Head>
            <div className={style.Container}>
                <h1 className={style.Header}>Some of my writings</h1>
                <p className={style.Content}>Designing for me is evergreen and exciting because I'm constantly challenging my own creativity — recently, I've been particularly interested in <span>accessibility</span> and <span>user-centered processes</span>.</p>
                {writingContent.map(e => (
                    <div className={style.Blog}>
                        <a href="/blog">
                            <h1>{e.name}</h1>
                            <p className={style.Date}>{e.date}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Writing