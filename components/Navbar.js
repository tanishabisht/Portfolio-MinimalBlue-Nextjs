import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link href="/">
          <a>
            <Image src="/favicon.ico" width={50} height={50} />
          </a>
        </Link>
        <span>TANISHA</span>
      </div>
      <Link href="/works">
        <a>works</a>
      </Link>
      {/* <Link href="/writings">
        <a>writings</a>
      </Link> */}
      <Link href="https://github.com/tanishabisht">
        <a target="_blank">github</a>
      </Link>
      <span onClick={changeTheme} className="nav__themeToggle">
        {theme === "light" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
