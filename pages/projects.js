import { useState } from 'react'


const allOtherProjects = {
    portfolios: [
        {
            name:'Biocom Project Pandemic',
            desc:'One-stop destination for all Covid-19 pandemic-related information and developments',
            ghLink:'https://biocomsrm.org/',
            stacks:['html', 'css', 'js', 'bootstrap', 'google-analytics'],
            isFav: true
        },
        {
            name:'Jayvardhan Portfolio',
            desc:'A minimal portfolio template for a client',
            ghLink:'https://github.com/tanishabisht/Jayvardhan-Portfolio',
            stacks:['reactjs', 'gh-pages', 'scss'],
            isFav: false
        },
        {
            name:'Eeshan Portfolio',
            desc:'Neon dark themed portfolio website for a client',
            ghLink:'https://github.com/tanishabisht/Eeshan-Portfolio',
            stacks:['reactjs', 'gh-pages', 'scss'],
            isFav: false
        },
        {
            name:'Yuvika Gallery Portfolio',
            desc:'A minimal gallary portfolio website for a client to display their anime art works',
            ghLink:'https://github.com/tanishabisht/Project-Yuvi',
            stacks:['reactjs', 'gh-pages', 'css-modules'],
            isFav: false
        },
        {
            name:'Jishnu Portfolio',
            desc:'Portfolio website with parallax effect for a client',
            ghLink:'https://github.com/tanishabisht/JishnuGoyal',
            stacks:['reactjs', 'gh-pages', 'parallax-effect', 'css-modules', 'emailjs'],
            isFav: true
        }
    ],
    scrapers: [
        {
            name:'scrapers',
            desc:'Some mini scraper projects',
            ghLink:'https://github.com/tanishabisht/Scrapers',
            stacks:['python', 'selenium', 'xlsxwriter'],
            isFav: false
        },
        {
            name:'SRM ELab print report',
            desc:'Automation tool for downloading DAA reports from ELab',
            ghLink:'https://github.com/tanishabisht/SRM-Elab-DAA-Print-Report',
            stacks:['python', 'selenium'],
            isFav: true
        }
    ],
    documentation: [
        {
            name:'Burger Builder',
            desc:'This is a burger buider application with well documented best practices in React',
            ghLink:'https://github.com/tanishabisht/MiniProj-ReactJS-Burger-Builder',
            stacks:['reactjs', 'redux', 'materialize-css', 'axios'],
            isFav: true
        },
        {
            name:'NextJS NetNinja',
            desc:'Beginner friendly project in next js',
            ghLink:'https://github.com/tanishabisht/MiniProj-NextJS-NetNinja',
            stacks:['nextjs', 'vercel', 'axios'],
            isFav: false
        },
        {
            name:'NodeJS: Basic to advance',
            desc:'Guide to node JS, authentication, authorization, error handling',
            ghLink:'https://github.com/tanishabisht/MiniProj-NodeJs',
            stacks:['nodejs', 'express', 'mongoose', 'bcryptjs'],
            isFav: false
        },
        {
            name:'Material UI',
            desc:'This is a reference repository on Material UI with React JS',
            ghLink:'https://github.com/tanishabisht/MiniProj-React-MaterialUI',
            stacks:['reactjs', 'json-server', 'axios', 'formik'],
            isFav: false
        },
        {
            name:'React Redux',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'https://github.com/tanishabisht/MiniProj-React-Redux',
            stacks:['reactjs', 'axios', 'react-redux', 'redux'],
            isFav: false
        },
        {
            name:'Angular',
            desc:'My first angular project, documenting the resources refered to learn the basic concepts',
            ghLink:'https://github.com/tanishabisht/MiniProj-Angular-Basics',
            stacks:['angular', 'bootstrap'],
            isFav: true
        },
        {
            name:'Bare React Native',
            desc:'Simple project guide with various features implemented in react native without expo',
            ghLink:'https://github.com/tanishabisht/BareReactNative_Project',
            stacks:['react-native'],
            isFav: false
        },
        {
            name:'React State Management',
            desc:'Managing states in react locally, passing from parent to child, globally and using rest APIs',
            ghLink:'https://github.com/tanishabisht/React-StateManagement',
            stacks:['reactjs', 'react'],
            isFav: true
        },
        {
            name:'GitHub Profile Markdown',
            desc:'A quick reference to the new github profile feature',
            ghLink:'https://github.com/tanishabisht/Markdown-Github-Profile',
            stacks:['markdown'],
            isFav: false
        },
        {
            name:'React Hooks',
            desc:'Contains code and notes on react hooks, for future reference',
            ghLink:'https://github.com/tanishabisht/React-Hooks',
            stacks:['reactjs', 'hooks', 'axios'],
            isFav: false
        }
    ],
    APIs: [
        {
            name:'E-Commerce APIs',
            desc:'Creating E-Commerce APIs using NodeJS ',
            ghLink:'https://github.com/tanishabisht/APIs-NodeJS-E-Commerce',
            stacks:['nodejs', 'express', 'mongoose', 'nodemon', 'express-jwt', 'jsonwebtoken', 'morgan'],
            isFav: false
        },
        {
            name:'Ninja APIs',
            desc:'Creating basic crud operations on NodeJS using express, and saving data to mongoDB using mongoose',
            ghLink:'https://github.com/tanishabisht/APIs-NodeJS-Ninja',
            stacks:['nodejs', 'express', 'mongoose', 'nodemon'],
            isFav: false
        },
    ],
    frontendTemplates: [
        {
            name:'Railway Booking',
            desc:'This is a react template repository. Feel free to use it, to integrate your APIs :)',
            ghLink:'https://github.com/tanishabisht/FrontendTemplate-RailwayBooking',
            stacks:['reactjs', 'materialize-css', 'react-masonry-css'],
            isFav: false
        },
        {
            name:'React Dashboard',
            desc:'Dashboard UI template',
            ghLink:'https://github.com/tanishabisht/MiniProj-ReactJS-DashboardUI',
            stacks:['reactjs', 'css-modules'],
            isFav: true
        }
    ],
    frontendPractice: [
        {
            name:'Dev Challenges',
            desc:'Practice problems from dev challenges',
            ghLink:'https://github.com/tanishabisht/DevChallenge-Responsive',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Frontend Mentor',
            desc:'Html css practice problems from front-end mentor',
            ghLink:'https://github.com/tanishabisht/FrontEnd-Mentor',
            stacks:['html', 'css'],
            isFav: true
        },
        {
            name:'DJI Clone',
            desc:'Clone of DJI drone website',
            ghLink:'https://github.com/tanishabisht/DJI-clone',
            stacks:['html', 'css', 'js', 'netlify'],
            isFav: false
        }
    ],
    miscellaneous: [
        {
            name:'OpenCV Streak',
            desc:'Daily streak on learning OpenCV',
            ghLink:'https://github.com/tanishabisht/OpenCV-Streak',
            stacks:['python', 'numpy', 'panda', 'matplotlib'],
            isFav: false
        }
    ],
    fullStack: [
        {
            name:'EdPoint',
            desc:'A Platform to find other students with particular skill-set you are interested to learn or collaborate!',
            ghLink:'https://github.com/tanishabisht/Project-EdPoint',
            stacks:['firebase-auth', 'firebase-realtime', 'reactjs'],
            isFav: false
        },
        {
            name:'ReadAPI',
            desc:'Frontend for API documentation application',
            ghLink:'https://github.com/tanishabisht/ReadAPI',
            stacks:['reactjs'],
            isFav: true
        },
        {
            name:'Alexandria',
            desc:'Resource sharing website for all',
            ghLink:'https://github.com/tanishabisht/Alexandria',
            stacks:['reactjs', 'flask'],
            isFav: false
        },
        {
            name:'fellows',
            desc:'Aims at encouraging and nurturing a community of learners and building a strong foundation of competitive, self-reliant individuals.',
            ghLink:'https://github.com/incubateind/fellows',
            stacks:['reactjs', 'antd', 'nodejs', 'express', 'mongodb'],
            isFav: true
        },
        // soon: [
        //     {
        //         name:'Blogger Diaries',
        //         desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        //         ghLink:'/',
        //         stacks:['reactjs'],
        //         isFav: false
        //     },
        //     {
        //         name:'Flask blogging ap',
        //         desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        //         ghLink:'/',
        //         stacks:['reactjs'],
        //         isFav: false
        //     },
        //     {
        //         name:'mommy portfolio',
        //         desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        //         ghLink:'/',
        //         stacks:['reactjs'],
        //         isFav: false
        //     },
        //     {
        //         name:'maam portfolio',
        //         desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        //         ghLink:'/',
        //         stacks:['reactjs'],
        //         isFav: false
        //     }
        // ],
    ]
}

const Projects = () => {

    const [category, setCategory] = useState("portfolios")
    const onSelectCategory = (e) => setCategory(e.target.textContent)

    return (
        <div className="container">
            <h1 className="header projHeader">Some more projects</h1>

            <div className="categories">
                {Object.keys(allOtherProjects).map((e,k) => (
                    <span className={`categories__category ${category===e ? "categories__category--active" : null}`} onClick={onSelectCategory} key={k}>{e}</span>
                ))}
            </div>

            <div className="projectsGrid">
                {allOtherProjects[category].map(e => (
                    <a target="__blank" className={`projectsGrid__card ${e.isFav===true?"projectsGrid__card--fav":null}`} href={e.ghLink} key={e.name}>
                        {e.isFav===true?<i className="fa fa-heart"></i>:null}
                        <h3 className="projectsGrid__card__name">{e.name}</h3>
                        <p className="projectsGrid__card__desc">{e.desc}</p>
                        <div className="projectsGrid__card__stacks">
                            {e.stacks.map((s,k) => <span key={k}>{s}</span>)}
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Projects