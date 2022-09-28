import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const linkedInLink = "https://www.linkedin.com/in/tanisha-bisht/";
const resumeLink =
  "https://doc-0o-bc-apps-viewer.googleusercontent.com/viewer/secure/pdf/acd1l0f3ktghtilmj66vapd98d1n2kh6/1fl3ta1h237qlr3t65k6du7clm3aoj9d/1664393325000/drive/17114764929517559294/ACFrOgAe8-HaE4MwmtMo7rosqNo3dvzbPThTGsXLHp8PWyIAbAN2UA2pA7biHJgenCKulVvizcePm8j_JQ4LwYyXJQcuHXJpQBJZvMeSEzZD9mmGWZMCCrUp4Y5cnOxVpoARUzgz-IYg-n1A5sD4?print=true";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <section className="heroContainer">
      <div className="contentCol">
        <p className="contentCol__subheading">Who am I?</p>
        <h1 className="contentCol__name">Tanisha Bisht</h1>
        <p>
          "Software developer from India who crafts pleasing and functional web
          experiences"
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
          <Image src="/light_me.png" width={420} height={585} />
        ) : (
          <Image src="/dark_me.png" width={420} height={585} />
        )}
      </div>
    </section>
  );
};

export default Hero;
