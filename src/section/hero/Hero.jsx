import styles from "./HeroStyles.module.css";
import heroimg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf"
import {  useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun:moon;
    const githubIcon = theme === 'light' ? githubLight:githubDark;
    const twitterIcon = theme === 'light' ? twitterLight:twitterDark;
    const linkedinIcon = theme === 'light' ? linkedinLight:linkedinDark;

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
        className = {styles.hero}
        src={heroimg} 
        alt="profile picture of Prince Choubey" 
        />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt='Color mode icon'
        onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>Prince <br/>
        Choubey
        </h1>
        <h2>
        Software Developer
        </h2>
        <span>
        <a href="Https://twitter.com" target="_black">
        <img src={twitterIcon} alt="TwitterIcon"></img>
        </a>
        <a href="Https://github.com" target="_black">
        <img src={githubIcon} alt="githubIcon"></img>
        </a>
        <a href="Https://linkedin.com" target="_black">
        <img src={linkedinIcon} alt="LinkedinIcon"></img>
        </a>
        </span>
        <p className={styles.description}>
        Experienced Full-Stack Developer with a strong background in Python and JavaScript, along with their
        associated frameworks such as Django, React, Node.js, and Next.js
        </p>
        <a href={CV} download>
            <button className="Hover" >
                Resume
            </button>
        </a>
    </div>
  </section>;
}

export default Hero