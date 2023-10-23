import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const linkedInLink = "https://www.linkedin.com/in/tanisha-bisht/";
const resumeLink =
  "https://drive.google.com/file/d/1wkUl-gwaux53zZFtdMCNB-SjhD6Lk8D-/view?usp=sharing";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <section className="heroContainer">
      <div className="contentCol">
        <p className="contentCol__subheading">Who am I?</p>
        <h1 className="contentCol__name">Tanisha Bisht</h1>
        <p className="subContent" style={{marginBottom: "2rem"}}>
          "Software developer who crafts pleasing and functional web
          experiences"</p>
        <p>Currently pursuing her master's in Computer Science at <b>Columbia 
          University</b> in the heart of NYC
        </p>
        <div className="contentCol__btns">
          <a target="_blank" href={resumeLink}>
            <button className="contentCol__btns__regular">See my Resume</button>
          </a>
          <a target="_blank" href={linkedInLink}>
            <button className="contentCol__btns__outline">Contact Me</button>
          </a>
        </div>
      </div>
      <div className="imageCol">
        {theme === "light" ? (
          <Image src="/light_me.png" width={420} height={630} />
        ) : (
          <Image src="/dark_me.png" width={420} height={630} />
        )}
      </div>
    </section>
  );
};

export default Hero;
