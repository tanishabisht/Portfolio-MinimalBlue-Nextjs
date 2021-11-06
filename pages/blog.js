import Head from 'next/head'
import style from "../styles/Blog.module.scss"
import Codepen from "react-codepen-embed";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Tanisha Bisht | Blog</title>
                {/* <link rel="stylesheet" href=""/> */}
            </Head>
            <div className={style.Container}>
                <h1 className={style.Header}>Prevent Scroll Chaining With Overscroll Behavior</h1>
                <div className={style.Credits}>
                    <p>Posted on: Aug 15, 2021</p>
                    <p>Written by Tanisha</p>
                    <p>Edited by Aditya</p>
                    <p>Illustrations by Sudhanshu, Mohit</p>
                </div>
                <div className={style.Content}>

                    <div className={style.IntroContainer}>
                        <p className={style.Number}>24</p>
                        <p className={style.Intro}>There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients.</p>
                    </div>

                    <p>There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients and color functions and in combination with CSS custom properties. We'll learn the syntax for each, view basic demos of their functionality, and explore practical use cases.</p>
                    <Codepen hash="RWxmbb" user="michaelrossi" /><br/><br/>

                    <p>There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients and color functions and in combination with CSS custom properties. We'll learn the syntax for each, view basic demos of their functionality, and explore practical use cases.</p>

                </div>
            </div>
        </>
    )
}


export default Blog