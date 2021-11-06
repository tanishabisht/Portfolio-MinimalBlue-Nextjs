import Head from 'next/head'
import Codepen from "react-codepen-embed";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Tanisha Bisht | Blog</title>
            </Head>
            <div className="blogContainer">
                <h1 className="header blogContainer__header">Prevent Scroll Chaining With Overscroll Behavior</h1>
                <div className="blogContainer__credits">
                    <p>Posted on: Aug 15, 2021</p>
                    <p>Written by Tanisha</p>
                    <p>Edited by Aditya</p>
                    <p>Illustrations by Sudhanshu, Mohit</p>
                </div>
                <div className="blogContainer__content">

                    <div className="blogDesc">
                        <p className="blogDesc__number">24</p>
                        <p className="blogDesc__content">There are currently four well-supported math functions in CSS. I've found each of them to be extremely useful in my daily work. These CSS functions can be used in perhaps unexpected ways, such as within gradients.</p>
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