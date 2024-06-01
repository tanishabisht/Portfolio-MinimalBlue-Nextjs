import Image from "next/image";
import { useTheme } from "next-themes";
import { name, desc, subDesc, ctaPrimaryBtn, ctaSecondaryBtn } from '../../content/home'

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="heroContainer">
      <div className="contentCol">
        <p className="contentCol__subheading">Who am I?</p>
        <h1 className="contentCol__name">{name}</h1>
        <p className="subContent" style={{ marginBottom: "2rem" }}>{desc}</p>

        {subDesc}

        <div className="contentCol__btns">
          <a href={ctaPrimaryBtn.href}>
            <button className="contentCol__btns__regular">{ctaPrimaryBtn.text}</button>
          </a>
          <a target="_blank" href={ctaSecondaryBtn.href}>
            <button className="contentCol__btns__outline">{ctaSecondaryBtn.text}</button>
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
