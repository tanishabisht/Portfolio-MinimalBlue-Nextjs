import Head from 'next/head'


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
            <div className="container">
                <h1 className="header">Some of my writings</h1>
                <p className="writingContent">Designing for me is evergreen and exciting because I'm constantly challenging my own creativity — recently, I've been particularly interested in <span>accessibility</span> and <span>user-centered processes</span>.</p>
                {writingContent.map((e,k) => (
                    <div className="writingBlog" key={k}>
                        <a href="/blog">
                            <h1 className="writingBlog__name">{e.name}</h1>
                            <p className="writingBlog__date">{e.date}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Writing