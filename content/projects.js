const developmentProcess = [
    {phase:'Understand', tasks:['collect info', 'personas', 'set goals', 'mood board']},
    {phase:'Design Phase', tasks:['web flow', 'low fidelity', 'high fidelity', 'user testing']},
    {phase:'Build Phase', tasks:['frontend', 'backend', 'integration', 'optimization']},
    {phase:'Launch Phase', tasks:['deploy', 'explain client']}
]



const selectedProjects = [
    { 
        number:'01', 
        name:'Eureka', 
        ghLink:'https://github.com/tanishabisht/CaffeineOverflow-FrontEnd', 
        vidLink:'https://www.youtube.com/watch?v=llKI-qmbowA&t=6s', 
        siteLink:'https://tanishabisht.github.io/CaffeineOverflow-FrontEnd/#/home', 
        img:'' 
    },
    { 
        number:'02', 
        name:'LunarOps', 
        ghLink:'https://github.com/tanishabisht/LunarOps', 
        vidLink:'https://www.youtube.com/watch?v=DtDYor2o5R8&feature=youtu.be', 
        siteLink:'https://tanishabisht.github.io/LunarOps/#/login', 
        img:'' 
    }
]


const top6Projects = [
    {
        name:'Jishnu Portfolio',
        desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        ghLink:'/',
        stacks:['reactjs', 'firebase-realtime'],
        isFav: false
    },
    {
        name:'SRM ELab print report',
        desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        ghLink:'/',
        stacks:['reactjs', 'firebase-auth'],
        isFav: true
    },
    {
        name:'react state management',
        desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        ghLink:'/',
        stacks:['reactjs'],
        isFav: false
    },
    {
        name:'Angular',
        desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        ghLink:'/',
        stacks:['reactjs'],
        isFav: true
    },
    {
        name:'E-Commerce APIs',
        desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        ghLink:'/',
        stacks:['reactjs'],
        isFav: false
    }
]


const allOtherProjects = {
    needsEditing: [
        {
            name:'EdPoint',
            desc:'',
            ghLink:'https://github.com/tanishabisht/Project-EdPoint',
            stacks:['firebase-auth', 'firebase-realtime-database', 'reactjs'],
            isFav: false
        },
        {
            name:'ReadAPI',
            desc:'Frontend for API documentation application',
            ghLink:'https://github.com/tanishabisht/ReadAPI',
            stacks:['reactjs'],
            isFav: false
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
            isFav: false
        },
    ],
    portfolios: [
        {
            name:'Biocom Project Pandemic',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Jishnu Portfolio',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Jay Portfolio',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Eeshan Portfolio',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Yuvika Gallery Portfolio',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        }
    ],
    scrapers: [
        {
            name:'scrapers',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'SRM ELab print report',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        }
    ],
    documentation: [
        {
            name:'Burger Builder',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'NextJS NetNinja',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'NodeJS',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Material UI',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'React Redux',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Angular',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Bare React Native',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'react state management',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'GitHub Profile Markdown',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'React Hooks',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Bootstrap',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        }
    ],
    APIs: [
        {
            name:'E-Commerce APIs',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Ninja APIs',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
    ],
    frontendTemplates: [
        {
            name:'Railway Booking',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Dashboard',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        }
    ],
    fronendPractice: [
        {
            name:'Frontend Mentor',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Dev Challenges',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'DJI Clone',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'User Listing',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        }
    ],
    soon: [
        {
            name:'Blogger Diaries',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'Flask blogging ap',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'mommy portfolio',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        },
        {
            name:'maam portfolio',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        }
    ],
    missc: [
        {
            name:'OpenCV Streak',
            desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
            ghLink:'/',
            stacks:['reactjs'],
            isFav: false
        }
    ]
}



const otherProjectsDummy = [
    {
        name:'',
        desc:'A functional Twitter Clone with Auth System and CRUD API. Deployment in Progress.',
        ghLink:'/',
        stacks:['reactjs'],
        isFav: false
    }
]



export {developmentProcess, selectedProjects, top6Projects, allOtherProjects}