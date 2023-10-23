import Image from 'next/image'

const stacks = [
    { name: "javascript", icon: "/icon-js.png", isFav: true },
    { name: "python", icon: "/icon-python.png", isFav: true },
    { name: "cpp", icon: "/icon-cpp.png", isFav: false },
  
    { name: "git", icon: "/icon-git.png", isFav: true },
    { name: "github", icon: "/icon-github.png", isFav: true },
    { name: "bitbucket", icon: "/icon-bitbucket.png", isFav: false },
    { name: "linux", icon: "/icon-linux.png", isFav: false },
  
    { name: "nodejs", icon: "/icon-nodejs.png", isFav: true },
    { name: "expressjs", icon: "/icon-express.png", isFav: true },
    { name: "flask", icon: "/icon-flask.png", isFav: false },
    { name: "mongodb", icon: "/icon-mongodb.png", isFav: true },
  
    { name: "react js", icon: "/icon-react.png", isFav: true },
    { name: "redux", icon: "/icon-redux.png", isFav: true },
  
    { name: "nextjs", icon: "/icon-nextjs.png", isFav: false },
    { name: "angular", icon: "/icon-angular.png", isFav: false },
  
    { name: "html", icon: "/icon-html.png", isFav: true },
    { name: "css", icon: "/icon-css.png", isFav: true },
    { name: "sass", icon: "/icon-sass.png", isFav: false },
  
    { name: "bootstrap", icon: "/icon-bootstrap.png" },
    { name: "material ui", icon: "/icon-materialui.png" },
    { name: "tailwind css", icon: "/icon-tailwind.png" },
  
    { name: "selenium", icon: "/icon-selenium.png", isFav: false },
    { name: "vscode", icon: "/icon-vscode.png", isFav: true },
  
    { name: "xd", icon: "/icon-xd.png", isFav: true },
    { name: "figma", icon: "/icon-figma.png", isFav: false },
    { name: "photoshop", icon: "/icon-ps.png", isFav: false },
  ];

const Tech = () => {
    return (
        <section className="container techContainer">
            <h1 className="header techContainer__header">Tech I have worked with</h1>
            <div className="techContainer__socialHandles">
                {stacks.map((e,k) => {
                    return (
                        <span data-text={e.name} className={`techContainer__socialHandles__tooltip ${e.isFav?"icon_fav":null}`} key={k}>
                            <span><Image src={e.icon} height={20} width={20} /></span>
                        </span>
                    )
                })}
            </div>
        </section>
    )
}

export default Tech